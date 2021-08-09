import { useEffect, useState } from "react"
import SWorker from "simple-web-worker"
import { threeNPoneWebWorker, threeNPonePath } from "./lib"

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
        <input
          type="number"
          value={inputNum}
          onChange={event => {
            const value = parseInt(event.target.value)
            changeInputNum(value)
          }}
        ></input>
        <button onClick={() => changeInputNum(inputNum + 1)}>next</button>
        {path != null ? (
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>number</th>
              </tr>
            </thead>
            <tbody>
              {path.map((number, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  )
}

export default App
