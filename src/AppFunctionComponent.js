import React, { createRef } from "react";
import Users from "./UsersFunctionComponent";

const App = (props) => {

  // let [user, setUser]= React.useState('Oke Gyi')
  // let [age, setAge]= React.useState(15)
  let [users, setUsers] = React.useState([
    {id : 1 , user : "Oke Gyi", age : 22  },
    {id : 2 , user : "Sate Gyi", age : 13 },
  ])

  let addUser = createRef();
  let addAge = createRef();

  let plus = () => {

    let id = users.length + 1;
    let user = addUser.current.value;
    let age = addAge.current.value; 

    setUsers ([
      ...users,
      {id, user, age},
    ])
  }

  return(
      <div>
        <input type = "text" ref ={addUser}/> <br></br>
        <input type = "text" ref= {addAge}/> <br></br>
        <button onClick={plus}>Add New One</button>

        <ul>
          {users.map(u=> <Users key = {u.id} user = {u.user}  age = {u.age}/>)}
        </ul>
      </div>
  )
}

export default App;