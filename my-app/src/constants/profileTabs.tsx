// src/constants/profileTabs.ts
import {
  UserTab,
  DepositTab,
  WithdrawTab,
  AffiliateTab,
  VerificationTab,
  SettingTab,
  TransactionTab,
} from "../assets/svg/Icons";


export interface ProfileTab {
  label: string;
  icon: React.ReactNode;
}

export const profileTabs: ProfileTab[] = [
  { label: "Profile", icon: <UserTab /> },
  { label: "Deposit", icon: <DepositTab /> },
  { label: "Withdraw", icon: <WithdrawTab /> },
  { label: "Affiliate", icon: <AffiliateTab /> },
  { label: "Verification", icon: <VerificationTab /> },
  { label: "Setting", icon: <SettingTab /> },
  { label: "Transaction history", icon: <TransactionTab /> },
];
