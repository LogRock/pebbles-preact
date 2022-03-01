import { h, FunctionalComponent } from "preact";
import styled from "styled-components";

const LinearGradientBox = styled.div<{ name: string }>`
  width: 392px;
  height: 72px;
  background: ${({ theme, name }) => {
    return theme.gradients[name].background;
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
  float: left;
  padding: 10px;
`;

const Shade: FunctionalComponent<{ name: string }> = ({ name }) => {
  return (
    <Wrapper>
      <LinearGradientBox name={name} />
      <Values>
        <div>{name}</div>
      </Values>
    </Wrapper>
  );
};

export default Shade;
