import { Modal } from "@mantine/core";

export const ObjetivosEstrategicosModal = () => {



    return (
        <Modal
            opened={isOpenModalInstrumento}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Instrumento de Planificación
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <InstrumentoForm form={form} />
        </Modal>
    );
};
