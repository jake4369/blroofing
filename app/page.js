import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Reviews from "@components/Reviews/Reviews";

import { reviewSetOne } from "@constants";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Reviews reviewClassname="reviews__primary" reviewData={reviewSetOne} />
    </main>
  );
};

export default Home;
