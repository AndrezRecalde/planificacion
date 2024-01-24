import { Button, Group } from "@mantine/core";
import { IconCategory, IconMailFast } from "@tabler/icons-react";


export const BtnServices = () => {
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

