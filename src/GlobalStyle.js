import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /* -------------------------------- CSS RESET ------------------------------- */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* ------------------------------ GLOBAL STYLE ------------------------------ */
     html,body {
         
    } 

    /* -------------------------------- Scrollbar CSS ------------------------------- */
    /* The emerging W3C standard that is currently Firefox-only */
    * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
    }

    /* Works on Chrome/Edge/Safari */
    *::-webkit-scrollbar {
    width: 5px;
    }
    *::-webkit-scrollbar-track {
    background: transparent;
    }
    *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.7);
    border-radius: 20px;
    border: transparent;
    }

    /* -------------------------------- Scrollbar CSS END------------------------------- */

     /* ------------------------------ Unique Styles for MD ----------------------------- */
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }


    blockquote {
      font-size: 1.5rem;
      font-style: italic;
      border-left: 5px solid;
      color: hsl(210, 22%, 49%);
      padding-left: 2rem;
      line-height: 2;
      margin-bottom: 1.5rem;
    }

    blockquote ::first-letter {
      text-transform: uppercase;
    }


    pre {
      background: #333;
      display: inline-block;
      border-radius: var(--radius);
      padding: 1rem 2rem;
      color: yellow;
      margin-bottom: 1.5rem;
    }
    /* ------------------------------ Unique Styles for MD END----------------------------- */

`;
