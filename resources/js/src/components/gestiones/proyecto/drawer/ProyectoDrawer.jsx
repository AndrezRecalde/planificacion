import { Drawer, ScrollArea } from "@mantine/core";
import { useUiProyecto } from "../../../../hooks";
import { ProyectoDetail, TextSection } from "../../../../components";

export const ProyectoDrawer = () => {
    const { isOpenDrawerProyecto, drawerActionProyecto } = useUiProyecto();

    const handleCloseModal = () => {
        drawerActionProyecto(0);
    };

    return (
        <Drawer
            opened={isOpenDrawerProyecto}
            onClose={handleCloseModal}
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    PROY-GTIC-2024-08
                </TextSection>
            }
            withOverlay
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            scrollAreaComponent={ScrollArea.Autosize}
            position="right"
            size="lg"
            transitionProps={{
                transition: "fade",
                duration: 150,
                timingFunction: "linear",
            }}
        >
            <ProyectoDetail />
        </Drawer>
    );
};
