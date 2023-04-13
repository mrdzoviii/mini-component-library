import { Children, ReactElement } from "react";

export function getDisplayedValue(value: string, children: React.ReactNode) {
  const childArray = Children.toArray(children) as ReactElement[];
  const selectedChild = childArray.find((child) => child.props.value === value);
  return selectedChild?.props.children;
}
