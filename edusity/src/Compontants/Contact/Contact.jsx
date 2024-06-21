import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c83d58a8-04ed-4f6c-9c66-4cf55ed8570b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (  
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui blanditiis pariatur, culpa consequuntur facere, est animi 
                obcaecati dolor odio minima atque? Quibusdam placeat quam neque blanditiis, molestias animi deserunt debitis.obcaecati dolor odio minima atque? Quibusdam placeat quam neque blanditiis, molestias animi deserunt debitis.
                obcaecati dolor odio minima atque? Quibusdam placeat quam neque blanditiis, molestias animi deserunt debitis.</p>
                <ul>
                    <li> <img src={mail_icon} alt="" /> Contact@GeackStack.dev</li>
                    <li><img src={phone_icon} alt="" /> 91+ 21545856421</li>
                    <li> <img src={location_icon} alt="" /> Contact@GeackStack.dev hakd kjf kdjfjf slk askdjfkjf sdkjfdsfj kljf  jfkjal fk <br/>jfakadjf kdjfaskldf sjladlfj dskjf kasdjf kkjdsf e</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter you name' required></input>
                <lable>Phone Number</lable>
                <input type='tel' name='phone' placeholder='Enter you mobile number'required></input>
                <label>Write you message here</label>
                <textarea name='message' row="7" placeholder='Enter you message' required></textarea>
                <button type='submit' className='btn dark-btn'>submit now <img src={white_arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact