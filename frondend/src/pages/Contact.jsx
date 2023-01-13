import { useState } from "react"
import { motion as m } from "framer-motion"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { useFormik } from "formik"
import * as Yup from "yup"

const Contact = () => {
  const [value, setValue] = useState()
  const formik =  useFormik({
    initialValues:{
      name: "",
      lastName: "",
      phoneNumber: "",
      email:"",
      message: ""
    },

    validationSchema: Yup.object({
      name: Yup.string()
      .max(20, "Name must be 20 charracter or less")
      .required("Name is required"),
      lastName: Yup.string()
      .max(20, "Last name must be 20 charracter or less")
      .required("Last name is required"),
      phoneNumber: Yup.string()
      .max(20, "Last name must be 20 charracter or less")
      .required("Last name is required"),
      email: Yup.string()
      .email("Invalid email address")
      .required("The email is required"),
      message: Yup.string()
      .min(20, "Last name must be 5 charracter or more")
      .required("The message is required")
    }),


    onSubmit: (values)=>{
      values.phoneNumber = value
      console.log("form submitted");
      console.log(values);
    }
  });

  return (
  <m.div className="video">
      <main>
        <h2>Contact</h2>
          <form 
            id="contac" 
            className="contact" 
            onSubmit={formik.handleSubmit}>
            <label htmlFor="name">First Name</label>
              <input type="text" 
              placeholder=""
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              />
            <label htmlFor="lastName">Last Name</label>
              <input type="text" 
              placeholder=""
              id="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              />
            <label htmlFor="email">Email</label>
              <input type="email" 
              placeholder=""
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              />
            <label htmlFor="phoneNumber">Phone Number</label>
              <PhoneInput
                placeholder="Phone Number"
                value={value}
                onChange={setValue}
                id="phoneNumber"
              />  
            <label htmlFor="message">Message</label>
              <textarea 
              name="" 
              id="message" 
              cols="30" 
              rows="10"
              value={formik.values.message}
              onChange={formik.handleChange}>
              </textarea>
            
          <div>
          
            <div>
              <h3>Contact information</h3>
            </div>
            <div>
              <div>
                <i></i>
                <span>+1012 3456 789</span>
              </div>
              <div>
                <i></i>
                <span>demo@gmail.com</span>
              </div>
              <div>
                <i></i>
                <span>Maimi, Florida</span>
              </div>
            </div>
          </div>
          </form>
      </main>
      <div>
      <input 
      type="submit" 
      value="Send message" 
      form="contac"/>
      </div>
  </m.div>
  )
}

export default Contact
