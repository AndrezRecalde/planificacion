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
    MenuTableAddPermissions,
    MenuTableAdd,
    MenuActionsVE,
    MenuActionsED,
    MenuTableView
} from "./elements/tables/MenuTable";
import { Logo } from "./elements/application/Logo";
import { BtnDarkMode } from "./elements/buttons/BtnDarkMode";
import { BtnSearch, InputSeach } from "./elements/buttons/BtnSearch";
import { BtnActiveStatus } from "./elements/buttons/BtnActiveStatus";
import { DataCombobox } from "./elements/combobox/DataCombobox";
import { BtnCombobox } from "./elements/combobox/BtnCombobox";
import { AlertSection } from "./elements/alert/AlertSection";
import { StatusModal } from "./elements/modal/StatusModal";
import { FieldFilterForm } from "./elements/fields/FieldFilterForm";
import { DateYearForm } from "./elements/fields/DateYearForm";

/* Auth */
import { AuthForm } from "./auth/AuthForm";

/* Usuario */
import { ProfileForm } from "./user/ProfileForm";
import { UserBtnHeader } from "./user/UserBtnHeader";
import { ChangePwdForm } from "./user/ChangePwdForm";

/* Usuarios: Permissions */
import { PermissionsFilterForm } from "./user/permission/form/PermissionsFilterForm";
import { PermissionsTable } from "./user/permission/table/PermissionsTable";
import { AddPermissionModal } from "./user/permission/modal/AddPermissionModal";
import { AddPermisionForm } from "./user/permission/form/AddPermisionForm";

/* Departamentos */
import { DepartamentoSelect } from "./administracion/departamentos/form/DepartamentoSelect";

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
import { InstrumentosList } from "./planificacion/instrumento/table/InstrumentosList";
import { InstrumentoModal } from "./planificacion/instrumento/modal/InstrumentoModal";
import { InstrumentoForm } from "./planificacion/instrumento/form/InstrumentoForm";

    /* Objetivos */
import { ObjetivosEstrategicosTable } from "./planificacion/objetivo/table/ObjetivosEstrategicosTable";
import { ObjetivosEstrategicosModal } from "./planificacion/objetivo/modal/ObjetivosEstrategicosModal";
import { ObjetivosEstrategicosForm } from "./planificacion/objetivo/form/ObjetivosEstrategicosForm";
import { ObjetivosFilterForm } from "./planificacion/objetivo/form/ObjetivosFilterForm";



    /*Programa */
import { FilterFormProgramaPlan } from "./planificacion/programa/filter/FilterFormProgramaPlan";
import { ProgramaPlanTable } from "./planificacion/programa/table/ProgramaPlanTable";
import { ProgramaPlanModal } from "./planificacion/programa/modal/ProgramaPlanModal";
import { ProgramaForm } from "./planificacion/programa/form/ProgramaForm";
import { ProyectoFromPrograma } from "./planificacion/programa/table/ProyectoFromPrograma";
import { ProgressPrograma } from "./planificacion/programa/table/ProgressPrograma";
import { CodigoProgramaText } from "./planificacion/programa/form/CodigoProgramaText";

/* Consolidado */
import { FilterConsolidado } from "./planificacion/consolidado/form/FilterConsolidado";
import { OverviewConsolidado } from "./planificacion/consolidado/form/OverviewConsolidado";
import { ConsolidadosTable } from "./planificacion/consolidado/table/ConsolidadosTable";
import { ConsolidadoProyectos } from "./planificacion/consolidado/table/ConsolidadoProyectos";

/* PLANIFICACION: ADMINISTRACION */
    /* Lineas Estrategicas */
import { LineaspdotTable } from "./planificacion/administracion/lineasEstrategicas/table/LineaspdotTable";
import { LineasEstrategicasTable } from "./planificacion/administracion/lineasEstrategicas/table/LineasEstrategicasTable";

import { LineapdotModal } from "./planificacion/administracion/lineasEstrategicas/modal/LineapdotModal";
import { LineapdotForm } from "./planificacion/administracion/lineasEstrategicas/form/LineapdotForm";

import { LineaEstrategiaModal } from "./planificacion/administracion/lineasEstrategicas/modal/LineaEstrategiaModal";
import { LineaEstrategiaForm } from "./planificacion/administracion/lineasEstrategicas/form/LineaEstrategiaForm";

    /* Competencias del PDOT */
import { CompetenciapdotTable } from "./planificacion/administracion/competenciaspdot/table/CompetenciapdotTable";
import { CompetenciaDetail } from "./planificacion/administracion/competenciaspdot/table/CompetenciaDetail";
import { CompetenciapdotModal } from "./planificacion/administracion/competenciaspdot/modal/CompetenciapdotModal";
import { CompetenciapdotForm } from "./planificacion/administracion/competenciaspdot/form/CompetenciapdotForm";
import { CompetenciaspdotSelect } from "./planificacion/administracion/competenciaspdot/form/CompetenciaspdotSelect";


    /* Componentes del PDOT */
import { ComponentepdotTable } from "./planificacion/administracion/componentespdot/table/ComponentepdotTable";
import { ComponentepdotModal } from "./planificacion/administracion/componentespdot/modal/ComponentepdotModal";
import { ComponentepdotForm } from "./planificacion/administracion/componentespdot/form/ComponentepdotForm";

    /* Categorias del PDOT */
import { CategoriapdotTable } from "./planificacion/administracion/categoriaspdot/table/CategoriapdotTable";
import { CategoriapdotModal } from "./planificacion/administracion/categoriaspdot/modal/CategoriapdotModal";
import { CategoriapdotForm } from "./planificacion/administracion/categoriaspdot/form/CategoriapdotForm";

    /* Estrategias de articulacion */
import { EarticulacionTable } from "./planificacion/administracion/earticulacion/table/EarticulacionTable";
import { EarticulacionModal } from "./planificacion/administracion/earticulacion/modal/EarticulacionModal";
import { EarticulacionForm } from "./planificacion/administracion/earticulacion/form/EarticulacionForm";


    /* Metas del PDOT */
import { MetaspdotTable } from "./planificacion/administracion/metaspdot/table/MetaspdotTable";
import { MetapdotModal } from "./planificacion/administracion/metaspdot/modal/MetapdotModal";
import { MetapdotForm } from "./planificacion/administracion/metaspdot/form/MetapdotForm";


    /* Tipos de Planificacion */
import { PlanificaciontiposTable } from "./planificacion/administracion/planificaciontipos/table/PlanificaciontiposTable";
import { PlanificacionTipoModal } from "./planificacion/administracion/planificaciontipos/modal/PlanificacionTipoModal";
import { PlanificacionTipoForm } from "./planificacion/administracion/planificaciontipos/form/PlanificacionTipoForm";
import { PlanificacionTipoSelect } from "./planificacion/administracion/planificaciontipos/form/PlanificacionTipoSelect";


    /* Ejes del Gobierno */
import { EjeTable } from "./planificacion/administracion/ejes/table/EjeTable";
import { EjeModal } from "./planificacion/administracion/ejes/modal/EjeModal";
import { EjeForm } from "./planificacion/administracion/ejes/form/EjeForm";

    /* Gobierno */
import { GobiernoTable } from "./planificacion/administracion/gobierno/table/GobiernoTable";
import { GobiernoModal } from "./planificacion/administracion/gobierno/modal/GobiernoModal";
import { GobiernoForm } from "./planificacion/administracion/gobierno/form/GobiernoForm";
import { GobiernoSelect } from "./planificacion/administracion/gobierno/form/GobiernoSelect";
import { GobiernoWithOPNModal } from "./planificacion/administracion/gobierno/modal/GobiernoWithOPNModal";
import { GobiernoWithOPNForm } from "./planificacion/administracion/gobierno/form/GobiernoWithOPNForm";



    /* Objetivos Plan Nacional de Desarrollo */
import { ObjetivosPlanNacionalTable } from "./planificacion/administracion/opn/table/ObjetivosPlanNacionalTable";
import { ObjetivosPlanNacionalModal } from "./planificacion/administracion/opn/modal/ObjetivosPlanNacionalModal";
import { ObjetivoPlanNacionalForm } from "./planificacion/administracion/opn/form/ObjetivoPlanNacionalForm";
import { ObjetivosPlanNacionalFilterForm } from "./planificacion/administracion/opn/form/ObjetivosPlanNacionalFilterForm";

    /* Objetivos de desarrollo Sostenible */
import { OdssostenibleTable } from "./planificacion/administracion/odssostenible/table/OdssostenibleTable";
import { OdssostenibleModal } from "./planificacion/administracion/odssostenible/modal/OdssostenibleModal";
import { OdssostenibleForm } from "./planificacion/administracion/odssostenible/form/OdssostenibleForm";


export {
    BtnServicesApps,
    BtnSubmit,
    BtnSection,
    TextSection,
    TitlePage,
    TableContent,
    MenuTableEdit,
    MenuTableAddPermissions,
    MenuTableAdd,
    MenuActionsVE,
    MenuActionsED,
    MenuTableView,
    Logo,
    BtnDarkMode,
    BtnSearch,
    InputSeach,
    BtnActiveStatus,
    DataCombobox,
    BtnCombobox,
    AlertSection,
    StatusModal,
    FieldFilterForm,
    DateYearForm,

    /* USUARIOS */
    AuthForm,
    ProfileForm,
    UserBtnHeader,
    ChangePwdForm,

    /* USUARIOS: PERMISSIONS */
    PermissionsFilterForm,
    PermissionsTable,
    AddPermissionModal,
    AddPermisionForm,

    /* DEPARTAMENTOS */
    DepartamentoSelect,

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

    /*PLANIFICACION: INSTRUMENTOS */
    InstrumentosList,
    InstrumentoModal,
    InstrumentoForm,


    /* OBJETIVOS ESTRATEGICOS */
    ObjetivosEstrategicosTable,
    ObjetivosEstrategicosModal,
    ObjetivosEstrategicosForm,
    ObjetivosFilterForm,

    /* PROGRAMAS DE PLANIFICACION */
    FilterFormProgramaPlan,
    ProgramaPlanTable,
    ProgramaPlanModal,
    ProgramaForm,
    ProyectoFromPrograma,
    ProgressPrograma,
    CodigoProgramaText,

    /* CONSOLIDADO */
    FilterConsolidado,
    OverviewConsolidado,
    ConsolidadosTable,
    ConsolidadoProyectos,

    /* PLANIFICACION: ADMINISTRACION */
    LineaspdotTable,
    LineasEstrategicasTable,
    LineapdotModal,
    LineapdotForm,
    LineaEstrategiaModal,
    LineaEstrategiaForm,

    CompetenciapdotTable,
    CompetenciaDetail,
    CompetenciapdotModal,
    CompetenciapdotForm,
    CompetenciaspdotSelect,

    ComponentepdotTable,
    ComponentepdotModal,
    ComponentepdotForm,

    CategoriapdotTable,
    CategoriapdotModal,
    CategoriapdotForm,

    EarticulacionTable,
    EarticulacionModal,
    EarticulacionForm,

    MetaspdotTable,
    MetapdotModal,
    MetapdotForm,

    PlanificaciontiposTable,
    PlanificacionTipoModal,
    PlanificacionTipoForm,
    PlanificacionTipoSelect,

    EjeTable,
    EjeModal,
    EjeForm,

    GobiernoTable,
    GobiernoModal,
    GobiernoForm,
    GobiernoSelect,
    GobiernoWithOPNModal,
    GobiernoWithOPNForm,

    ObjetivosPlanNacionalTable,
    ObjetivosPlanNacionalModal,
    ObjetivoPlanNacionalForm,
    ObjetivosPlanNacionalFilterForm,

    OdssostenibleTable,
    OdssostenibleModal,
    OdssostenibleForm
};
