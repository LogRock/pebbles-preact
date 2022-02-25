import { h, Fragment, FunctionalComponent } from 'preact';
import { useContext } from "preact/hooks"
import styled, { ThemeContext, ThemeProvider } from "styled-components"
import { light } from "../../../lib/theme"
import Theme from '../../../lib/types/theme';

const ShadowBox = styled.div<{ variant: string }>`
  width: 176px;
  height: 176px;
  background: white;
  border-radius: 50%;
  box-shadow: ${({ theme, variant }) => theme.shadows[variant]};
`

const Values = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 10px;
`

const Wrapper = styled.div`
  width: 176px;
  float: left;
  padding: 10px
`

const Shadow: FunctionalComponent<{ variant: string }> = ({ variant }) => {
  const theme = useContext(ThemeContext)

  return <Wrapper>
      <ShadowBox variant={variant}/>
      <Values>
        <div>{variant}</div>
      </Values>
    </Wrapper>
}

export default Shadow