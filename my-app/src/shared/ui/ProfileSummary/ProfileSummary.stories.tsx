
import { ProfileSummary } from "./ProfileSummary";

export default {
  title: "Entities/ProfileSummary",
  component: ProfileSummary,
};

export const Default = () => (
  <ProfileSummary email="paskudaw@gmail.com" amount={120} />
);
