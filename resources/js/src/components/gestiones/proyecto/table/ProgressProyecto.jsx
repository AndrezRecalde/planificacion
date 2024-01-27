import { Group, Progress } from "@mantine/core";
import { TextSection } from "../../../../components";

export const ProgressProyecto = ({ cell, classes }) => {
    return (
        <>
            <Group justify="space-between">
                <TextSection
                    fz="xs"
                    color="teal"
                    fw={700}
                    tt=""
                    title={`${cell.getValue()}%`}
                />
                <TextSection
                    fz="xs"
                    color="red"
                    fw={700}
                    tt=""
                    title={`${100 - cell.getValue()}%`}
                />
            </Group>
            <Progress.Root>
                <Progress.Section
                    {...classes}
                    value={cell.getValue()}
                    color="teal"
                />

                <Progress.Section
                    {...classes}
                    value={100 - cell.getValue()}
                    color="red"
                />
            </Progress.Root>
        </>
    );
};
