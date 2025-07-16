
import { FeedbackCard } from "./FeedbackCard";

export default {
  title: "UI/FeedbackCard",
  component: FeedbackCard,
};

export const Default = () => (
  <FeedbackCard
    userName="User Name"
    text="I recently played one of the games on Rollaura, and I must say I was impressed by the overall experience. The website's user interface is intuitive and easy to navigate, and the games offered are entertaining and diverse. The ability to earn crypto while playing adds an extra layer of excitement to the gameplay."
    activeStars={4}
  />
);
