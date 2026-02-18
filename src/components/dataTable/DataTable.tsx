import React from "react";
import { DataTablePropsType } from "../../models/Interfaces";

const DataTable: React.FC<DataTablePropsType> = ({ data, onSort }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th onClick={() => onSort("id")}>ID</th>
          <th onClick={() => onSort("name")}>Name</th>
          <th onClick={() => onSort("category")}>Category</th>
          <th onClick={() => onSort("status")}>Status</th>
          <th onClick={() => onSort("createdAt")}>Created At</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.category}</td>
            <td>{row.status}</td>
            <td>{new Date(row.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
