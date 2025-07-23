import React from "react";

interface Props {
  categories: string[];
  items: Array<{
    id: number;
    description: string;
    amount: number;
    category: string;
  }>;
  onSelectedCategory: (category: string) => void;
}

function FormFilter({ categories, items, onSelectedCategory }: Props) {
  return (
    <div className="p-4">
      <select
        id="category-filter"
        className="form-select"
        onChange={(e) => onSelectedCategory(e.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <p></p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>${item.amount.toFixed(2)}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormFilter;
