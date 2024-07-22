import { Modal } from "@mantine/core";
import { CategoriapdotForm, TextSection } from "../../../../../components";
import { isNotEmpty, useForm } from "@mantine/form";
import { useCategoriapdotStore, useUiCategoriapdot } from "../../../../../hooks";

export const CategoriapdotModal = () => {
    const { activateCategoriapdot, setActivateCategoriapdot } = useCategoriapdotStore();
    const { isOpenModalCategoriapdot, modalActionCategoriapdot } = useUiCategoriapdot();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_categoria: "",
        },
        validate: {
            nombre_categoria: isNotEmpty("Por favor ingresa el nombre de la categoria")
        }
    });

    const handleCloseModal = () => {
        modalActionCategoriapdot(false);
        if (activateCategoriapdot !== null) {
            setActivateCategoriapdot(null);
        }
        form.reset();
    }

    return (
        <Modal
            centered
            opened={isOpenModalCategoriapdot}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Ficha Categoria del PDOT
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <CategoriapdotForm form={form} />
        </Modal>
    );
};
