import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import MyComponent from "./exampleComponent";

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
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(MyComponent);
