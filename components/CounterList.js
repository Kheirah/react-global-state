import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export default function CounterList({
  animals,
  onHandleAdd,
  onHandleSubtract,
}) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {animals.map((animal) => (
          <li key={animal.id}>
            <Counter
              animal={animal}
              onHandleAdd={onHandleAdd}
              onHandleSubtract={onHandleSubtract}
            />
          </li>
        ))}
      </List>
    </>
  );
}
