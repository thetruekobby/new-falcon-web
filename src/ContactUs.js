import React, { useState } from "react"
import { IoLocationSharp } from "react-icons/io5"
import { HiOutlineMailOpen } from "react-icons/hi"
import { BsFillPinMapFill } from "react-icons/bs"
import { BsFillAlarmFill } from "react-icons/bs"
import { FaClock } from "react-icons/fa"
import { contactSchema } from "./util/FormValidations"

const ContactUs = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    description: "",
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const validation = contactSchema.validate(payload, {
      allowUnknown: true,
      abortEarly: false,
    })

    const errorList = {}

    validation?.error?.details.forEach((err) => {
      errorList[err.path[0]] = err.message.replaceAll('"', "")
    })

    setErrors(errorList)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validate()
    //send details after the validation
  }

  const formOnChange = (key, value) => {
    setPayload((prev) => {
      return { ...prev, [key]: value }
    })
  }

  return (
    <section id="contact" className="pt-7 container mx-auto">
      <h1 className="section-title mb-10 fade-in">Contact Us</h1>

      {/* <p className="text-center my-5 text-[var(--clr-text-secondary)] text-lg">
        Meet us at a Cyberteq office near you or reach us electronically. Our experts will help you to choose the proper solution for your
        organization and answer all questions related to Cybersecurity, Digital Transformation & Telecommunication.
      </p> */}
      <div className="flex flex-col md:flex-row gap-4 pb-7">
        <div className="contact-card fade-in">
          <div className="contact-card-header">
            <BsFillPinMapFill className="text-2xl text-black" />
            <h2 className=""> Office Location</h2>
          </div>
          <p className="text-[var(--clr-text-secondary)]">You can reach us at the following address:</p>
          <p className="text-[var(--clr-text-secondary)] invisible">You can reach us at the following address:</p>
          <p className="">BTFalcon Technologies Ltd, BJ Global Home, E.D Sowah Avenue, East Legon, Accra, Ghana</p>
        </div>
        <div className="contact-card fade-in">
          <div className="contact-card-header">
            <HiOutlineMailOpen className="text-2xl text-black" />
            <h2> Email Address</h2>
          </div>
          <p className="text-[var(--clr-text-secondary)]">Send us your questions by email and we will reply as soon as possible:</p>
          <p>info@falcontechnologies.com.gh</p>
        </div>
        <div className="contact-card fade-in">
          <div className="contact-card-header">
            <BsFillAlarmFill className=" text-2xl text-black " />
            <h2> Working Hours</h2>
          </div>
          <p className="text-[var(--clr-text-secondary)]">We are doing our best to secure our customers. Working hours:</p>
          <p>Mon – Fri: 8 AM – 5 PM Sat – Sun: Closed.</p>
        </div>
      </div>
      <div className="pt-5 pb-10 px-10 bg-gray-100">
        <h3 className="text-2xl font-bold mb-5 mt-7">Get In Touch</h3>
        {/* <p className=" text-lg text-[var(--clr-text-secondary)] font-medium m-5 text-center">
          Thank you for your interest in Falcon Technologies. Please provide the following information about your business needs. This information
          will enable us to route your request to the appropriate person. You should receive a response within two days.
        </p> */}
        <div className="flex flex-col md:flex-row gap-8 ">
          <form action="" onSubmit={handleSubmit} noValidate className="flex-1 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="form-label">
                your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
                placeholder="Enter your name"
                value={payload.name}
                onChange={(e) => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors?.name}</div>
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                your email address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="form-input"
                value={payload.email}
                onChange={(e) => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors?.email}</div>
            </div>
            <div>
              <label htmlFor="subject" className="form-label">
                subject
              </label>
              <input
                type="text"
                className="form-input"
                name="subject"
                placeholder="Enter a subject"
                id="subject"
                value={payload.subject}
                onChange={(e) => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors?.subject}</div>
            </div>
            <div>
              <label htmlFor="number" className="form-label">
                your phone number
              </label>
              <input
                type="text"
                id="number"
                className="form-input"
                placeholder="Enter your phone number"
                name="mobile"
                value={payload.mobile}
                onChange={(e) => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors?.mobile}</div>
            </div>
            <div className="col-span-2">
              <label htmlFor="desc" className="form-label">
                how can we help you
              </label>
              <textarea
                name="description"
                id="desc"
                className="w-full border outline-none p-3 rounded mt-3"
                placeholder="Type your message here"
                value={payload.description}
                onChange={(e) => {
                  formOnChange(e.target.name, e.target.value)
                }}
              />
              <div className="error">{errors?.description}</div>
            </div>
            <input type="submit" value="Send Message" className=" cursor-pointer col-span-2 btn-primary" onClick={validate} />
          </form>
          <div className="md:flex-1 bg-slate-200 overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.406102980161!2d-0.1524586262364234!3d5.654248432656459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d3bc50abbc5%3A0xf7b140eb5d67982a!2sBTFalcon%20Technologies%20LTD!5e0!3m2!1sen!2sgh!4v1699473152219!5m2!1sen!2sgh"
              // width="600"
              // height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              id="map"
              className="w-full h-full"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
