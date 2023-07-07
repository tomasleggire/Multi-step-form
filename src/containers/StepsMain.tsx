import React from 'react';
import '../styles/StepsMain.css';
import Step from '../components/Step';

type Step = {
  num: number;
  title: string;
};

interface MyProps {
  steps: Step[];
}

export default function StepsMain(props: MyProps) {
  return (
    <div className="steps-main-div">
      {props.steps.map((step) => {
        return <Step num={step.num} title={step.title} />;
      })}
    </div>
  );
}
