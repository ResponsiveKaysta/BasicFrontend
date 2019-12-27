import * as React from "react";
import iTextElementProps from "./spec/iTextElementProps";

class SpanElement extends React.Component<iTextElementProps> {
  public render() {
    const cssClass = this.props.cssClass ? this.props.cssClass : "paragraph";

    return <span className={cssClass}>{this.props.children}</span>;
  }
}

export default SpanElement;
