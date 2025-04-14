import { useEffect, useState } from "react"
import DetailsDisplay from "./DetailsDisplay";

const fields = {
  name: {
    title: 'Name',
    requiredMsg: 'Name should not be empty!'
  },

  address: {
    title: 'Address',
    requiredMsg: 'Address should not be empty!'
  },

  phone: {
    title: 'Phone',
    requiredMsg: 'Phone should not be empty!'
  },

  college: {
    title: 'College',
    requiredMsg: 'College should not be empty!'
  }
}

function Form () {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    college: ""
  });
  const [submittedFormData, setSubmittedFormData] = useState(null);
  const [errors, setErrors] = useState({});
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  useEffect(() => {
    
  })

  const handleFormDataInsertion = (e) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]:value}))
    const tempErros = {}
    // console.log(Object.entries(fields))
    const index = Object.entries(fields).findIndex((itm) => itm[0]===name)
    Object.entries(fields).map(([key, value], idx) => {
      if(idx<index && !formData[key]?.trim()) {
        tempErros[key] = value['requiredMsg']
      }
    })
    setErrors(tempErros);
  }

  const handleBtnClick = () => {
    const tempErros = {}
    Object.entries(fields).map(([key, value]) => {
      if(!formData[key]?.trim()) {
        tempErros[key] = value['requiredMsg']
      }
    })
    setErrors(tempErros);
    if(Object.keys(tempErros).length == 0){
      setShowDetailsForm(true);
      setSubmittedFormData(formData);
      setFormData({
        name: "",
        address: "",
        phone: "",
        college: ""
      })
    }
    else setShowDetailsForm(false)
  }

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '8rem 1fr',
    gap: '30px',
    marginBottom: '16px'
  }

  const labelStyle = {
    textAlign: 'right',
    alignSelf: 'start'

  }

  const topContainer = {
    margin: "auto auto",
    padding: '20px'
  }

  const inputStyle = {
    height: "2rem",
    width: "15vw"
  }

  const errormsgStyle = {
    fontSize: "12px",
    color: "red"
  }

  const buttonStyle = {
    width: '6rem',
    height: '2rem',
    display: 'block',
    width: '6rem',
    height: '2rem',
    marginLeft: '10rem',
    border: '1px solid black'
  }

  return(
    <>
    <div style = {topContainer}>
      {Object.entries(fields).map(([key, value]) => (
        <div style = {containerStyle} key={key}>
          <label style = {labelStyle} htmlFor={key}>{value.title} : </label>
          <div>
            <input style = {inputStyle} type="text" id = {key} name = {key} value={formData[key]} onChange={handleFormDataInsertion}/>
            {errors[key] && <div style = {errormsgStyle}>{value.requiredMsg}</div>}
          </div>
        </div>
      ))}
      <button style = {buttonStyle} onClick={handleBtnClick}>Add/update</button>
    </div>
   {showDetailsForm && <DetailsDisplay {...submittedFormData} setFormData={setFormData}/>}
    </>
  )
}

export default Form;