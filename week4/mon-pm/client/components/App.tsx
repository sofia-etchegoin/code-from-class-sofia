import Dog from './Dog.tsx'

function App() {
  const rosesDog = {
    name: 'Alfie',
    breed: 'humane society dog',
    superpower: 'singing',
    text: 'hello',
  }
  const mattsDog = {
    name: 'Bean',
    breed: 'whippet huntaway',
    superpower: 'running away / being nervous',
    text: 'hi',
  }
  const dogArr = [rosesDog, mattsDog]

  return (
    <div className="container">
      {/* <img
        id="somepaw"
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      /> */}
      <Dog {...mattsDog} />
      <Dog {...rosesDog} />

      {dogArr.map((dogObj) => {
        return <Dog key={dogObj.name} {...dogObj} />
      })}
    </div>
  )
}

export default App
