import React from "react"
import "./item.css"

class Item extends React.Component {

  handleChangeOnCheck = () => {
    this.props.whenChecked(this.props.index)
  }

  handleRemoveToDo = (e) => {
    e.preventDefault()
    this.props.removeToDo(this.props.index)
  }

  render() {
    return (
      <div className="task-section">
        <button className="remove" onClick={this.handleRemoveToDo}></button>
        <form className="task-form">
          <label>
          <input
            type="checkbox"
            className="task-checkbox"
            checked={this.props.done}
            onChange={this.handleChangeOnCheck} />
          <span className="checkbox" />
          {this.props.text}
        </label>
        </form>
      </div>
    )
  }

}

export default Item
