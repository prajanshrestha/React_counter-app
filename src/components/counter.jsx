import React, { Component } from "react";

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    /*
      We can do something like this:
      if (prevProps.counter.value !== this.props.counter.value){
        Ajax call and get new data from the server
      }
    */
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    console.log("Counter-Rendered");
    return (
      <React.Fragment>
        {/* <h4>Counter #{this.props.id}</h4> */}
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        {/* <p>{this.renderTags()}</p> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }

  // renderTags() {
  //   if (this.state.tags.length == 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
