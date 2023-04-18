import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

interface IconProps {
  id: string;
  label: string;
  width?: number;
  size?: "small" | "large";
  placeholder?: string;
  icon: "search" | "at-sign" | "chevron-down";
}

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}: IconProps) => {
  const styles = STYLES[size || "small"];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{ "--size": `${styles.iconSize}px` } as CSSProperties}
      >
        <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
      </IconWrapper>

      <TextInput
        {...delegated}
        style={
          {
            "--width": `${width}px`,
            "--borderThickness": `${styles.borderThickness}px`,
            "--height": `${styles.height}px`,
            "--fontSize": `${styles.fontSize}px`,
          } as CSSProperties
        }
      />
    </Wrapper>
  );
};

const TextInput = styled.input`
  width: var(--width);
  border: none;
  border-bottom: var(--borderThickness) solid black;
  height: ${24 / 16}rem;
  padding-left: var(--height);
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--fontSize);
  outline-offset: 2px;
  color: inherit;
  height: var(--height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
