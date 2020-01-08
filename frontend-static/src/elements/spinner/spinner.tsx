import * as React from "react";
import loading from "../../../public/assets/images/logo.svg";
import { iSpinnerProps } from "./spec";

/* 
    credits to: https://auth0.com/docs/quickstart/spa/react/01-login#add-a-callback-component
*/

class Spinner extends React.Component<iSpinnerProps> {
  public render() {
    return (
      <>
        {this.props.loadingState && (
          <img className="spinner" src={loading} alt="loading" />
        )}
      </>
    );
  }
}
export default Spinner;
