import React from 'react';
import '../styles/Step.css';

interface MyProps {
  num: number;
  title: string;
}

export default function Step(props: MyProps) {
  return (
    <div className="main-step">
      <h4 className="step-num">{props.num}</h4>
      <div className="step-text">
        <h6 className="step-text-title">Step {props.num}</h6>
        <h5 className="step-text-subtitle">{props.title}</h5>
      </div>
    </div>
  );
}
