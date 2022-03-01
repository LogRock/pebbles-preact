import { VNode } from "preact";

export type ButtonProps = {
  variant: "primary" | "destructive";
  buttonStyle: "primary" | "secondary" | "tertiary" | "outlined";
  buttonSize: "sXmall" | "small" | "medium" | "large";
  iconOnly?: boolean;
  startIcon: VNode;
  endIcon: VNode;
};
