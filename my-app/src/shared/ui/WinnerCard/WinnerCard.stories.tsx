
import { WinnerCard } from "./WinnerCard";

export default {
  title: "Entities/WinnerCard",
  component: WinnerCard,
};

export const Default = () => (
  <WinnerCard label="Draw" amount={100} players="Argentina vs Brazil" />
);
