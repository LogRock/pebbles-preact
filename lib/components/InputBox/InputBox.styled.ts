import styled from "styled-components";
import Icon from "@mdi/react";
import { InputBoxProps } from "./InputBox";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.inputBox.label.color};
  font-family: ${({ theme }) => theme.inputBox.fontFamily};
  font-weight: ${({ theme }) => theme.inputBox.fontWeight};
  font-style: ${({ theme }) => theme.inputBox.label.fontStyle};
  font-size: ${({ theme }) => theme.inputBox.label.fontSize};
  line-height: ${({ theme }) => theme.inputBox.label.lineHeight};
  font-feature-settings: ${({ theme }) => theme.inputBox.fontFeatureSettings};
`;

export const HelperDiv = styled.div`
  display: flex;
`;

export const Helper = styled(Label)<Pick<InputBoxProps, "status">>`
  color: ${({ theme, status }) => theme.inputBox[status].helperColor};
  font-style: ${({ theme }) => theme.inputBox.helper.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.helper.fontWeight};
  font-size: ${({ theme }) => theme.inputBox.helper.fontSize};
  line-height: ${({ theme }) => theme.inputBox.helper.lineHeight};
  margin: ${({ theme }) => theme.inputBox.helper.margin};
`;

export const HelperIcon = styled(Icon)<Pick<InputBoxProps, "status">>`
  color: ${({ theme, status }) => theme.inputBox[status].helperColor};
`;

export const HintDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.inputBox.hint.background};
  top: ${({ theme }) => theme.inputBox.hint.top};
  right: ${({ theme }) => theme.inputBox.hint.right};
  padding: ${({ theme }) => theme.inputBox.padding};
  margin: ${({ theme }) => theme.inputBox.margin};
`;

export const Hint = styled(Label)<Pick<InputBoxProps, "status">>`
  color: ${({ theme, status }) => theme.inputBox[status].hintColor};
  margin: ${({ theme }) => theme.inputBox.hint.margin};
`;

export const HintIcon = styled(Icon)<Pick<InputBoxProps, "status">>`
  color: ${({ theme, status }) => theme.inputBox[status].hintColor};
  margin: 4px 4px;
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<Pick<InputBoxProps, "status">>`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  align-items: center;
  align-self: stretch;
  background: ${({ theme }) => theme.inputBox.background};
  height: ${({ theme }) => theme.inputBox.height};
  width: ${({ theme }) => theme.inputBox.width};

  color: ${({ theme, status }) => theme.inputBox[status].color};
  border: ${({ theme, status }) => theme.inputBox[status].border};
  box-shadow: ${({ theme, status }) => theme.inputBox[status].boxShadow};

  border-radius: ${({ theme }) => theme.inputBox.borderRadius};
  box-sizing: ${({ theme }) => theme.inputBox.boxSizing};
  padding: ${({ theme }) => theme.inputBox.padding};
  margin: ${({ theme }) => theme.inputBox.margin};

  &:focus {
    background: ${({ theme }) => theme.inputBox.background};
    border: ${({ theme, status }) => theme.inputBox[status].focused.border};
    border-radius: ${({ theme, status }) =>
      theme.inputBox[status].focused.borderRadius};
    box-sizing: ${({ theme, status }) =>
      theme.inputBox[status].focused.boxSizing};
    box-shadow: ${({ theme, status }) =>
      theme.inputBox[status].focused.boxShadow};
    outline: none;
  }
  &:disabled {
    align-items: center;
    background: ${({ theme }) => theme.inputBox.background};

    padding: ${({ theme }) => theme.inputBox.padding};
    border: ${({ theme }) => theme.inputBox.disabled.border};
    box-sizing: ${({ theme }) => theme.inputBox.disabled.boxSizing};
    box-shadow: ${({ theme }) => theme.inputBox.disabled.boxShadow};
    border-radius: ${({ theme }) => theme.inputBox.disabled.borderRadius};
  }
  &:placeholder {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.inputBox.placeholder.color};
  }
`;
