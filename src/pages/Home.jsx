import Background from '../components/Background/Background';
import CentralContainer from '../components/CentralContainer/CentralContainer';
import Clock from '../components/Clock/Clock';
import PanelMenuRight from '../layouts/PanelMenuRight/PanelMenuRight';
import PanelShortcut from '../layouts/PanelShortcut/PanelShortcut';

const Home = () => {
  return (
    <Background>
      <CentralContainer>
        <Clock></Clock>
      </CentralContainer>
      <PanelShortcut></PanelShortcut>
      <PanelMenuRight></PanelMenuRight>
    </Background>
  );
};

export default Home;
