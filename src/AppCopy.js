// AppCopy.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import anime from '@justalk/anime-api';


// 🔁 Renamed this to AppCopy to avoid conflict with App.js
function AppCopy() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is from AppCopy.js
        </p>
      </header>
    </div>
  );
}

class BddForm extends React.Component{
  nameRef = React.createRef();
  typeRef = React.createRef();

  add = () => {
    let skin = this.nameRef.current.value;
    let type = this.typeRef.current.value;
    this.props.add(skin,type)
  }

  render(){
    return(
    <div>
      <input type="text" ref= {this.nameRef}/>
      <input type="text" ref= {this.typeRef}/>
      <button onClick={this.add}>Add</button>
    </div>
    )}
}

// ✅ Class component exported with a name
class One extends React.Component {
  state = {
    items:[
      {id: 1, skin: "Naruto", type:"Exculsive"},
      {id: 2, skin: "Sasuke", type:"Exculsive"},
      {id: 3, skin: "Sakura", type:"Exculsive"},
      {id: 4, skin: "Garra", type:"Delux"},
    ]
  }



  add = (skin,type) => {
    let id = this.state.items.length + 1;
    

    this.setState({
      items: [
        ...this.state.items,
        {id, skin , type }
      ]
    })
  }

  render() {
    return (
    <div>
      <h1>Hello React (from One component)</h1>
      <h5>Testing Something</h5>
      <BddForm add = {this.add}/>
      
      
      <ul>
         
         <Item skin="Computer" type="1000000"/>
         {this.state.items.map(i=>{
          return(
            <Item 
            key={i.id}
            skin={i.skin} 
            skin_type={i.type}/>
          )
         })}
      </ul>
     
    </div>);
  }
}

  class Item extends React.Component{
    render(){
     return (<>
      
      <li>{this.props.skin},{this.props.skin_type}{this.props.type}</li>
      
    </>)
      
    }
  }

export default AppCopy;
export { One };
