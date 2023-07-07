import React from 'react';
import '../styles/Step.css';

interface MyProps {
  num: number;
  title: string;
}

export default function Step(props: MyProps) {
  return (
    <div>
      <h1>{props.num}</h1>
      <h1>{props.title}</h1>
    </div>
  );
}
