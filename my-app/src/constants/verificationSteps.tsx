import { DoneIcon } from "../assets/svg/Icons";


export const verificationSteps = [
  { id: 1, label: "Start verification", icon: null, active: true },
  { id: 2, label: "Data input", icon: null, active: true },
  { id: 3, label: "Checking", icon: null, active: false },
  {
    id: 4,
    label: "Verification complete",
    icon: () => (<DoneIcon />),
    active: false,
  },
];