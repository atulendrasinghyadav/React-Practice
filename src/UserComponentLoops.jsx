const UserComponentLoops = ({user}) => {
    return(
        <div>
            <h3>Name: {user.name}</h3>
            <h5>Email: {user.email}</h5>
            <h5>Age: {user.age}</h5>
        </div>
    )
}

export default UserComponentLoops;