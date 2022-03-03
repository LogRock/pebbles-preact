/** @jsx h */
import { h, FunctionalComponent } from "preact";
import styled from "styled-components";
import Theme from "../../types/theme";
import Icon from "@mdi/react";
import { mdiAlert } from "@mdi/js";

type InputBoxProps = {
  description: string;
  hint: {
    content: string;
    icon: null;
  };
  status: "info" | "error";
  helper: string;
  placeholder: string;
  disabled: boolean;
  onChange: () => {};
  theme: Theme;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputDiv = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
`;

const HelperDiv = styled.div`
  display: flex;
`;
const HintDiv = styled.div`
  position: absolute;
  top: 1px;
  right: 2px;
  padding: ${({ theme }) => theme.inputBox.padding};
  margin: ${({ theme }) => theme.inputBox.margin};
  display: flex;
  flex-direction: row;
  background: white;
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.inputBox.fontFamily};
  font-weight: ${({ theme }) => theme.inputBox.fontWeight};
  font-style: ${({ theme }) => theme.inputBox.label.fontStyle};
  font-size: ${({ theme }) => theme.inputBox.label.fontSize};
  line-height: ${({ theme }) => theme.inputBox.label.lineHeight};
  font-feature-settings: ${({ theme }) => theme.inputBox.fontFeatureSettings};
  color: black;
`;

const Helper = styled(Label)<Pick<InputBoxProps, "status">>`
  color: ${({ theme, status }) => theme.inputBox[status].helperColor};
  font-style: ${({ theme }) => theme.inputBox.helper.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.helper.fontWeight};
  font-size: ${({ theme }) => theme.inputBox.helper.fontSize};
  line-height: ${({ theme }) => theme.inputBox.helper.lineHeight};
  margin: 0px 8px;
`;

const Hint = styled(Label)<Pick<InputBoxProps, "status">>`
  color: ${({ theme, status }) => theme.inputBox[status].hintColor};
  margin: 1px 0px;
`;

const StyledIcon = styled(Icon)<Pick<InputBoxProps, "status">>`
  color: ${({ theme, status }) => theme.inputBox[status].helperColor};
`;
const ContextIcon = styled(Icon)<Pick<InputBoxProps, "status">>`
  color: ${({ theme, status }) => theme.inputBox[status].hintColor};
  margin: 4px 4px;
`;

const StyledInput = styled.input<Pick<InputBoxProps, "status">>`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  height: 50px;
  width: 100%;

  color: ${({ theme, status }) => theme.inputBox[status].color};
  border: ${({ theme, status }) => theme.inputBox[status].border};
  box-shadow: ${({ theme, status }) => theme.inputBox[status].boxShadow};

  border-radius: ${({ theme }) => theme.inputBox.borderRadius};
  box-sizing: ${({ theme }) => theme.inputBox.boxSizing};
  padding: ${({ theme }) => theme.inputBox.padding};
  padding-right: 20px;
  flex-grow: 0;
  margin: ${({ theme }) => theme.inputBox.margin};

  &:focus {
    background: white;
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
    background: white;

    padding: ${({ theme }) => theme.inputBox.padding};
    border: ${({ theme }) => theme.inputBox.disabled.border};
    box-sizing: ${({ theme }) => theme.inputBox.disabled.boxSizing};
    box-shadow: ${({ theme }) => theme.inputBox.disabled.boxShadow};
    border-radius: ${({ theme }) => theme.inputBox.disabled.borderRadius};
  }
  &:placeholder {
    align-items: center;
    color: ${({ theme }) => theme.colors.neutral[400]};
    display: flex;
  }
`;

const InputBox: FunctionalComponent<InputBoxProps> = (props) => {
  return (
    <StyledDiv>
      <Label>{props.description}</Label>
      <InputDiv>
        <StyledInput
          status={props.status}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={props.onChange}
          type="text"
        />
        <HintDiv>
          <Hint status={props.status}>{props.hint.content}</Hint>
          {props.hint.icon && (
            <ContextIcon
              status={props.status}
              path={props.hint.icon}
              size={0.72}
            />
          )}
        </HintDiv>
      </InputDiv>
      <HelperDiv>
        {props.status === "error" && (
          <StyledIcon status={props.status} path={mdiAlert} size={0.72} />
        )}
        <Helper status={props.status}>{props.helper}</Helper>
      </HelperDiv>
    </StyledDiv>
  );
};

export default InputBox;
