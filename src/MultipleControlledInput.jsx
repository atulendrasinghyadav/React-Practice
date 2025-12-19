import {useState} from 'react';
function MultipleControlledInput(){

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[pass,setPass] = useState("");

    return(
        <div>
            <h1>This is Multiple Controlled Input Component</h1>

            <form action="" method="get">
                <input type="text" value = {name} onChange={(event) => setName(event.target.value)} placeholder="Enter Your Name"/>
                <br /><br />
                <input type="email" value = {email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Your Email"/>
                <br /><br />
                <input type="password" value = {pass} onChange={(event) => setPass(event.target.value)} placeholder="Enter Your Password"/>
                <br /><br />
                <button type="submit">Submit</button>
                <button onClick ={()=>{setName('');setEmail('');setPass('')}}>Clear</button>

                <h2>Name : {name}</h2>
                <h2>Email : {email}</h2>
                <h2>Password : {pass}</h2>
            </form>
        </div>
    )
}

export default MultipleControlledInput;