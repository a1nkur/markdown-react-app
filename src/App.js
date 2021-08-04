import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import TextArea from "./TextArea";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { AiOutlineDownload } from "react-icons/ai";

function App() {
  const [data, setData] = useState("# Ready to Markdown ..");

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([data], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "markdown.md";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Title>
        <button onClick={handleDownload}>
          <AiOutlineDownload />
          download
        </button>
      </Title>
      <ActionArea>
        <TextArea data={data} setData={setData} />
        <div className="md">
          <ReactMarkdown>{data}</ReactMarkdown>
        </div>
      </ActionArea>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- Styled Components --------------------------- */
const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f1f5f8;
  padding: 1rem;
`;

const Title = styled.div`
  padding-bottom: 1rem;
  button {
    padding: 0.5rem 1rem;
    color: #fff;
    background-color: rgb(25, 159, 163);
    border: none;
    border-radius: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin-right: 5px;
    }
  }
`;

const ActionArea = styled.div`
  display: flex;
  gap: 1rem;

  .md {
    padding-left: 1rem;
  }
`;
