import styled from "styled-components";

const TextArea = ({ data, setData }) => {
  return (
    <Container>
      <textarea
        name=""
        id=""
        value={data}
        autoFocus
        onChange={e => setData(e.target.value)}
      ></textarea>
    </Container>
  );
};

export default TextArea;

const Container = styled.div`
  textarea {
    min-height: 86vh;
    width: 47vw;
    border-radius: 3px;
    padding: 1rem;
    border: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    &:focus {
      border-color: lightblue;
      outline-color: lightblue;
    }
  }
`;
