import  {Component} from 'react';
import './App.css';
import {CardList} from './component/card-list.component.jsx';
import {SearchBox} from './component/Search-Box/Search_Box.component.jsx';
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFields: " "
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

render(){
  
   const {monsters,searchFields} = this.state;
   //if searchfield empty it returns monster,if has any letter than returns the match result(something /nothing)
   const filterMonster = monsters.filter(monster =>
     monster.name.toLowerCase().includes(searchFields.toLowerCase())
  ); 
 console.log(filterMonster);
  return (
    <div className='App'>
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder = "Search Monsters"
        handleChange = {e => {
          this.setState({searchFields: e.target.value })
        }}
      />
      <CardList property={filterMonster}/>
       
    </div>
    );
}
}
export default App;
