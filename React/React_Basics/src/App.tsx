import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        A button
      </Button>
    </div>
  );
}

export default App;
