import { useState } from "react";
import "./App.css";
import { foods } from "./data";
import { filterItems } from "./data";

function SearchBar({ userInput, handleInput }) {
  return (
    <>
      <label>
        Search:
        <input
          type="text"
          placeholder="Enter your search item"
          value={userInput}
          onChange={(e) => handleInput(e)}
        />
      </label>
    </>
  );
}

function ListItems({ foods }) {
  return (
    <>
      <table>
        <tbody>
          {foods.map((foodItem) => {
            return (
              <tr key={foodItem.id}>
                <td>{foodItem.name}</td>
                <td>{foodItem.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function App() {
  const [userInput, setUserInput] = useState("");
  const foodItems = filterItems(foods, userInput);

  function handleInput(e) {
    setUserInput(e.target.value);
  }

  return (
    <>
      <SearchBar userInput={userInput} handleInput={handleInput} />
      <hr />
      <ListItems foods={foodItems} />
    </>
  );
}

export default App;
