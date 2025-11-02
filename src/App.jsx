//Single file component usage
//First letter of the component should be capital
//Small letter wale function normal js walee code hote hai jo value return krte hai koi html ya jsx nhi
//jsx is a syntax extension for javascript
//jsx looks like html but it is not html
//jsx is used to describe what the  ui should look like
//jsx is not mandatory to use react but it is recommended to use jsx with react
//jsx makes it easier to write and understand the code





//Part 1
// import Login,{Profile,Setting,userKey} from "./UserComponent"

// function App(){
//   // alert(sum())
//   return (
//     <div>
//       <h1>First Component {sum()}</h1>
//       <Fruit />
//       <Login />
//       <Profile />
//       <Setting/>
//       <h3>{userKey}</h3>
//     </div>
//   )
// }

// function Fruit() {
//   return (
//     <h2>Apple</h2>
//   )
// }

// function sum(){
//   return 10+10
// }

// export default App




//Part 2
// import { createElement } from "react";

// function App (){
//   return createElement("div",{id:"rootDiv"},"Hello Guys") //using react without jsx
// }

// export default App


import Todo from "./Todo";
function App(){
  return(
    <div>
      <Todo />
    </div>
  )
}

export default App