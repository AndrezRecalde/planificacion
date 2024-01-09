import { Button } from "@mantine/core";

export const BtnSubmit = ({ text, radius, LeftSection }) => {
    return (
        <Button type="submit" radius={radius} leftSection={<LeftSection />}>
            {text}
        </Button>
    );
};
