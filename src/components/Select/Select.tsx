interface SelectProps {
  label: string;
  value: string;
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const Select = ({ label, value, onChange, children }: SelectProps) => {
  return (
    <select value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
