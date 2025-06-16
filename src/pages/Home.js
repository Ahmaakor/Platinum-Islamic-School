// import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MoreAbout from '../components/MoreAbout/MoreAbout';
import StatsOverview from '../components/StatsOverview/StatsOverview';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import BlogsNews from '../components/BlogsNews/BlogsNews';
import Events from '../components/Events/Events';
import Testimonials from '../components/Testimonials/Testimonials';
// import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <MoreAbout />
      <StatsOverview />
      <WhyChooseUs />
      <BlogsNews />
      <Events />
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
}

export default Home;