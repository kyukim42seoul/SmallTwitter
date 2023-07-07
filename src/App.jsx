import axios from "axios";
import "./App.css";

function App() {
  const onClickHandler = () => {
    console.log("Clicked!");
    axios.get("http://localhost:3000").then((res) => console.log(res));
  };
  return (
    <div>
      It's Web
      <button onClick={onClickHandler}>Button</button>
    </div>
  );
}

export default App;
