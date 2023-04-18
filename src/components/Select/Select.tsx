import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";
import { getDisplayedValue } from "./Select.helpers";

interface SelectProps {
  label: string;
  value: string;
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  appearance: none;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};
  line-height: 1.2;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }: SelectProps) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ "--size": "24px" } as CSSProperties}>
          <Icon size={24} id="chevron-down" strokeWidth={2} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
