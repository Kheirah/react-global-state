import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnimalName = styled.strong`
  width: 5rem;
`;

export default function Counter({ animal, onHandleAdd, onHandleSubtract }) {
  return (
    <Container>
      <AnimalName>{animal.name}:</AnimalName>
      <button type="button" onClick={() => onHandleSubtract(animal.id)}>
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{animal.count}</span>
      <button type="button" onClick={() => onHandleAdd(animal.id)}>
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </Container>
  );
}
