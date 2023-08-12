import Background from '../components/Background/Background';
import Clock from '../components/Clock/Clock';
import Shorcut from '../components/Shortcut/Shortcut';

const Home = () => {
  return (
    <Background>
      <Clock></Clock>
      <Shorcut></Shorcut>
    </Background>
  );
};

export default Home;
