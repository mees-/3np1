import { useMemo, useState } from "react"
import { threeNPonePath } from "./lib"

function App() {
  const [inputNum, setInputNum] = useState(1)

  const path = useMemo(() => threeNPonePath(inputNum), [inputNum])

  return (
    <div className="App">
      <div className="card">
        <h1>3n+1</h1>
        <div className="explanation">
          <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Explanation</a>
        </div>
        <input
          type="number"
          value={inputNum}
          onChange={event => {
            const value = parseInt(event.target.value)
            setInputNum(value)
          }}
        ></input>
        <button onClick={() => setInputNum(inputNum + 1)}>next</button>

        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>number</th>
            </tr>
          </thead>
          <tbody>
            {path !== null ? (
              path.map((number, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{number}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>0</td>
                <td>{inputNum}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
