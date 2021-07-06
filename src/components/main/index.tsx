import React, { useState, useCallback } from "react";

import { Indicators } from "@components/indicators";

import styles from "./main.module.scss";

const data = [
  {
    title: "Design",
  },
  {
    title: "Build",
  },
  {
    title: "Launch",
  },
];

export const Main = (): React.ReactElement => {
  const [activeStep, setActiveStep] = useState(0);

  /**
   * Handler on click on steps for change active step
   */
  const onClick = useCallback(
    ({
      currentTarget: { dataset },
    }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const possbileStep = activeStep + 1;
      const indexAsNumber = Number(dataset.index);

      if (dataset.index && indexAsNumber <= possbileStep) {
        setActiveStep(indexAsNumber);
      }
    },
    []
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.default}>
        <Indicators onClick={onClick} steps={data} activeStep={activeStep} />
      </div>
    </div>
  );
};
