// src/kanbanSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        { id: "1", title: "Task 1", status: "To Do", order: 0 },
        { id: "2", title: "Task 2", status: "In Progress", order: 0 },
        { id: "3", title: "Task 3", status: "Done", order: 0 },
    ],
    columns: ["To Do", "In Progress", "Done"],
};

export const kanbanSlice = createSlice({
    name: "kanban",
    initialState,
    reducers: {
        updateTaskStatus: (state, action) => {
            const { id, status } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.status = status;
            }
        },
        reorderTasks: (state, action) => {
            const {
                sourceIndex,
                destinationIndex,
                sourceColumn,
                destinationColumn,
            } = action.payload;

            // Filter tasks based on their status (column)
            const sourceTasks = state.tasks.filter(
                (task) => task.status === sourceColumn
            );
            const destinationTasks = state.tasks.filter(
                (task) => task.status === destinationColumn
            );

            // Remove the task from the source column
            const [movedTask] = sourceTasks.splice(sourceIndex, 1);

            if (sourceColumn === destinationColumn) {
                // Reorder within the same column
                sourceTasks.splice(destinationIndex, 0, movedTask);
            } else {
                // Move task to a different column
                movedTask.status = destinationColumn;
                destinationTasks.splice(destinationIndex, 0, movedTask);
            }

            // Update the order property for each task
            [sourceTasks, destinationTasks].forEach((tasks) => {
                tasks.forEach((task, index) => {
                    const taskInState = state.tasks.find(
                        (t) => t.id === task.id
                    );
                    taskInState.order = index;
                });
            });
        },
        reorderColumns: (state, action) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [movedColumn] = state.columns.splice(sourceIndex, 1);
            state.columns.splice(destinationIndex, 0, movedColumn);
        },
        addColumn: (state, action) => {
            state.columns.push(action.payload);
        },
    },
});

export const { updateTaskStatus, reorderTasks, reorderColumns, addColumn } =
    kanbanSlice.actions;
