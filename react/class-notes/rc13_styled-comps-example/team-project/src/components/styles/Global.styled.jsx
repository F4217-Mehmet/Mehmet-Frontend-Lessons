import { createGlobalStyle, ThemeConsumer } from "styled-components"


export const GlobalStyles= createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background: ${({theme})=> theme.colors.body};
    color: "#00252e";
    font-family: 'Poopins', sans-serif;
    font-size: 1.1rem;
    }

    p{
        opacity:0.6 rem;
        line-height:1.5 rem;
    }

`;