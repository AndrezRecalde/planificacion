import { Table } from "@mantine/core";

export const TableContent = ({ headings, rows }) => {
    return (
        <Table striped withTableBorder withColumnBorders>
            <Table.Thead>
                <Table.Tr>{headings}</Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};
