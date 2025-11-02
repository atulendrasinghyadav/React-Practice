//You can not default export more than 1 component from a single file
// function Login(){
//     return(
//         <div>
//             <h1>Login User</h1>
//         </div>
//     )
// }

// export default Login

//for multiple export from a single file
function Login(){
    return(
        <div>
            <h1>Login User</h1>
        </div>
    )
}

export function Profile(){
    return(
        <h3>This is a profile div</h3>
    )
}

export function Setting(){ //these are named export
    return(
        <h3>This is a setting div</h3>
    )
}

export const userKey = "123asd456fgh" //you can export variable also

export default Login