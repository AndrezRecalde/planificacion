import { Image } from '@mantine/core';
import logo from "../../../assets/images/LogoMediano.png";


export const Logo = ({ height = 200, width = "auto", className }) => {
    return (
        <Image
            radius="md"
            mx="auto"
            h={height}
            w={width}
            fit="contain"
            alt="logo"
            src={logo}
            className={className}
        />
    );
};
