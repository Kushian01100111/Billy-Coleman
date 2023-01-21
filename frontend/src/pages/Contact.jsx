import { useState } from "react"
import { motion as m } from "framer-motion"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { useFormik } from "formik"
import * as Yup from "yup"
import {PhoneCallback,Email, LocationOn } from "@mui/icons-material"
import swal from "sweetalert"
import { useOutletContext } from "react-router-dom"


const Contact = () => {
  const {activeNav} = useOutletContext()
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
      email: Yup.string()
      .email("Invalid email address")
      .required("The email is required"),
      message: Yup.string()
      .min(20, "Last name must be 5 charracter or more")
      .required("The message is required")
    }),


    onSubmit: async (values)=>{
      values.phoneNumber = value
      const response =  await fetch("/api/form",{
          method: "POST",
          headers: {
          'Content-type': 'application/json',
        },
          body: JSON.stringify(values),
          credentials: "include"
      })
      const json = await response.json();

      if(json){
        console.log("form submitted");
        swal({
          title: "Message sent!",
          text: "Your message has been sent, wait shortly for us to respond to it!",
          icon: "success",
      })
      }else{
        console.log("Error")
      }
      }
    }
  );

  return (
  <m.div 
    className={`video ${activeNav ? "opacacy": ""}`}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.75, ease:"easeOut"}}>
      <main>
        <h3>Contact</h3>
          <form 
            id="contac" 
            className="contact" 
            onSubmit={formik.handleSubmit}>
            <div className="parent">
                <div className="div2">
                  <label htmlFor="name"
                  className={`${formik.touched.name &&formik.errors.name 
                  ? "error"
                  : ""}`}>
                  {formik.touched.name && formik.errors.name 
                  ? formik.errors.name
                  : "First Name"}</label>
                    <input type="text" 
                    placeholder=""
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="div3">
                  <label htmlFor="lastName"
                  className={`${formik.touched.lastName &&formik.errors.lastName 
                  ? "error"
                  : ""}`}>
                  {formik.touched.lastName && formik.errors.lastName 
                  ? formik.errors.lastName
                  : "Last Name"}</label>
                    <input type="text" 
                    placeholder=""
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    />
                </div>
                <div className="div4">
                  <label htmlFor="email"
                  className={`${formik.touched.email &&formik.errors.email 
                  ? "error"
                  : ""}`}>
                  {formik.touched.email && formik.errors.email 
                  ? formik.errors.email
                  : "Email"}</label>
                    <input type="email" 
                    placeholder=""
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                </div>
                <div className="div5">
                  <label htmlFor="phoneNumber">Phone Number</label>
                    <PhoneInput
                      placeholder="Phone Number"
                      value={value}
                      onChange={setValue}
                      id="phoneNumber"
                    />
                </div>
                <div className="div6">
                <label htmlFor="message"
                className={
                `${formik.touched.message && formik.errors.message 
                ? "error"
                : ""}`}>
                {formik.touched.message && formik.errors.message 
                ? formik.errors.message
                : "Message"}</label>
                  <textarea 
                  name="" 
                  id="message" 
                  value={formik.values.message}
                  onChange={formik.handleChange}>
                  </textarea>
                </div>
              <div className="div7">
                <div className="div9">
                  <h3>Contact information</h3>
                </div>
                <div className="div10">
                  <div>
                    <PhoneCallback sx={{ fontSize: "2.2rem"}}/>
                    <span>+1012 3456 789</span>
                  </div>
                  <div>
                    <Email sx={{fontSize: "2.2rem"}}/> 
                    <span>demo@gmail.com</span>
                  </div>
                  <div>
                    <LocationOn sx={{fontSize: "2.2rem"}}/>
                    <span>Maimi, Florida</span>
                  </div>
                </div>
              </div>
              <div className="div8">
                <input 
                type="submit" 
                value="Send message" 
                form="contac"
                id="submit"
                />
              </div>
            </div>
          </form>
      </main>
  </m.div>
  )
}

export default Contact
