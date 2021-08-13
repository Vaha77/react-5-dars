import React, { Component } from "react";
import "./style.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "",
      selected: null,
      data: [
        { id: 1, name: "Jabbor", status: "Medium" },
        { id: 2, name: "Mansur", status: "High" },
        { id: 3, name: "Jumanazar", status: "Low" },
        { id: 4, name: "Abdulvohid", status: "Vaha" },
      ],
    };
  }

  render() {
    const onDelete = (id) => {
      console.log("delete", id);
      const newData = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: newData });
    };
    const onAdd = () => {
      console.log(this.state.name, this.state.status);
      const newData = [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          name: this.state.name,
          status: this.state.status,
        },
      ];
      this.setState({ data: newData });
    };
    const onChangeName = (e) => {
      this.setState({ name: e.target.value });
    };
    const onChangeSatatus = (e) => {
      this.setState({ status: e.target.value });
    };
    // const sort=()=>{
    //   const newData=this.state.data.sort((a, b)=>)
    // }

    const onEdit = (id) => {
      console.log(id, "edit");
    };
    return (
      <div>
        <input onChange={onChangeName} placeholder="name" type="text" />
        <input onChange={onChangeSatatus} placeholder="status" type="text" />
        <button onClick={onAdd}>add</button>
        <table border="1" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td> {value.name} </td>
                  <td> {value.status} </td>
                  <td>
                    <button onClick={() => onDelete(value.id)}>delete</button>
                    <button onClick={() => onEdit(value.id)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <hr />
      </div>
    );
  }
}
