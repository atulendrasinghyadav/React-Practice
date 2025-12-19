import {useState} from "react"
function HandleCheckBox(){
    const[skill,setSkill] = useState([])
    const handleSkills=(event)=>{
        console.log(event.target.name, event.target.checked)
        if(event.target.checked){
            setSkill([...skill , event.target.name])
        }
        else{
            setSkill([...skill.filter((e)=> e !== event.target.name)])
        }
    }
    return(
        <div>
            <h1>Handle Checkbox Component</h1>
            <h2>Select Your Skills</h2>
            <input onChange={handleSkills} type="checkbox" id="html" name="html"/>
            <label htmlFor="html">HTML</label>
            <br />
            <input onChange={handleSkills} type="checkbox" id="php" name="php"/>
            <label htmlFor="php">PHP</label>
            <br />

            <h1>{skill.toString()}</h1>
        </div>
    )
}

export default HandleCheckBox;