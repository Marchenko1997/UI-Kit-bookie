
import { LatesPromotionCard } from "./LatesPromotionCard";

export default {
  title: "UI/LatesPromotionCard",
  component: LatesPromotionCard,
};

export const Default = () => (
  <LatesPromotionCard
    endsIn="Ends at
         1:35 PM 10/14/2026"
    betType="Brand’s Daily Races – $150,000 Up for Grabs Every Day!"
  />
);
