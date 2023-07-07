import React from 'react';

export default function useSteps() {
  type Step = {
    num: number;
    title: string;
  };

  const steps: Step[] = [
    {
      num: 1,
      title: 'Your info',
    },
    {
      num: 2,
      title: 'Select plan',
    },
    {
      num: 3,
      title: 'Add-ons',
    },
    {
      num: 4,
      title: 'Summary',
    },
  ];

  return {
    steps,
  };
}
