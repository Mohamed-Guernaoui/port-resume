import {
  Profile,
  Aboutme,
  // Experience,
  Skills,
  Footer,
  Work,
  // BentoBox,
} from "~/components";


export default function Index() {
  return (
    <main className=" relative z-0  h-full">
      <div className="relative z-0">
        <div className=" sm:pt-36 pt-16 ">
          <Profile />
        </div>
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
