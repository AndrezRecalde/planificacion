import { Text } from "@mantine/core";

export const TextSection = ({
    color = "",
    tt = "uppercase",
    fw,
    fz = 14,
    ta = "left",
    children,
    fs = "",
    ...props
}) => {
    return (
        <Text c={color} fz={fz} tt={tt} ta={ta} fw={fw} fs={fs} {...props}>
            {children}
        </Text>
    );
};
