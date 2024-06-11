import DefaultHOC from "./HOC/Default.HOC";
import DashboardPage from "./Pages/Dashboard.Page";

function App() {
  return <>
    <DefaultHOC path='/' exact Component={DashboardPage} />
  </>
}
export default App;
