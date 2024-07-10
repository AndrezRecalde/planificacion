import { Box, Stack } from "@mantine/core";

export const ActividadForm = ({ form }) => {



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clic');
    }

    return (
        <Box
            component="form"
            mx="auto"
            style={(theme) => ({
                padding: theme.spacing.xs,
            })}
            onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
        >
            <Stack>

            </Stack>
        </Box>
    );
};
