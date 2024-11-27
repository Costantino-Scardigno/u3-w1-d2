import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./component/TopBar";
import MyFooter from "./component/MyFooter";
import { Alert, Container } from "react-bootstrap";
import Welcome from "./component/Welcome";
import horror from "./data/horror.json";
import SingleBooks from "./component/SingleBooks.jsx";

import BooksList from "./BookList.jsx";

function App() {
  return (
    <>
      <TopBar />
      <Welcome />
      <BooksList books={horror} />
      <MyFooter />
    </>
  );
}

export default App;
