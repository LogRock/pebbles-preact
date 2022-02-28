import { h, Fragment, FunctionalComponent } from "preact";
import { useContext } from "preact/hooks";
import styled, { ThemeContext, ThemeProvider } from "styled-components";
import { light } from "../../../lib/theme";

const ShadeBox = styled.div<{ value: string }>`
  width: 392px;
  height: 72px;
  background: ${({ theme, value }) => {
    return theme.colors.shades[value];
  }};
  border-radius: 4px;
`;

const Values = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 392px;
  text-transform: uppercase;
  float: left;
  padding: 10px;
`;

const Shade: FunctionalComponent<{ value: string }> = ({ value }) => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <ShadeBox value={value} />
      <Values>
        <div>{value}</div>
        <div>{theme.colors.shades[value]}</div>
      </Values>
    </Wrapper>
  );
};

export default Shade;
