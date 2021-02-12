import "./App.css";
import Posts from "./components/Posts";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Posts />
        </Row>
      </Container>
    </div>
  );
}

export default App;
