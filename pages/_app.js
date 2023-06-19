import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialState = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  //global state
  const [animals, setAnimals] = useState(initialState);

  const countSum = animals.reduce((acc, animal) => acc + animal.count, 0);
  const countAverage = countSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

  function handleAdd(id) {
    setAnimals(
      animals.map((animal) =>
        animal.id === id ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }

  function handleSubtract(id) {
    setAnimals(
      animals.map((animal) =>
        animal.id === id
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout countSum={countSum} dragonCount={dragonCount}>
        <Component
          {...pageProps}
          animals={animals}
          onHandleAdd={handleAdd}
          onHandleSubtract={handleSubtract}
          countSum={countSum}
          countAverage={countAverage}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
