import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar.component";
import {
  Profile,
  Aboutme,
  // Experience,
  Skills,
  Footer,
  Work,
  // BentoBox,
} from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: " Developer Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className=" relative z-0  h-full">
      <div className="relative z-0">
        <div className=" sm:pt-36 pt-16 ">
          <Profile />
        </div>
        <Navbar />
        <Aboutme />
        {/* <BentoBox /> */}
        {/* <Experience /> */}
        <Skills />
        <Work />
        <Footer />
      </div>
    </main>
  );
}
