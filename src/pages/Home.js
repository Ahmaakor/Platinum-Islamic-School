import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MoreAbout from '../components/MoreAbout/MoreAbout';
import StatsOverview from '../components/StatsOverview/StatsOverview';

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MoreAbout />
      <StatsOverview />
    </div>
  );
}

export default Home;
