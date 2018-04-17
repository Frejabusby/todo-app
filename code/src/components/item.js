import React from "react"

class Item extends React.Component {

  handleChangeOnCheck = () => {
    this.props.whenChecked(this.props.done)
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <input
              type="checkbox"
              value={this.props.id}
              onChange={this.handleChangeOnCheck} />
            {this.props.text}
          </label>
        </form>
      </div>
    )
  }

}

export default Item
