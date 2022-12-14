import React, { Component } from 'react'
import Tasks from './Tasks';
import {addTask} from "../../actions/taskActions";
import { connect } from "react-redux";

class AddTask extends Component {
    state = {
      task: "",
      checked: "false",
    };
  
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTask(this.state);
      document.getElementById("addTaskForm").reset();
      console.log(this.state);
    };
  
    render() {
      return (
        <>
          <form id="addTaskForm"
            className="container"
            autoComplete="off"
            style={{ marginTop: "30px", width:"50%"  }}
            onSubmit={this.handleSubmit}
          >
            <legend> </legend>
            <div className="form-group">
              <label htmlFor="task">Add a task</label>
              <input
                type="text"
                className="form-control"
                id="task"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Add
            </button>
          </form>

          <div>
            <Tasks/>
          </div>
        </>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (task) => dispatch(addTask(task)),
    };
  };

  export default connect(null, mapDispatchToProps)(AddTask);