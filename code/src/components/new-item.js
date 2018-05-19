import React from "react"
import "./new-item.css"

class NewItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newItem: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      newItem: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.newItem)
    this.setState({
      newItem: ""
    })
  }

  render() {
    return (
      <div className="form-section">
        <form className="new-item-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={this.state.newItem}
            onChange={this.handleChange} />
          <button>+</button>
        </form>
      </div>
    )
  }

}

export default NewItem
