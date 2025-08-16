import './styles/App.css';
import PricingBlock from './components/PricingBlock';
import IntroductionBlock from './components/IntroductionBlock';
import InstallationGuideBlock from './components/InstallationGuideBlock';
import UsageGuideBlock from './components/UsageGuideBlock';

function App() {
  return (
    <div className="App">
      {/* <PricingBlock /> */}
      <IntroductionBlock />
        {/* <InstallationGuideBlock />
        <UsageGuideBlock /> */}
    </div>
  );
}

export default App;