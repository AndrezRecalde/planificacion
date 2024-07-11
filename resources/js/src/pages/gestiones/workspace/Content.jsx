import { Box, Text } from "@mantine/core";

export function Content() {
    return (
        <div>
            <Text
                mb="sm"
                size="lg"
                fw={700}
                style={{ fontFamily: "var(--docs-font-primary)" }}
            >
                Accordion component
            </Text>
            <Box
                bg="var(--mantine-color-body)"
                style={{ borderRadius: "var(--mantine-radius-sm)" }}
            >
                Accordion component
            </Box>
            <Text
                mb="sm"
                mt={40}
                size="lg"
                fw={700}
                style={{ fontFamily: "var(--docs-font-primary)" }}
            >
                Timeline component
            </Text>
            Accordion component
        </div>
    );
}
