import { Card, Container, Table } from "@mantine/core";
import { TableContent, TitlePage, TitleSection } from "../../components";


const elements_r = [
    {
        codigo: 6456,
        proyecto: "Fortalecimiento de la seguridad informática",
        tipo: "PDOT",
        nivel: "MEDIO",
        fecha_inicio: "2023-11-03",
        fecha_finalizacion: "2023-12-01",
        progreso: "30",
        status: "Abierto"
    },
    {
        codigo: 8344,
        proyecto: "Mesa de ayuda informática",
        tipo: "PEI",
        nivel: "BAJO",
        fecha_inicio: "2023-05-03",
        fecha_finalizacion: "2023-08-01",
        progreso: "40",
        status: "Abierto"
    },
    {
        codigo: 7844,
        proyecto: "Automatización de procesos internos a tráves del desarrollo de soluciones informáticas",
        tipo: "PEI",
        nivel: "MEDIO",
        fecha_inicio: "2023-04-03",
        fecha_finalizacion: "2023-06-01",
        progreso: "60",
        status: "Abierto"
    },
];
const elements_h = ["Código", "Proyecto", "Tipo", "Nivel", "Fecha Inicio", "Fecha Fin", "Progreso", "Status"];


export const ProyectosPage = () => {

    const rows = elements_r.map((element) => (
        <Table.Tr key={element.codigo}>
            <Table.Td>{element.codigo}</Table.Td>
            <Table.Td>{element.proyecto}</Table.Td>
            <Table.Td>{element.tipo}</Table.Td>
            <Table.Td>{element.nivel}</Table.Td>
            <Table.Td>{element.fecha_inicio}</Table.Td>
            <Table.Td>{element.fecha_finalizacion}</Table.Td>
            <Table.Td>{element.progreso}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
        </Table.Tr>
    ));

    const headings = elements_h.map((element, index) => (
        <Table.Th key={element[index]}>{element}</Table.Th>
    ));

    return (
        <Container size="lg">
            <TitlePage title="Proyectos" order={2} size="h2" />
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
