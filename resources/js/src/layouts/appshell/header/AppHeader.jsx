import { Burger, Group } from "@mantine/core";
import { BtnCombobox, BtnSearch, UserBtnHeader } from "../../../components";
import { Logo, BtnDarkMode } from "../../../components";
import classes from "../../../assets/styles/layout/AppHeaderModules/AppHeader.module.css";

export const AppHeader = ({
    mobileOpened,
    toggleMobile,
    desktopOpened,
    toggleDesktop,
}) => {
    return (
        <Group h="100%" px="md" justify="space-between">
            <Group>
                <Burger
                    opened={mobileOpened}
                    onClick={toggleMobile}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Burger
                    opened={desktopOpened}
                    onClick={toggleDesktop}
                    visibleFrom="sm"
                    size="sm"
                />
                {/* <Logo height={50} width={200} /> */}
                <BtnCombobox />
            </Group>

            <Group>
                <BtnSearch classes={classes} />
                <BtnDarkMode classes={classes} />
                <UserBtnHeader />
            </Group>
        </Group>
    );
};
