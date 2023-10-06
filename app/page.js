import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Reviews from "@components/Reviews/Reviews";
import Services from "@components/Services/Services";

import { primaryReviews, services } from "@constants";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Reviews reviewClassname="reviews__primary" reviewData={primaryReviews} />
      <Services services={services} />
    </main>
  );
};

export default Home;
