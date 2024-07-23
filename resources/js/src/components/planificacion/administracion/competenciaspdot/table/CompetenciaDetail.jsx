import { List, Table } from "@mantine/core";

export const CompetenciaDetail = ({ row }) => {
    return (
        <Table horizontalSpacing="md" withTableBorder withColumnBorders>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Componentes</Table.Th>
                    <Table.Th>Categorias</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>
                        <List spacing="md" size="sm">
                            {row.original.componentes.map(
                                (componente, index) => (
                                    <List.Item key={index}>
                                        {componente.nombre_componente}
                                    </List.Item>
                                )
                            )}
                        </List>
                    </Table.Td>
                    <Table.Td>
                        <List spacing="md" size="sm">
                            {row.original.cotpdots.map(
                                (categoria, index) => (
                                    <List.Item key={index}>
                                        {categoria.nombre_categoria}
                                    </List.Item>
                                )
                            )}
                        </List>
                    </Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    );
};
