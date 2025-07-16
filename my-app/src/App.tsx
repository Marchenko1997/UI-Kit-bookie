import "./App.css";
import { ActivateCodeCard } from "./shared/ui/ActivateCodeCard/ActivateCodeCard";
import { BetSlip } from "./shared/ui/BetSlip/BetSlip";
import { CashBack } from "./shared/ui/CashBack/CashBack";
import { DepositHeader } from "./shared/ui/DepositHeader/DepositHeader";
import { ErrorSuccessModal } from "./shared/ui/ErrorSuccessModal/ErrorSuccessModal";
import { FeedbackCard } from "./shared/ui/FeedbackCard/FeedbackCard";
import { Input } from "./shared/ui/Input/Input";
import LanguageSelector from "./shared/ui/LanguageSelector/LanguageSelector";
import { LatesPromotionCard } from "./shared/ui/LatesPromotionCard/LatesPromotionCard";
import { OneХTwoСard } from "./shared/ui/OneХTwoСard/OneХTwoСard";
import { PlaceBetBtn } from "./shared/ui/PlaceBetBtn/PlaceBetBtn";
import { PopularEvents } from "./shared/ui/PopularEvents/PopularEvents";
import PrimaryButton from "./shared/ui/PrimaryButton/PrimaryButton";
import { ProfileSummary } from "./shared/ui/ProfileSummary/ProfileSummary";
import { ProgressBar } from "./shared/ui/ProgressBar/ProgressBar";
import { WinnerCard } from "./shared/ui/WinnerCard/WinnerCard";

function App() {
  return (
    <>
      {/* <PrimaryButton label="Update" />
      <PlaceBetBtn label="Place Bet" /> */}
      {/* <WinnerCard label="Label" amount={100} players="Lys, Eva" />  */}
      {/* <OneХTwoСard label="Label" amount={100} /> */}
      {/* <LanguageSelector/> */}
      {/* <DepositHeader/> */}
      {/* <ProgressBar/> */}
      {/* <CashBack amount={100} percent={100}/> */}
      {/* <ProfileSummary email="paskudaw@gmail.com" amount={100} /> */}
      {/* <LatesPromotionCard
        endsIn="Ends at
         1:35 PM 10/14/2026"
        betType="Brand’s Daily Races – $150,000 Up for Grabs Every Day!"
      /> */}
      {/* <FeedbackCard
        userName="User Name"
        text="I recently played one of the games on Rollaura, and I must say I was impressed by the overall experience. The website's user interface is intuitive and easy to navigate, and the games offered are entertaining and diverse. The ability to earn crypto while playing adds an extra layer of excitement to the gameplay." 
        activeStars={5}
      /> */}
      {/* <PopularEvents /> */}
      {/* <ActivateCodeCard/> */}
      {/* <BetSlip/> */}
      {/* <ErrorSuccessModal/> */}
      {/* <Input title="Title" placeholder="Placeholder" /> */}
      <PrimaryButton label="Update" />
    </>
  );
}

export default App;
