import React from "react"
import Item from "./item"
import NewItem from "./new-item"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: []
    }
  }

  handleNewItem = (newText) => {
    const toDos = this.state.todo
    toDos.push({
      id: Date.now(),
      done: false,
      text: newText
    })
    this.setState({
      todo: toDos
    })
  }

  handleChecked = () => {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    return (
      <div>
        <h1>To do App</h1>
        <NewItem onSubmit={this.handleNewItem} />
        {this.state.todo.map((item) => {
          return <Item
            key={item.id}
            text={item.text}
            done={item.done}
            whenChecked={this.handleChecked} />
        })}
      </div>
    )
  }

}

export default App
