import { useMemo, useState } from "react"
import { threeNPonePath } from "./lib"

function App() {
  const [inputNum, setInputNum] = useState(1)

  const { path, longestEvenLength, sum, avg, max, min } = useMemo(() => {
    const newPath = threeNPonePath(inputNum)
    let longestEvenLength = 0
    let currentEvenLength = 0
    let sum = 0
    let max = 0
    let min = +Infinity
    for (const num of newPath) {
      sum += num
      if (num > max) {
        max = num
      }
      if (num < min) {
        min = num
      }
      if (num % 2 === 0) {
        currentEvenLength++
        if (currentEvenLength > longestEvenLength) {
          longestEvenLength = currentEvenLength
        }
      } else {
        currentEvenLength = 0
      }
    }
    const avg = sum / newPath.length
    return { path: newPath, longestEvenLength, sum, avg, max, min }
  }, [inputNum])

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
              <th>Stat</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Average</td>
              <td>{avg.toFixed(0)}</td>
            </tr>
            <tr>
              <td>Max</td>
              <td>{max}</td>
            </tr>
            <tr>
              <td>Min</td>
              <td>{min}</td>
            </tr>
            <tr>
              <td>Sum</td>
              <td>{sum}</td>
            </tr>
            <tr>
              <td>consecutive evens</td>
              <td>{longestEvenLength}</td>
            </tr>
          </tbody>
        </table>
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
                  <td className={`num-${number % 2 === 0 ? "even" : "odd"}`}>{number}</td>
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
