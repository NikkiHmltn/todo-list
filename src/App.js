import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'


function App() {
  const todos = ['Make the list','Learn React','Be Rich Now?']
  const list = todos.map((todo,idx)=>{
    return <ListItem todo={todo} key={idx}/> 
  })
  return (
    <div>
      <header>MyList</header>
      <div>
        <ul>
          {/* <ListItem todo="Make the list"/>
          <ListItem todo="Make another list"/> */}
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;
