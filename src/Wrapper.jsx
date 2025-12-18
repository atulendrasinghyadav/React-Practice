function Wrapper({children}){//styles and jsx in props
    return(
        <div style={{border: "2px solid red", padding: "10px"}}>
            {children}
            this is an experiment.
        </div>
    )
}

export default Wrapper;