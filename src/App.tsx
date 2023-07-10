import './App.css';
import StepsMain from './containers/StepsMain';
import useSteps from './hooks/useSteps';
import FormLayout from './containers/FormLayout';

function App() {
  const { steps } = useSteps();

  return (
    <div className="App">
      <StepsMain steps={steps} />
      <FormLayout>
        <h1>Personal Info</h1>
      </FormLayout>
    </div>
  );
}

export default App;
