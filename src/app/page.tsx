import React from "react";
import Hero from "./componets/home/Hero";
import TopNavbar from "./componets/layout/TopNavbar";
import Usersupport from "./componets/home/Usersupport"
import Footer from "./componets/layout/Footer";
import FeaturedSubjects from "./componets/home/FeatureSubjects";


export default function Home() {
  return (
<>
<main>
  <div>
  <TopNavbar/>
  <Hero />
  <FeaturedSubjects />
  <Usersupport />
  <Footer/>
</div>
</main>

</>
  );
}
