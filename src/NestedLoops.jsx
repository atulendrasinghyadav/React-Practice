function NestedLoops(){
    const data = [
        {
            id: 1,
            name: "John",
            hobbies: ["Reading", "Swimming", "Cooking"]
        },
        {
            id: 2,
            name: "Jane",
            hobbies: ["Dancing", "Traveling", "Painting"]
        },
        {
            id: 3,
            name: "Doe",
            hobbies: ["Gaming", "Hiking", "Photography"]
        }
    ];

    return(
        <div>
            <h1>NestedLoops in React</h1>
            {data.map((person) => (
                <div key={person.id}>
                    <h2>{person.name}</h2>
                    <ul>
                        {person.hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default NestedLoops;