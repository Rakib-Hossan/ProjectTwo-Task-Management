import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./Task/TaskBoard";

export default function App() {
  return (
    <fragment className="flex flex-col justify-center items-center">
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </fragment>
  );
}
