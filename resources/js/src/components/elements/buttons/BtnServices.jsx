import { Button, Group, rem } from "@mantine/core";
import { IconCategory, IconMailFast } from "@tabler/icons-react";

export const BtnServicesApps = () => {
    return (
        <Group grow mt="md">
            <Button
                leftSection={<IconMailFast size={16} color="orange" />}
                radius="md"
                variant="light"
                component="a"
                href="https://www.gadpe.gob.ec/webmail"
                target="_blank"
                color="orange"
            >
                Webmail
            </Button>
            <Button
                leftSection={<IconCategory size={16} color="teal" />}
                radius="md"
                variant="light"
                component="a"
                href="http://186.46.193.22:8080/intranet"
                target="_blank"
                color="teal"
            >
                Intranet
            </Button>
        </Group>
    );
};

export const BtnSubmit = ({
    children,
    fullwidth = true,
    heigh = 45,
    fontSize = 18,
    IconSection,
}) => {
    return (
        <Button
            type="submit"
            fullWidth={fullwidth}
            mt="md"
            mb="md"
            rightSection={<IconSection />}
            styles={{
                root: {
                    "--button-height": rem(heigh),
                },
                inner: {
                    fontSize: fontSize,
                },
            }}
        >
            {children}
        </Button>
    );
};

export const BtnSection = ({
    handleAction,
    heigh = 35,
    fontSize = 14,
    variant = "light",
    radius = "sm",
    icon:Icon,
    mb = 0,
    mt = 0,
    children,
    disabled = false
}) => {
    return (
        <Button
            mt={mt}
            mb={mb}
            disabled={disabled}
            radius={radius}
            color="indigo.7"
            variant={variant}
            leftSection={<Icon color={"#4C6EF5"} />}
            onClick={(e) => handleAction(e)}
            styles={{
                root: {
                    "--button-height": rem(heigh),
                },
                inner: {
                    fontSize: fontSize,
                },
            }}
        >
            {children}
        </Button>
    );
};
