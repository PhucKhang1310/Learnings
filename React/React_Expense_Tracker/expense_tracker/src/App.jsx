import { useState } from "react";
import Form from "./Components/Form";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import FormFilter from "./Components/FormFilter";

function App() {
  const categories = ["Groceries", "Utilites", "Entertainment"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [items, setItems] = useState([
    { id: 1, description: "item 1", amount: 10, category: "Groceries" },
    { id: 2, description: "item 2", amount: 20, category: "Utilites" },
    { id: 3, description: "item 3", amount: 12, category: "Entertainment" },
    { id: 4, description: "item 4", amount: 40, category: "Groceries" },
    { id: 5, description: "item 5", amount: 21, category: "Entertainment" },
  ]);

  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="mb-5">
        <Form categories={categories} />
      </div>
      <div className="mb-5">
        <FormFilter
          categories={categories}
          items={items}
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
    </div>
  );
}

export default App;
