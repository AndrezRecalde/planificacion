import { Table } from "@mantine/core";
import { useGobiernoStore } from "../../../../../hooks";
import { AlertSection, TextSection } from "../../../../../components";
import classes from "../../../../../assets/styles/planificacion/administracion/gobierno/ListEjesWithObjetivos.module.css";
import { IconAlertCircle } from "@tabler/icons-react";

export const GobiernoWithOPNForm = () => {
    const { activateGobierno } = useGobiernoStore();

    const items = activateGobierno?.opndesarrollos.map((objetivo, index) => (
        <Table.Tr key={index}>
            <Table.Td>{objetivo.objetivo_opn}</Table.Td>
            <Table.Td>{objetivo.nombre_eje}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            {activateGobierno?.opndesarrollos.length > 0 ? (
                <Table
                    horizontalSpacing="sm"
                    verticalSpacing="sm"
                    striped
                    withTableBorder
                    withColumnBorders
                >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Objetivo</Table.Th>
                            <Table.Th>Eje del Objetivo</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{items}</Table.Tbody>
                </Table>
            ) : (
                <AlertSection
                    variant="light"
                    color="indigo"
                    icon={IconAlertCircle}
                    title="Sin Objetivos"
                    text="Por favor acceda a la Gestion de Objetivos para agregar
                          o administrar los Objetivos del Plan Nacional de Desarrollo
                          de este Gobierno"
                />
            )}
        </div>
    );
};
