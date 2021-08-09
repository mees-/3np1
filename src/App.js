import { useEffect, useState } from "react"
import { threeNPonePath } from "./lib"

function App() {
  const [inputNum, setInputNum] = useState(1)
  const [path, setPath] = useState([inputNum])
  const changeInputNum = num => {
    setInputNum(num)
    setPath(null)
  }

  useEffect(() => {
    if (path === null) {
      setPath(threeNPonePath(inputNum))
    }
  }, [path, inputNum])

  return (
    <div className="App">
      <div className="card">
        <h3>3n+1</h3>
        <input
          type="number"
          value={inputNum}
          onChange={event => {
            const value = parseInt(event.target.value)
            changeInputNum(value)
          }}
        ></input>
        <button onClick={() => changeInputNum(inputNum + 1)}>next</button>

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
