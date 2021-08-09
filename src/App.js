import { useReducer } from "react"
import Card from "./Card"

function App() {
  const [cards, addCard] = useReducer(prevState => [...prevState, <Card />], [<Card />])
  return (
    <div className="App">
      <div>
        <h1>3n+1</h1>
        <div className="explanation">
          <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Explanation</a>
          <br />
          <button onClick={addCard}>more lists</button>
        </div>
        <div className="list-container">
          {cards.map((card, idx) => (
            <div key={idx}>{card}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
