import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Reviews from "@components/Reviews/Reviews";

import { primaryReviews } from "@constants";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Reviews reviewClassname="reviews__primary" reviewData={primaryReviews} />
    </main>
  );
};

export default Home;
