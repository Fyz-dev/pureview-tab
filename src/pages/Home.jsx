import Background from '../components/Background/Background';
import CentralContainer from '../components/CentralContainer/CentralContainer';
import Clock from '../components/Clock/Clock';
import Shorcut from '../components/Shortcut/Shortcut';

const Home = () => {
  return (
    <Background>
      <CentralContainer>
        <Clock></Clock>
        <Shorcut></Shorcut>
      </CentralContainer>
    </Background>
  );
};

export default Home;
