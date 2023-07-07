import './App.css';
import StepsMain from './containers/StepsMain';
import useSteps from './hooks/useSteps';

function App() {
  const { steps } = useSteps();

  return (
    <div className="App">
      <StepsMain steps={steps} />
      <div className="form"></div>
    </div>
  );
}

export default App;
