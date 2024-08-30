import { Modal } from "@mantine/core";
import { MetapdotForm, TextSection } from "../../../../../components";
import {
    useEarticulacionStore,
    useMetapdotStore,
    useUiMetapdot,
} from "../../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import { useEffect } from "react";
import { APP_WORDS } from "../../../../../helpers";

export const MetapdotModal = () => {
    const { activateMetapdot, setActivateMetapdot } = useMetapdotStore();
    const { isOpenModalMetapdot, modalActionMetapdot } = useUiMetapdot();
    const { startLoadEarticulaciones, startClearEarticulaciones } =
        useEarticulacionStore();

    const form = useForm({
        //mode: "uncontrolled",
        initialValues: {
            nombre_meta: "",
            earticulacion_id: null,
        },
        validate: {
            nombre_meta: isNotEmpty("Por favor ingrese la meta pdot"),
            earticulacion_id: isNotEmpty("Por favor seleccione una estrategía"),
        },
        transformValues: (values) => ({
            ...values,
            earticulacion_id: Number(values.earticulacion_id) || null,
        }),
    });

    useEffect(() => {
        startLoadEarticulaciones({ activo: true });
        return () => {
            startClearEarticulaciones();
        };
    }, [isOpenModalMetapdot]);


    const handleCloseModal = () => {
        modalActionMetapdot(false);
        if (activateMetapdot !== null) {
            setActivateMetapdot(null);
        }
        form.reset();
    };

    return (
        <Modal
            opened={isOpenModalMetapdot}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.METAPDOT_TITLE_MODAL}
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <MetapdotForm form={form} />
        </Modal>
    );
};
