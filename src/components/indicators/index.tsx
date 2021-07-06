import React from "react";
import classNames from "classnames";

import styles from "./indicators.module.scss";

interface IProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  steps: { title: string }[];
  activeStep: number;
}

const MIN_STEPS = 2;
const MAX_STEPS = 5;

/**
 * Component for render indicators
 *
 * @param {IProps} - props component
 * @returns {React.ReactElement} - element
 */
export const Indicators = ({
  onClick,
  steps,
  activeStep,
}: IProps): React.ReactElement => {
  if (steps.length < MIN_STEPS) {
    throw Error(`there should be at least ${MIN_STEPS} steps`);
  }

  if (steps.length > MAX_STEPS) {
    throw Error(`Maximum number of steps ${MAX_STEPS}`);
  }

  return (
    <div className={styles.wrap}>
      {steps.map((item, index) => {
        return (
          <button
            aria-pressed={index <= activeStep}
            key={item.title}
            className={classNames(styles.wrapItem, {
              [styles.completed]: index <= activeStep,
              [styles.nextCompleted]: index < activeStep,
            })}
            onClick={onClick}
            data-index={index}
          >
            <div className={styles.item}>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.circle} />
            </div>
          </button>
        );
      })}
    </div>
  );
};
