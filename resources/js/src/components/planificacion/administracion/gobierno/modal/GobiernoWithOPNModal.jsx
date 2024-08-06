import { Drawer } from "@mantine/core";
import { GobiernoWithOPNForm, TextSection } from "../../../../../components";
import { useGobiernoStore, useUiGobierno } from "../../../../../hooks";

export const GobiernoWithOPNModal = () => {
    const {  activateGobierno, setActivateGobierno } = useGobiernoStore();
    const { isOpenModalViewOPNGobierno, modalActionViewOPNGobierno } =
        useUiGobierno();

    const handleCloseModal = () => {
        if (activateGobierno !== null) {
            setActivateGobierno(null);
        }
        modalActionViewOPNGobierno(false);
    };

    return (
        <Drawer
            position="right"
            offset={8}
            radius="md"
            size="lg"
            opened={isOpenModalViewOPNGobierno}
            onClose={handleCloseModal}
            title={
                <TextSection tt="" fw={700}>
                    Objetivos del Gobierno
                </TextSection>
            }
        >
            <GobiernoWithOPNForm />
        </Drawer>
    );
};
