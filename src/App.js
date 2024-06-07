import DefaultHOC from "./HOC/Default.HOC";

function Hello() {
  return <>

  </>
}

function App() {
  return <>
    <DefaultHOC path='/' exact Component={Hello} />
  </>
}
export default App;
