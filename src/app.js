import React from "react";
import jumboData from '../fixtures/jumbo'
import Jumbotron from "./components/jumbotron";



export default function App() {
  return (
    <Jumbotron.Container>

      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
            <p>hello</p>
        </Jumbotron>
      ))}

    </Jumbotron.Container>
  );
}


