import React from "react"
import Item from "./item"
import NewItem from "./new-item"

class App extends React.Component {
  constructor(props) {
    super(props)
    if (localStorage.getItem("userToDos")) {
      this.state = {
        todo: JSON.parse(localStorage.getItem("userToDos"))
      }
    } else {
      this.state = {
        todo: []
      }
    }
  }

  handleNewItem = (newText) => {
    const toDos = this.state.todo
    toDos.push({
      id: Date.now(),
      done: false,
      text: newText
    })
    localStorage.setItem("userToDos", JSON.stringify(toDos))
    this.setState({
      todo: toDos
    })
  }

  handleChecked = (index) => {
    const toDo = this.state.todo
    toDo[index].done = !toDo[index].done
    localStorage.setItem("userToDos", JSON.stringify(toDo))
    this.setState({
      todo: toDo
    })
  }

  handleRemove = (index) => {
    const toDo = this.state.todo
    toDo.splice(index, 1)
    this.setState({
      todo: toDo
    })
    localStorage.setItem("userToDos", JSON.stringify(toDo))
  }

  render() {
    return (
      <div>
        <h1>To do App</h1>
        <NewItem onSubmit={this.handleNewItem} />
        {this.state.todo.map((item, index) => {
          return <Item
            index={index}
            key={item.id}
            text={item.text}
            done={item.done}
            whenChecked={this.handleChecked}
            removeToDo={this.handleRemove} />
        })}
      </div>
    )
  }

}

export default App
