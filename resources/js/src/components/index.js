/* Elementos */
import {
    BtnServicesApps,
    BtnSubmit,
    BtnSection,
} from "./elements/buttons/BtnServices";
import { TextSection } from "./elements/titles/TextSection";
import { TitlePage } from "./elements/titles/TitlePage";
import { TableContent } from "./elements/tables/TableContent";
import {
    MenuTableEdit,
    MenuTableAdd,
    MenuActions,
} from "./elements/tables/MenuTable";
import { Logo } from "./elements/application/Logo";
import { BtnDarkMode } from "./elements/buttons/BtnDarkMode";
import { BtnSearch, InputSeach } from "./elements/buttons/BtnSearch";
import { BtnActiveStatus } from "./elements/buttons/BtnActiveStatus";
import { DataCombobox } from "./elements/combobox/DataCombobox";
import { BtnCombobox } from "./elements/combobox/BtnCombobox";
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
import { FilterFormProyectos } from "./gestiones/proyecto/forms/FilterFormProyectos";
import { ProyectoTable } from "./gestiones/proyecto/table/ProyectoTable";
import { ProgressProyecto } from "./gestiones/proyecto/table/ProgressProyecto";
import { ProyectoModal } from "./gestiones/proyecto/modal/ProyectoModal";
import { ProyectoForm } from "./gestiones/proyecto/forms/ProyectoForm";
import { ProyectoDrawer } from "./gestiones/proyecto/drawer/ProyectoDrawer";
import { ProyectoDetail } from "./gestiones/proyecto/forms/ProyectoDetail";
import { ProyectoStepperForm } from "./gestiones/proyecto/stepper/ProyectoStepperForm";
import { ProyectoInfoForm } from "./gestiones/proyecto/forms/ProyectoInfoForm";
import { ProyectoTiemposForm } from "./gestiones/proyecto/forms/ProyectoTiemposForm";
import { ProyectoMetasForm } from "./gestiones/proyecto/forms/ProyectoMetasForm";
import { ProyectoObjetivosForm } from "./gestiones/proyecto/forms/ProyectoObjetivosForm";

/* Overview Proyecto */
import {
    HeaderOverview,
    ProgressProyect,
    ProgressActivities,
    ActividadesOverview,
    DetailProyect,
    ActivitiesCenter,
    SupplierStat,
} from "./gestiones/proyecto/detail/overview/OverviewDetails";

/* Milestones Proyecto */
import { MilestoneList } from "./gestiones/proyecto/detail/milestone/MilestoneList";

/* Files Proyecto */
import { FolderFiles } from "./gestiones/proyecto/detail/file/FolderFiles";

/* Proveedores */
import { ProveedorList } from "./gestiones/proveedor/sections/ProveedorList";
import { ProveedorModal } from "./gestiones/proveedor/modal/ProveedorModal";
import { ProveedorForm } from "./gestiones/proveedor/forms/ProveedorForm";

/* Programas */
import { ProgramaTable } from "./gestiones/programa/table/ProgramaTable";
import { ProgramaDetail } from "./gestiones/programa/table/ProgramaDetail";

/* Actividades */
import { BtnActividadSection } from "./gestiones/actividades/btn/BtnActividadSection";
import { ActividadesTable } from "./gestiones/actividades/table/ActividadesTable";

/* Planificacion */
/* Instrumentos */
import { InstrumentosList } from "./planificacion/instrumento/InstrumentosList";
/* Objetivos */
import { ObjetivosTable } from "./planificacion/objetivo/table/ObjetivosTable";
/*Programa */
import { FilterFormProgramaPlan } from "./planificacion/programa/filter/FilterFormProgramaPlan";
import { ProgramaPlanTable } from "./planificacion/programa/table/ProgramaPlanTable";
import { ProyectoFromPrograma } from "./planificacion/programa/table/ProyectoFromPrograma";
import { ProgressPrograma } from "./planificacion/programa/table/ProgressPrograma";

/* Consolidado */
import { FilterConsolidado } from "./planificacion/consolidado/form/FilterConsolidado";
import { OverviewConsolidado } from "./planificacion/consolidado/form/OverviewConsolidado";
import { ConsolidadosTable } from "./planificacion/consolidado/table/ConsolidadosTable";
import { ConsolidadoProyectos } from "./planificacion/consolidado/table/ConsolidadoProyectos";

/* PLANIFICACION: ADMINISTRACION */
    /* Lineas Estrategicas */
import { LineaspdotTable } from "./planificacion/administracion/lineasEstrategicas/table/LineaspdotTable";
import { LineasEstrategicasTable } from "./planificacion/administracion/lineasEstrategicas/table/LineasEstrategicasTable";

    /* Competencias del PDOT */
import { CompetenciapdotTable } from "./planificacion/administracion/competenciaspdot/table/CompetenciapdotTable";
import { CompetenciaDetail } from "./planificacion/administracion/competenciaspdot/table/CompetenciaDetail";

    /* Componentes del PDOT */
import { ComponentepdotTable } from "./planificacion/administracion/componentespdot/table/ComponentepdotTable";

    /* Categorias del PDOT */
import { CategoriapdotTable } from "./planificacion/administracion/categoriaspdot/table/CategoriapdotTable";

export {
    BtnServicesApps,
    BtnSubmit,
    BtnSection,
    TextSection,
    TitlePage,
    TableContent,
    MenuTableEdit,
    MenuTableAdd,
    MenuActions,
    Logo,
    BtnDarkMode,
    BtnSearch,
    InputSeach,
    BtnActiveStatus,
    DataCombobox,
    BtnCombobox,
    AlertSection,
    AuthForm,
    ProfileForm,
    UserBtnHeader,
    ChangePwdForm,

    /* DIR_FINANCIERO */
    CardGestiones,

    /* GESTIONES: PROYECTOS */
    FilterFormProyectos,
    ProyectoTable,
    ProgressProyecto,
    ProyectoModal,
    ProyectoForm,
    ProyectoDrawer,
    ProyectoDetail,
    ProyectoStepperForm,
    ProyectoInfoForm,
    ProyectoTiemposForm,
    ProyectoMetasForm,
    ProyectoObjetivosForm,

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
    ProveedorModal,
    ProveedorForm,

    /* PROGRAMAS */
    ProgramaTable,
    ProgramaDetail,

    /* ACTIVIDADES */
    BtnActividadSection,
    ActividadesTable,

    /*PLANIFICACION */
    InstrumentosList,
    ObjetivosTable,
    FilterFormProgramaPlan,
    ProgramaPlanTable,
    ProyectoFromPrograma,
    ProgressPrograma,

    /* CONSOLIDADO */
    FilterConsolidado,
    OverviewConsolidado,
    ConsolidadosTable,
    ConsolidadoProyectos,

    /* PLANIFICACION: ADMINISTRACION */
    LineaspdotTable,
    LineasEstrategicasTable,

    CompetenciapdotTable,
    CompetenciaDetail,

    ComponentepdotTable,

    CategoriapdotTable
};
