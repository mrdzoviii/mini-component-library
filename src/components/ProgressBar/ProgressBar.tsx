/* eslint-disable no-unused-vars */

interface ProgressBarProps {
  value: number;
  size: number;
}

const ProgressBar = ({ value, size }: ProgressBarProps) => {
  return <strong>{value}</strong>;
};

export default ProgressBar;
