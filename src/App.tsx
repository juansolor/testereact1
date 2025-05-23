import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "Paris", "San Francisco", "Tokyo", "London"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItems = (item: string) => {
    console.log(item); //Using event.currentTarget to get the text of the clicked item
  };

  return (
    <div className="App">
      <h1>
        {" "}
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItems}
        />{" "}
      </h1>
      To get started, edit <code>src/App.tsx</code> and save to reload.
      <div>
        {alertVisible && (
          <Alert onclose={() => setAlertVisibility(false)}> My Alert</Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          My button
        </Button>
      </div>
    </div>
  );
}

export default App;
//Exporting the App component so it can be used in other files.
