import React, { type ReactNode } from "react";
import { CryptoIcons, VisaIcon, MasterCard, PayPal } from "../../public/assets/svg/Icons";

export interface WithdrawMethodGroup {
  title: string;
  items: {
    image: ReactNode;
  }[];
}

export const withdrawGroups: WithdrawMethodGroup[] = [
  {
    title: "Crypto",
    items: [{ image: <CryptoIcons /> }],
  },
  {
    title: "Bank Card",
    items: [{ image: <VisaIcon /> }, { image: <MasterCard /> }],
  },
  {
    title: "Pay Pal",
    items: [{ image: <PayPal /> }],
  },
];
