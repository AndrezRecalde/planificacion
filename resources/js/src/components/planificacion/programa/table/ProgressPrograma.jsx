import { Group, Progress } from "@mantine/core";
import { TextSection } from "../../../../components";

export const ProgressPrograma = ({ cell, classes }) => {
    return (
        <>
            <Group justify="space-between">
                <TextSection
                    fz="xs"
                    color="teal"
                    fw={700}
                    tt=""
                >{`${cell.getValue()}%`}</TextSection>
                <TextSection fz="xs" color="red" fw={700} tt="">
                    {`${ 100 - cell.getValue() }%`}
                </TextSection>
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
