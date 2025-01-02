import LogoTickerComponent from "~/components/logoTicker.component";
import ServicesComponent from "../components/services.components";
import HeroComponent from "~/components/hero.component";
import ProcessLineComponent from "~/components/processLine.component";
import { Footer } from "~/components";

const HomePage = () => {
  return (
    <main className=" relative z-0  h-full">
      <HeroComponent />
      <LogoTickerComponent />
      <ServicesComponent />
      <ProcessLineComponent />
      <Footer />
    </main>
  );
};
export default HomePage;
