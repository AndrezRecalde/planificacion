import { Title } from "@mantine/core";

export const TitlePage = ({ order = 1, ta, title, ...props }) => {
    return (
        <Title ta={ta} order={order} {...props}>
            {title}
        </Title>
    );
};
