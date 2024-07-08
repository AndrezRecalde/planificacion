import { IconChevronsLeft } from "@tabler/icons-react";

import classes from "../../../assets/styles/layout/NavbarModule/AppNavplan.module.css";


export const AppNavfooter = () => {
    return (
        <div className={classes.footer}>
           {/*  <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                <IconSwitchHorizontal
                    className={classes.linkIcon}
                    stroke={1.5}
                />
                <span>Change account</span>
            </a> */}

            <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                <IconChevronsLeft className={classes.linkIcon} stroke={1.5} />
                <span>Logout</span>
            </a>
        </div>
    );
};
