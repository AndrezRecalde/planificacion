/* Elementos */
import { BtnServicesApps, BtnSubmit, BtnSection } from "./elements/buttons/BtnServices";
import { TextSection } from "./elements/titles/TextSection";
import { TitlePage } from "./elements/titles/TitlePage";
import { TableContent } from "./elements/tables/TableContent";
import { MenuTable } from "./elements/tables/MenuTable";
import { Logo } from "./elements/application/Logo";
import { BtnDarkMode } from "./elements/buttons/BtnDarkMode";
import { BtnSearch, InputSeach } from "./elements/buttons/BtnSearch";
import { DataCombobox } from "./elements/combobox/DataCombobox";
import { AlertSection } from "./elements/alert/AlertSection";

/* Auth */
import { AuthForm } from "./auth/AuthForm";

/* Usuario */
import { ProfileForm } from "./user/ProfileForm";
import { UserBtnHeader } from "./user/UserBtnHeader";
import { ChangePwdForm } from "./user/ChangePwdForm";

/* Financiero */
import { CardGestiones } from "./financiero/CardGestiones";

/* Gestiones */
    /* Proyectos */
import { BtnDetailProyecto } from "./gestiones/proyecto/sections/BtnDetailProyecto";
import { OverviewProyecto } from "./gestiones/proyecto/sections/OverviewProyecto";
import { ActivitiesProyecto } from "./gestiones/proyecto/sections/ActivitiesProyecto";
import { MilestonesProyecto } from "./gestiones/proyecto/sections/MilestonesProyecto";
import { FilesProyecto } from "./gestiones/proyecto/sections/FilesProyecto";
import { DocumentalProyecto } from "./gestiones/proyecto/sections/DocumentalProyecto";
import { FilterFormProyectos } from "./gestiones/proyecto/forms/FilterFormProyectos";
import { ProyectoTable } from "./gestiones/proyecto/table/ProyectoTable";
import { ProgressProyecto } from "./gestiones/proyecto/table/ProgressProyecto";

    /* Overview Proyecto */
import {
    HeaderOverview,
    ProgressProyect,
    ProgressActivities,
    ActividadesOverview,
    DetailProyect,
    ActivitiesCenter,
    SupplierStat
} from "./gestiones/proyecto/detail/overview/OverviewDetails";

    /* Milestones Proyecto */
import { MilestoneList } from "./gestiones/proyecto/detail/milestone/MilestoneList";

    /* Files Proyecto */
import { FolderFiles } from "./gestiones/proyecto/detail/file/FolderFiles";

    /* Proveedores */
import { ProveedorList } from "./gestiones/proveedor/sections/ProveedorList";

    /* Programas */
import { ProgramaTable } from "./gestiones/programa/table/ProgramaTable";

    /* Actividades */
import { ActividadesTable } from "./gestiones/actividades/table/ActividadesTable";

/* Planificacion */
    /* Instrumentos */
import { InstrumentosList } from "./planificacion/instrumento/InstrumentosList";


export {
    BtnServicesApps,
    BtnSubmit,
    BtnSection,
    TextSection,
    TitlePage,
    TableContent,
    MenuTable,
    Logo,
    BtnDarkMode,
    BtnSearch,
    InputSeach,
    DataCombobox,
    AlertSection,

    AuthForm,
    ProfileForm,
    UserBtnHeader,
    ChangePwdForm,

    /* DIR_FINANCIERO */
    CardGestiones,

    /* GESTIONES */
    BtnDetailProyecto,
    OverviewProyecto,
    ActivitiesProyecto,
    MilestonesProyecto,
    FilesProyecto,
    DocumentalProyecto,
    FilterFormProyectos,
    ProyectoTable,
    ProgressProyecto,

    /* DETALLE PROYECTO */
    HeaderOverview,
    ProgressProyect,
    ProgressActivities,
    ActividadesOverview,
    DetailProyect,
    ActivitiesCenter,
    SupplierStat,

    /* MILESTONE PROYECTO */
    MilestoneList,

    /* FILES PROYECTO */
    FolderFiles,

    ProveedorList,


    /* PROGRAMAS */
    ProgramaTable,

    /* ACTIVIDADES */
    ActividadesTable,

    /*PLANIFICACION */
    InstrumentosList,
};
