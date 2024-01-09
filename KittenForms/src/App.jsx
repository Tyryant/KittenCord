import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button variant="contained" disabled="true">
          {" "}
          Hello World
        </Button>
      </div>
    </>
  );
}

export default App;
