import { ImageSlider } from "../components/Home/ImageSlider/ImageSlider";

interface HomePageProps {
  className?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
    return <div className={className}>
      <ImageSlider />
  </div>;
};