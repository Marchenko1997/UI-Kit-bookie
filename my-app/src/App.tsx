import "./App.css";
import { CashBack } from "./shared/ui/CashBack/CashBack";
import { DepositHeader } from "./shared/ui/DepositHeader/DepositHeader";
import { Input } from "./shared/ui/Input/Input";
import LanguageSelector from "./shared/ui/LanguageSelector/LanguageSelector";
import { LatesPromotionCard } from "./shared/ui/LatesPromotionCard/LatesPromotionCard";
import { OneХTwoСard } from "./shared/ui/OneХTwoСard/OneХTwoСard";
import { PlaceBetBtn } from "./shared/ui/PlaceBetBtn/PlaceBetBtn";
import PrimaryButton from "./shared/ui/PrimaryButton/PrimaryButton";
import { ProfileSummary } from "./shared/ui/ProfileSummary/ProfileSummary";
import { ProgressBar } from "./shared/ui/ProgressBar/ProgressBar";
import { WinnerCard } from "./shared/ui/WinnerCard/WinnerCard";

function App() {
  return (
    <>
      {/* <PrimaryButton label="Update" />
      <Input title="Title" placeholder="Placeholder" />
      <PlaceBetBtn label="Place Bet" /> */}
      {/* <WinnerCard label="Label" amount={100} players="Players" />  */}
      {/* <OneХTwoСard label="Label" amount={100} /> */}
      {/* <LanguageSelector/> */}
      {/* <DepositHeader/> */}
      {/* <ProgressBar/> */}
      {/* <CashBack amount={100} percent={100}/> */}
      {/* <ProfileSummary email="paskudaw@gmail.com" amount={100} /> */}
      <LatesPromotionCard
        endsIn="Ends at
1:35 PM 10/14/2026"
        betType="Brand’s Daily Races – $150,000 Up for Grabs Every Day!"
      />
    </>
  );
}

export default App;
