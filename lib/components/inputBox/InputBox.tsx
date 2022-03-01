import { h, FunctionalComponent } from "preact";
import styled from "styled-components";
import Theme from "../../types/theme";

const enum NotificationStatus {
  "info",
  "error",
}
type InputBoxProps = {
  description: string;
  notification: {
    message: string;
    status: NotificationStatus;
  };
  placeholder: string;
  theme: Theme;
  disabled: boolean;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
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

const Notification = styled.span`
  align-items: center;
  display: flex;

  color: ${({ theme }) => theme.colors.neutral[500]};
  font-family: ${({ theme }) => theme.inputBox.fontFamily};
  font-style: ${({ theme }) => theme.inputBox.notification.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.notification.fontWeight};
  font-size: ${({ theme }) => theme.inputBox.notification.fontSize};
  font-feature-settings: ${({ theme }) => theme.inputBox.fontFeatureSettings};
  line-height: ${({ theme }) => theme.inputBox.notification.lineHeight};
  margin: 0px 2px;
`;

const Error = styled.span`
  align-items: center;
  display: flex;

  color: ${({ theme }) => theme.colors.error[600]};
  font-family: ${({ theme }) => theme.inputBox.fontFamily};
  font-style: ${({ theme }) => theme.inputBox.notification.fontStyle};
  font-weight: ${({ theme }) => theme.inputBox.notification.fontWeight};
  font-size: ${({ theme }) => theme.inputBox.notification.fontSize};
  font-feature-settings: ${({ theme }) => theme.inputBox.fontFeatureSettings};
  line-height: ${({ theme }) => theme.inputBox.notification.lineHeight};
  margin: 0px 2px;
`;

const StyledInput = styled.input`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: row;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.neutral[900]};
  border: ${({ theme }) => theme.inputBox.border};
  border-radius: ${({ theme }) => theme.inputBox.borderRadius};
  box-sizing: ${({ theme }) => theme.inputBox.boxSizing};
  box-shadow: ${({ theme }) => theme.inputBox.boxShadow};
  padding: ${({ theme }) => theme.inputBox.padding};

  flex-grow: 0;
  margin: ${({ theme }) => theme.inputBox.margin};

  &:focus {
    background: white;
    border: ${({ theme }) => theme.inputBox.focused.border};
    border-radius: ${({ theme }) => theme.inputBox.focused.borderRadius};
    box-sizing: ${({ theme }) => theme.inputBox.focused.boxSizing};
    box-shadow: ${({ theme }) => theme.inputBox.focused.boxShadow};
    outline: none;
  }
  &:disabled {
    align-items: center;
    background: white;
    display: flex;
    flex-direction: row;

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

    font-family: ${({ theme }) => theme.inputBox.fontFamily};
    font-weight: ${({ theme }) => theme.inputBox.fontWeight};
    font-style: ${({ theme }) => theme.inputBox.fontStyle};
    font-size: ${({ theme }) => theme.inputBox.fontSize};
    font-feature-settings: ${({ theme }) => theme.inputBox.fontFeatureSettings};
    line-height: ${({ theme }) => theme.inputBox.lineHeigh};
  }
`;

const InputBox: FunctionalComponent<InputBoxProps> = (props) => {
  return (
    <StyledDiv>
      <Label>{props.description}</Label>
      <StyledInput
        placeholder={props.placeholder}
        disabled={props.disabled}
        type="text"
      />

      {props.notification.status === NotificationStatus.info && (
        <Notification>{props.notification.message}</Notification>
      )}
      {props.notification.status === NotificationStatus.error && (
        <Error>{props.notification.message}</Error>
      )}
    </StyledDiv>
  );
};

export default InputBox;
