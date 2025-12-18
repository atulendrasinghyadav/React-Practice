function Wrapper({children, color = "green"}){//styles and jsx in props
    return(
        <div style={{color : color, border: "2px solid red", padding: "10px"}}>
            {children}
            this is an experiment.
        </div>
    )
}

export default Wrapper;