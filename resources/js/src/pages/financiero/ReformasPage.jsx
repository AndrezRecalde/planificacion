import { Card, Container, Table } from "@mantine/core";
import { TableContent, TitlePage, TitleSection } from "../../components";

const elements_r = [
    {
        codigo: 6456,
        remitente: "Gestión de Tecnologías de la Información",
        accion: "Solicitud para reformar el presupuestario para el proyecto",
        fecha: "2023-11-05",
    },
    {
        codigo: 7892,
        remitente: "Gestion de Cuenca y Riego Dranaje",
        accion: "Solicitud de reforma presupuestaria",
        fecha: "2023-11-05",
    },
    {
        codigo: 7479,
        remitente: "Gestion Ambiental",
        accion: "Solicitud de redirección de presupuesto",
        fecha: "2023-11-05",
    },
    {
        codigo: 3344,
        remitente: "Gestión Administrativa",
        accion: "Reforma presupuestaria para el programa",
        fecha: "2023-11-05",
    },
    {
        codigo: 5718,
        remitente: "Gestión de Infraestructura Víal",
        accion: "Solicitud de acreditación de presupuesto",
        fecha: "2023-11-05",
    },
];

const elements_h = ["codigo", "remitente", "accion", "fecha"];

export const ReformasPage = () => {
    const rows = elements_r.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.codigo}</Table.Td>
            <Table.Td>{element.remitente}</Table.Td>
            <Table.Td>{element.accion}</Table.Td>
            <Table.Td>{element.fecha}</Table.Td>
        </Table.Tr>
    ));

    const headings = elements_h.map((element, index) => (
        <Table.Th>{element}</Table.Th>
    ));

    return (
        <Container size="lg">
            <TitlePage title="Revisión de reformas" order={2} size="h2" />
            <Card withBorder shadow="sm" radius="md" p="lg" mt={20} mb={20}>
                <Card.Section withBorder inheritPadding py="xs">
                    <TitleSection title="Solicitudes de gestiones" fw={700} />
                </Card.Section>
                <Card.Section withBorder inheritPadding py="xs">
                    <TableContent headings={headings} rows={rows} />
                </Card.Section>
            </Card>
        </Container>
    );
};
