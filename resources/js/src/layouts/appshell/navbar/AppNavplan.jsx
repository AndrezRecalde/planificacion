import { useState } from "react";
import { Badge, Group, SegmentedControl } from "@mantine/core";
import {
    IconShoppingCart,
    IconLicense,
    IconMessage2,
    IconBellRinging,
    IconMessages,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconUsers,
    IconFileAnalytics,
    IconDatabaseImport,
    IconReceipt2,
    IconReceiptRefund,
    IconLogout,
    IconSwitchHorizontal,
} from "@tabler/icons-react";

import classes from "./NavbarModule/AppNavplan.module.css";

const tabs = {
    gestion: [
        { link: "", label: "Notifications", icon: IconBellRinging },
        { link: "", label: "Billing", icon: IconReceipt2 },
        { link: "", label: "Security", icon: IconFingerprint },
        { link: "", label: "SSH Keys", icon: IconKey },
        { link: "", label: "Databases", icon: IconDatabaseImport },
        { link: "", label: "Authentication", icon: Icon2fa },
        { link: "", label: "Other Settings", icon: IconSettings },
    ],
    administrar: [
        { link: "", label: "Orders", icon: IconShoppingCart },
        { link: "", label: "Receipts", icon: IconLicense },
        { link: "", label: "Reviews", icon: IconMessage2 },
        { link: "", label: "Messages", icon: IconMessages },
        { link: "", label: "Customers", icon: IconUsers },
        { link: "", label: "Refunds", icon: IconReceiptRefund },
        { link: "", label: "Files", icon: IconFileAnalytics },
    ],
};

export const AppNavplan = () => {
    const [section, setSection] = useState("gestion");
    const [active, setActive] = useState("Billing");

    const links = tabs[section].map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div>


                <SegmentedControl
                    mt={10}
                    value={section}
                    onChange={(value) => setSection(value)}
                    transitionTimingFunction="ease"
                    fullWidth
                    data={[
                        { label: "Gestión", value: "gestion" },
                        { label: "Administrar", value: "administrar" },
                    ]}
                />
            </div>

            <div className={classes.navbarMain}>{links}</div>

        </nav>
    );
};
