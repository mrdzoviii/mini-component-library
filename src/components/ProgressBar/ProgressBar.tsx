import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

export interface ProgressBarProps {
  value: number;
  size: "small" | "medium" | "large";
}

const SIZES = {
  small: {
    padding: 0,
    height: "8px",
    radius: "4px",
  },
  medium: {
    padding: 0,
    height: "12px",
    radius: "4px",
  },
  large: {
    padding: "4px",
    height: "16px",
    radius: "8px",
  },
};

const Container = styled.div`
  width: 375px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const ProgressWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div<{ value: number }>`
  width: ${(props) => props.value}%;
  background: ${COLORS.primary};
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

const ProgressBar = ({ value, size = "medium" }: ProgressBarProps) => {
  const progress = value <= 100 && value >= 0 ? value : value > 100 ? 100 : 0;
  const styles = SIZES[size];
  return (
    <Container
      style={
        {
          "--padding": styles.padding,
          borderRadius: styles.radius,
        } as CSSProperties
      }
    >
      <ProgressWrapper>
        <Progress
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={progress}
          value={progress}
          style={{ "--height": styles.height } as CSSProperties}
        >
          <VisuallyHidden>{progress}%</VisuallyHidden>
        </Progress>
      </ProgressWrapper>
    </Container>
  );
};

export default ProgressBar;
