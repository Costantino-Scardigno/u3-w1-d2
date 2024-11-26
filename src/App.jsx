import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./component/TopBar";
import MyFooter from "./component/MyFooter";
import { Alert, Container } from "react-bootstrap";
import Welcome from "./component/Welcome";
import AllBBooks from "./AllBooks";
import horrorBoks from "./data/horror.json";

function App() {
  return (
    <>
      <TopBar />
      <Welcome />
      <AllBBooks />
      <MyFooter />
    </>
  );
}

export default App;
