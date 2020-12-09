import ListItem from './ListItem'
import React, { Component } from 'react'

class MyList extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            toDoItemArray: props.theList,
            newItem: " "
        }
    }
    clearList(e) {
      this.setState({
        toDoItemArray: [],
      })
    }
    newItemChange(e) {
      this.setState({
         newItem: e.target.value
      })
    }
    addItem(e) {
      let newArray = this.state.toDoItemArray
      newArray.push(this.state.newItem)
    }
    render() {
      let todoItems = this.state.toDoItemArray.map((item,ind) => (
        <ListItem doThis={item} key={ind} />
      ))

    return(
      <div className="list-style">
        <h1>Things I need to do:</h1>
          <ul>
            {todoItems}
          </ul>
          <button onClick={(e) => this.clearList(e)}>Finished the List!</button>
          <form>
          <input type="text" onChange={(e) => this.newItemChange(e)} value={this.state.newItem} />
              <button onClick={(e) => this.addItem(e)}>Add it!</button>
            </form>
          </div>
        )
    }
}
export default MyList