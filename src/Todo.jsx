// import cafe from './image.jpg'
// function Todo() {

//     //use of curly braces{} in jsx
//     //1. to write javascript expressions
//     //2. to use variables

//     const name = "John Doe";

//     const person = { // this is the way to create a object
//         name : "Johnny",
//         age : 22,
//         email : "example@gmail.com"
//     }

//     const userArray = ["John", "Jane", "Cutie"]

//     function callfun(){
//         alert("Function Is Called")
//     }

//     function sum(a,b){
//         return (a+b);
//     }

//     return (
//         <div>
//             <h1>First Exercise</h1>
//             {/* <img src={cafe} alt="Cafe Image" /> */}
//             <ul>
//                 <li>Invent New Traffic Light</li>
//                 <li>Reherse a movie scene</li>
//                 <li>Improve the spectrum technology</li>
//             </ul>
//             <button onClick={callfun}>Click Me</button> //function calling
//             <h1>{name}</h1> {/*This is how we r using variables*/}
//             <h1>{sum(10,100)}</h1>
//             <h1>{person.name}</h1>
//             <h1>{person.age}</h1>
//             <h1>{person.email}</h1>
//             <h1>{userArray[2]}</h1>
//             <input type="text" name="" id="" value={name}/>
//         </div>
//     )
// }

// export default Todo

function Todo() {

    //Normal arrow Function
    // const fruit=()=>{
    //     alert("Function call ho gaya")
    // }

    // return(
    //     <div>
    //         <button onClick = {fruit}>Click me</button>
    //     </div>
    // )

    //Arrow function with parameter
    const fruit=(name)=>{
        alert("Function call ho gaya " + name)
    }
    return(
        <div>
            <button onClick = {()=>fruit("Mango")}>Mango</button>
        </div>
    )
}

export default Todo 