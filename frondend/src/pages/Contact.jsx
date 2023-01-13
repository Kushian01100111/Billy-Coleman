import { useState } from "react"
import { motion as m } from "framer-motion"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

const Contact = () => {
  const [value, setValue] = useState()
  const [name, setName] = useState("");
  const [lastName, setLastName] = ("");
  return (
  <m.div className="video">
      <main>
        <h2>Contact</h2>
          <form action="" className="contact">
              <input type="text" />
              <input type="text" />
              <input type="email" />
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
          </form>
      </main>
  </m.div>
  )
}

export default Contact
