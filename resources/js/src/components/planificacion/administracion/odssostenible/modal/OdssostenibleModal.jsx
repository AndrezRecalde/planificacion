import { Modal } from "@mantine/core";
import { OdssostenibleForm, TextSection } from "../../../../../components";
import { useOdssostenibleStore, useUiOdssostenible } from "../../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";

export const OdssostenibleModal = () => {

    const { isOpenModalOdssostenible, modalActionOdssostenible } = useUiOdssostenible();
    const { setActivateOdssostenible, activateOdssostenible } = useOdssostenibleStore();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_ods: "",
            imagen_url: null
        },
        validate: {
            nombre_ods: isNotEmpty("Por favor digite el objetivo"),
            imagen_url: isNotEmpty("Por favor colocar el logo del objetivo")
        },
        transformValues: (values) =>({
            ...values,
            imagen_url: values.imagen_url.name
        })
    });

    const handleCloseModal = () => {
        if (activateOdssostenible !== null) {
            setActivateOdssostenible(null);
        }
        modalActionOdssostenible(false);
        form.reset();
    }

    return (
        <Modal
            opened={isOpenModalOdssostenible}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Ficha Gobierno
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <OdssostenibleForm form={form} />
        </Modal>
    );
};
