import React from "react";
import './App.css'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { ColumnToggle } from 'react-bootstrap-table2-toolkit';
// import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import { Form } from "react-bootstrap";

const { ToggleList } = ColumnToggle;
const columns = [
  {
    dataField: "id",
    text: "Product ID",
    hidden: false
  },
  {
    dataField: "name",
    text: "Product Name",
    hidden: false
  },
  {
    dataField: "price",
    text: "Product Price",
    hidden: false
  },
  {
    dataField: "field1",
    text: "Field 1",
    hidden: false
  },
  {
    dataField: "field2",
    text: "Field 2",
    hidden: false
  },
  {
    dataField: "field3",
    text: "Field 3",
    hidden: false
  },
  {
    dataField: "field4",
    text: "Field 4",
    hidden: false
  },
  {
    dataField: "field5",
    text: "Field 5",
    hidden: false
  },
  {
    dataField: "field6",
    text: "Field 6",
    hidden: true
  },
  {
    dataField: "field7",
    text: "Field 7",
    hidden: true
  },
  {
    dataField: "field8",
    text: "Field 8",
    hidden: true
  },
  {
    dataField: "field9",
    text: "Field 9",
    hidden: true
  },
  {
    dataField: "field10",
    text: "Field 10",
    hidden: true
  },
  {
    dataField: "field11",
    text: "Field 11",
    hidden: true
  },
  {
    dataField: "field12",
    text: "Field 12",
    hidden: true
  }
];

const products = [
  {
    id: 1,
    name: "Producto 1",
    price: 3.45,
    field1: 1,
    field2: 2,
    field3: 3,
    field4: 4,
    field5: 5,
    field6: 6,
    field7: 7,
    field8: 8,
    field9: 9,
    field10: 10,
    field11: 11,
    field12: 12
  },
  {
    id: 2,
    name: "Producto 2",
    price: 4.45,
    field1: 1,
    field2: 2,
    field3: 3,
    field4: 4,
    field5: 5,
    field6: 6,
    field7: 7,
    field8: 8,
    field9: 9,
    field10: 10,
    field11: 11,
    field12: 12
  },
  {
    id: 3,
    name: "Producto 3",
    price: 5.45,
    field1: 1,
    field2: 2,
    field3: 3,
    field4: 4,
    field5: 5,
    field6: 6,
    field7: 7,
    field8: 8,
    field9: 9,
    field10: 10,
    field11: 11,
    field12: 12
  }
];

const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (
  /*     <div
    className="btn-group btn-group-toggle btn-group-vertical"
    data-toggle="buttons"
  >
    {columns
      .map(column => ({
        ...column,
        toggle: toggles[column.dataField]
      }))
      .map(column => (
        <button
          type="button"
          key={column.dataField}
          className={`btn btn-warning ${column.toggle ? "active" : ""}`}
          data-toggle="button"
          aria-pressed={column.toggle ? "true" : "false"}
          onClick={() => onColumnToggle(column.dataField)}
        >
          {column.text}
        </button>
      ))}
  </div> */
  <div className="text-center">
    {columns.map(column => ({
        ...column,
        toggle: toggles[column.dataField]
      }))
      .map((column, index) => (
        <Form.Check
          type="checkbox"
          key={column.dataField}
          inline
          label={column.text}
          id={column.dataField}
          //aria-pressed={(column.toggle) ? "true" : "false"}
          checked={column.toggle}
          aria-checked={column.toggle ? "true" : "false"}
          onChange={() => onColumnToggle(column.dataField)}
        // onClick={() => onColumnToggle(column.dataField)}
        />
      ))}
  </div>
);

function Table() {
  return (
    // <BootstrapTable keyField='id' data={ products } columns={ columns } />
    <div className="App">
      <h1>Header</h1>
      <h2>Content</h2>
      
      {/* With checked */}
      {/* <ToolkitProvider
        keyField="id"
        data={products}
        columns={columns}
        columnToggle
      >
        {props => (
          <div>
            <CustomToggleList {...props.columnToggleProps} />
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider> */}

{/* with button */}
<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  columnToggle
>
  {
    props => (
      <div>
        <ToggleList { ...props.columnToggleProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>
    </div>
  );
}

export default Table;
