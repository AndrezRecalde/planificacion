import { List, Table } from "@mantine/core";
import { TextSection } from "../../../elements/titles/TextSection";

export const ProgramaDetail = ({ row }) => {
    return (
        <Table
            horizontalSpacing="md"
            verticalSpacing="md"
            withTableBorder
            withColumnBorders
        >
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Objetivo Estrategico del PDOT</Table.Th>
                    <Table.Th>Meta Resultado del PDOT</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>
                        <TextSection tt="" fz={14}>
                            {row.original.objetivo_id}
                        </TextSection>
                    </Table.Td>
                    <Table.Td>
                        {row.original.meta_id.map((meta) => (
                            <List key={meta} spacing="md" size="sm">
                                <List.Item>{meta}</List.Item>
                            </List>
                        ))}
                    </Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    );
};
