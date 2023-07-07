import React from 'react';

export default function useSteps() {
  type Step = {
    num: number;
    title: string;
    selected: boolean;
  };

  const steps: Step[] = [
    {
      num: 1,
      title: 'Your info',
      selected: true,
    },
    {
      num: 2,
      title: 'Select plan',
      selected: false,
    },
    {
      num: 3,
      title: 'Add-ons',
      selected: false,
    },
    {
      num: 4,
      title: 'Summary',
      selected: false,
    },
  ];

  return {
    steps,
  };
}
