import * as React from "react";
import { connect, ConnectedProps } from "react-redux";

interface RootState {
  isOn: boolean;
}

const mapState = (state: RootState) => ({
  isOn: state.isOn,
});

const mapDispatch = {
  toggleOn: () => ({ type: "TOGGLE_IS_ON" }),
};

const connector = connect(mapState, mapDispatch);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  backgroundColor: string;
}

const MyComponent = ({ isOn, backgroundColor, toggleOn }: Props) => (
  <div style={{ backgroundColor: backgroundColor }}>
    <button onClick={toggleOn}>Toggle is {isOn ? "ON" : "OFF"}</button>
  </div>
);

const MyComp = connector(MyComponent);
