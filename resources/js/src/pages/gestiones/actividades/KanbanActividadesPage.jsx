import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
    updateTaskStatus,
    reorderTasks,
    reorderColumns,
    addColumn,
} from "../../../store/actividad/kanbanSlice";
import {
    Container,
    Paper,
    Text,
    Button,
    TextInput,
    ScrollArea,
    Box,
    Card,
    Group,
    Title,
} from "@mantine/core";
import classes from "../../../assets/styles/gestiones/actividad/KanbanActividad.module.css";

export const KanbanActividadesPage = () => {
    const tasks = useSelector((state) => state.kanban.tasks);
    const columns = useSelector((state) => state.kanban.columns);
    const dispatch = useDispatch();
    const [newColumnName, setNewColumnName] = useState("");

    const handleDragEnd = (result) => {
        const { source, destination, type } = result;
        if (!destination) return;

        if (type === "COLUMN") {
            dispatch(
                reorderColumns({
                    sourceIndex: source.index,
                    destinationIndex: destination.index,
                })
            );
        } else {
            dispatch(
                reorderTasks({
                    sourceIndex: source.index,
                    destinationIndex: destination.index,
                    sourceColumn: source.droppableId,
                    destinationColumn: destination.droppableId,
                })
            );

            // Update task status when moved to a different column
            if (source.droppableId !== destination.droppableId) {
                dispatch(
                    updateTaskStatus({
                        id: result.draggableId,
                        status: destination.droppableId,
                    })
                );
            }
        }
    };

    const handleAddColumn = () => {
        if (newColumnName.trim()) {
            dispatch(addColumn(newColumnName));
            setNewColumnName("");
        }
    };

    return (
        <Container className={classes.kanbanContainer}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable
                    droppableId="all-columns"
                    direction="horizontal"
                    type="COLUMN"
                >
                    {(provided) => (
                        <ScrollArea
                            type="scroll"
                            style={{ width: "100%" }}
                            scrollbarSize={8}
                            offsetScrollbars
                        >
                            <Box
                                style={{ display: "flex", minWidth: "100%" }}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {columns.map((column, columnIndex) => (
                                    <Draggable
                                        key={column}
                                        draggableId={column}
                                        index={columnIndex}
                                        type="COLUMN"
                                    >
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={classes.kanbanColumn}
                                            >
                                                <Title
                                                    order={3}
                                                    className={
                                                        classes.kanbanColumnTitle
                                                    }
                                                    align="center"
                                                >
                                                    {column}
                                                </Title>
                                                <Droppable
                                                    droppableId={column}
                                                    key={column}
                                                    type="TASK"
                                                >
                                                    {(provided) => (
                                                        <div
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            {...provided.droppableProps}
                                                        >
                                                            {tasks
                                                                .filter(
                                                                    (task) =>
                                                                        task.status ===
                                                                        column
                                                                )
                                                                .sort(
                                                                    (a, b) =>
                                                                        a.order -
                                                                        b.order
                                                                )
                                                                .map(
                                                                    (
                                                                        task,
                                                                        index
                                                                    ) => (
                                                                        <Draggable
                                                                            key={
                                                                                task.id
                                                                            }
                                                                            draggableId={
                                                                                task.id
                                                                            }
                                                                            index={
                                                                                index
                                                                            }
                                                                            type="TASK"
                                                                        >
                                                                            {(
                                                                                provided
                                                                            ) => (
                                                                                <Paper
                                                                                    ref={
                                                                                        provided.innerRef
                                                                                    }
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    className={
                                                                                        classes.kanbanTask
                                                                                    }
                                                                                >
                                                                                    <Text>
                                                                                        {
                                                                                            task.title
                                                                                        }
                                                                                    </Text>
                                                                                </Paper>
                                                                            )}
                                                                        </Draggable>
                                                                    )
                                                                )}
                                                            {
                                                                provided.placeholder
                                                            }
                                                        </div>
                                                    )}
                                                </Droppable>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </Box>
                        </ScrollArea>
                    )}
                </Droppable>
            </DragDropContext>
            <div className={classes.addColumn}>
                <Group justify="center">
                    <TextInput
                        placeholder="New column name"
                        value={newColumnName}
                        onChange={(event) =>
                            setNewColumnName(event.currentTarget.value)
                        }
                    />
                    <Button onClick={handleAddColumn}>Add Column</Button>
                </Group>
            </div>
        </Container>
    );
};
