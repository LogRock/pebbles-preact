import { h, FunctionalComponent } from "preact";
import { useContext } from "preact/hooks";
import styled, { ThemeContext } from "styled-components";

const BlurBox = styled.img<{ blur: string }>`
  width: 176px;
  height: 176px;
  filter: blur(${({ theme, blur }) => theme.blurs[blur]});
`;

const Values = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 176px;
  height: 176px;
  border-radius: 12px;
  overflow: hidden;
`;

const Outer = styled.div`
  width: 176px;
`;

const Color: FunctionalComponent<{ blur: string }> = ({ blur }) => {
  const theme = useContext(ThemeContext);

  return (
    <Outer>
      <Wrapper>
        <BlurBox blur={blur} src="https://placekitten.com/200/200" />
      </Wrapper>
      <Values>
        <div>{blur}</div>
        <div>{theme.blurs[blur]}</div>
      </Values>
    </Outer>
  );
};

export default Color;
