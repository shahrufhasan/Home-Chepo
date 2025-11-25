import Banner from "@/components/banner/Banner";
import FeatureProducts from "@/components/featureProducts/FeatureProducts";
import OurServices from "@/components/ourServices/OurServices";
import Team from "@/components/team/Team";
import Testimonials from "@/components/testimonials/Testimonials";
import React from "react";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeatureProducts></FeatureProducts>
      <OurServices></OurServices>
      <Team></Team>
      <Testimonials></Testimonials>
    </div>
  );
}
