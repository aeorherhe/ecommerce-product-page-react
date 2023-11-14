/* eslint-disable react-refresh/only-export-components */
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 *,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* general variables */
  --box-shadow: 0 0 10px 1px rgb(194, 194, 194, 0.8);
  --transition: all 0.3s linear;
  --transition-2: all 0.5s linear;
  --border-radius: 0.5rem;
  --border-radius-2: 1rem;
  --line-3: 2px solid rgb(9, 224, 88);
  --White: #ffffff;
  --Orange:rgb(236, 99, 14);
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);
--line: 3px solid hsl(217, 16%, 45%);
--line-2: 3px solid #23630d;
--max-width: 80rem;
--btn-border: 1px solid hsl(217, 16%, 45%);

/* colors from the project */
--Orange: hsl(26, 100%, 55%);
--Pale-orange: hsl(25, 100%, 94%);
--Very-dark-blue: hsl(220, 13%, 13%);
--Dark-grayish-blue: hsl(219, 9%, 45%);
--Grayish-blue: hsl(220, 14%, 75%);
--Light-grayish-blue: hsl(223, 64%, 98%);
--Black-bg : hsla(0, 0%, 0%, 0.7);
}


body {
  display: grid;
  font-family: "Kumbh Sans", "Open Sans", Arial, Helvetica, sans-serif;
  position: relative;
  min-height: 100vh;

  > * ::first-letter{
    text-transform: uppercase;
  }
}

.btn{
  color: var(--White);
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1rem;
  letter-spacing: 0.125rem;
  transition: var(--transition);
  outline: none;
  cursor: pointer;
  

}

a{
  text-decoration: none;
  color: var(--Text);
  font-weight: 500;
}

li{
  list-style: none;
}

@media (min-width: 768px) {
  position: static;
  .main{
    --padding-inline: clamp(1rem, 5vw, 5rem);
    --content-max-width: clamp(20rem, 96vw, var(--max-width));
    --breakout-max-width: clamp(30rem, 90vw, var(--max-width));
  
  
    display: grid;
    gap: 1rem;
    grid-template-columns: 
    [full-width-start] auto [content-start] 
    var(--content-max-width) [content-end] auto [full-width-end];
  
    > * {
      grid-column: content;
    }
  
    > .full-width {
      grid-column: full-width;
    }
  }
}
`;

export default GlobalStyles;

export const StyledButton = styled.button`
  background: var(--Orange);
  color: var(--White);
  padding: 1rem 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
