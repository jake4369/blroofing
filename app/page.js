import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Reviews from "@components/Reviews/Reviews";
import ImageDivider from "@components/ImageDivider/ImageDivider";
import Services from "@components/Services/Services";

import { primaryReviews, services } from "@constants";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Reviews reviewClassname="reviews__primary" reviewData={primaryReviews} />
      <ImageDivider img="/assets/misc/roofer.png" />
      <Services services={services} />
    </main>
  );
};

export default Home;
