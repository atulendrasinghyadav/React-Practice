import {useState} from "react"
function RadioButton(){
    const[gender,setGender] = useState("none");

    const [country,setCountry] = useState("none");
    return(
        <div>
            <h1>RadioButton and DropDown Component</h1>
            <h2>Select Gender</h2>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} value={"Male"} name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" onChange={(event)=>setGender(event.target.value)} value={"Female"} name="gender" id="female" />
            <label htmlFor="female">Female</label>
            <br />
            <h3>Selected Gender: {gender}</h3>
            <br />
            <br/>
            {/* Dropdown */}

            <h2>Select Your Country</h2>
            <select name="country" id="country" onChange={(event)=>setCountry(event.target.value)} defaultValue={"none"}>
                <option value="others">Others</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="russia">Russia</option>
                <option value="ukrain">Ukrain</option>
            </select>
            <h3>Selected Country: {country}</h3>


        </div>
    )
}

export default RadioButton;