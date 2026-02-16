function LoopsinJSX(){
    const userData = [
        {
            id: 1,
            name: "Anil",
            email: "test@email.com",
            age: 20
        },
        {   
            id: 2,
            name: "Sunil",
            email: "sunil@email.com",
            age: 25
        },
        {
            id: 3,
            name: "Suresh",
            email: "suresh@email.com",
            age: 30
        },
        {
            id: 4,
            name: "Ramesh",
            email: "ramesh@email.com",
            age: 35
        }
    ]
    return(
        <div>
            <h1>Loops in JSX</h1>

            <table border = "1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <h1>Dummy Data</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>test@email.com</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
   
export default LoopsinJSX;