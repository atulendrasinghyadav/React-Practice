// function PropsComponent({name , age}){
//     return(
//         <div>
//             <h1>This is Props Component</h1>
//             <h2>Name: {name}</h2>
//             <h2>Age: {age}</h2>
//         </div>
//     )
// } //For variable and normal Passing Props


// function PropsComponent({user}){
//     return (
//         <div>
//             <hr />
//             <h2>Name : {user.name}</h2>
//             <h2>Age : {user.age}</h2>
//         </div>
//     )
// } //For Passing Props Using Objects

// function PropsComponent({college}) {
//     return(
//         <div>
//             <h1>{college[0]}</h1>
//             <h1></h1>
//         </div>
//     )
// } //For Passing Props Using Arrays

function PropsComponent({name}){
    return(
        <div>
            <h1>Student Name : {name}</h1>
        </div>
    )
}

export default PropsComponent;