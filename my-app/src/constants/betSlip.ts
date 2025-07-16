import { PatchIcon } from "../assets/svg/Icons";
import { MultiPatchIcon } from "../assets/svg/Icons";
import { SystemPatchIcon } from "../assets/svg/Icons";

export interface BetSlipItem {
  id: "single" | "multi" | "system";
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const betSlip: BetSlipItem[] = [
  {
    id: "single",
    label: "Single",
    icon: PatchIcon,
  },
  {
    id: "multi",
    label: "Multi",
    icon: MultiPatchIcon,
  },
  {
    id: "system",
    label: "System",
    icon: SystemPatchIcon,
  },
];
