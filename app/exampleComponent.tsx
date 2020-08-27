import * as React from "react";
import { PropsFromRedux } from "./exampleRedux";

interface Props extends PropsFromRedux {
  backgroundColor: string;
}

const MyComponent: React.FunctionComponent<Props> = ({
  isOn,
  backgroundColor,
  toggleOn,
}) => (
  <div style={{ backgroundColor: backgroundColor }}>
    <button onClick={toggleOn}>Toggle is {isOn ? "ON" : "OFF"}</button>
  </div>
);

export default MyComponent;
