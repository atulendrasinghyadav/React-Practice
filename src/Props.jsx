import PropsComponent from "./PropsComponent";
import {useState} from 'react';

function Props(){
    // let userName = "Atul";
    // let userAge = 20;

    // let userObject ={
    //     name : "Atul",
    //     age : 20
    // }
    // let userObject2 = {
    //     name : "Rohit",
    //     age : 22
    // }

    // let collegeName = ['IIT' , 'NIT' , 'BIT']

    const [student , setStudent] = useState()
    return(
        <div>
            Props In react

            {/* <PropsComponent name="Atul" age={20} /> //Normal way of passing props */}
            {/* <PropsComponent name = {userName} age = {userAge}/> //Passing props with Variables */}

            {/* <PropsComponent user = {userObject} /> 
            <PropsComponent user = {userObject2} />  Passing Props Using Objects*/}

            {/* <PropsComponent college = {collegeName} />  */}

            {student ? <PropsComponent name = {student} /> : null }
            <button onClick={()=>setStudent("Rohit")}>Toggle Name</button>
        </div>
    )
}

export default Props;