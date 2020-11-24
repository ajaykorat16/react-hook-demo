import React, {useState} from "react";

const Form = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(name, gender)
  }
   
  return (
    <>
        <h1>Form</h1>
        <form className="custom_form" onSubmit={submitHandler}>
        <input type="text" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
        <select name="gender" onChange={(e) => setGender(e.target.value)}>
        <option value="">Gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
        </select>
        <input type="submit" />
        </form>
    </>
  );
}

export default Form