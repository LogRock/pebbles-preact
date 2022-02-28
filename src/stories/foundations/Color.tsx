import { h, Fragment, FunctionalComponent } from "preact";
import { useContext } from "preact/hooks";
import styled, { ThemeContext, ThemeProvider } from "styled-components";
import { light } from "../../../lib/theme";

const ColorBox = styled.div<{ color: string; value: string }>`
  width: 147px;
  height: 72px;
  background: ${({ theme, color, value }) => {
    return theme.colors[color][value];
  }};
  border-radius: 4px;
`;

const Values = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 147px;
  text-transform: uppercase;
  float: left;
  padding: 10px;
`;

const Color: FunctionalComponent<{ color: string; value: string }> = ({
  color,
  value,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <ColorBox color={color} value={value} />
      <Values>
        <div>{value}</div>
        <div>{theme.colors[color][value]}</div>
      </Values>
    </Wrapper>
  );
};

export default Color;
