import { card } from "./cardContext";
import { category } from "./categoryContext";
import { foundation } from "./foundationContext";
import { job } from "./jobContext";
import { overview } from "./overviewContext";
import { project } from "./projectContext";
import { sector } from "./sectorContext";
import { service } from "./serviceContext";
import { supportService } from "./supportServiceContext";
import { TooltipProps } from "./tooltipContext";


export type Mode = "create" | "edit" | "delete";
export type Form = card | foundation | project | sector |  supportService | job | category | overview | service

export interface ModalProps {
    mode: Mode;
    onClose: () => void;
    onSave: (form: Form) => Promise<void> | void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    showTooltip: (params: TooltipProps) => void;
    tooltip: TooltipProps | null;
}