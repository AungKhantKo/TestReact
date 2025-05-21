import React, { createRef } from "react";
import { connect } from "react-redux";

const User = ({name,age}) => {
  return(
  <li>{name}, {age}</li>
  )
}

const App = props => {

  let nameAdd = createRef();
  let ageAdd = createRef();

  const plus = () => {
      props.plus(props.users.length + 1 , nameAdd.current.value, ageAdd.current.value)
  }

  return (
    <div>
      <input type="text" ref={nameAdd}/>
      <input type= "text" ref={ageAdd}/>
      <button onClick={plus}>Add</button>
      <ul> 
        {props.users.map(u=> (<User key={u.id} name={u.name} age={u.age}/>))}
      </ul>
    </div>
  )
}

const stateToProps = state => {
  
    return{
      users: state
    }

}

const dispatchToProps = dispatch => {
  
    return{
      plus: (id, name, age) => {
      dispatch({type: "PLUS", user: {id, name, age}})
    }
    }
  
}

const ReduxApp = connect(stateToProps,dispatchToProps)(App);

export default ReduxApp;