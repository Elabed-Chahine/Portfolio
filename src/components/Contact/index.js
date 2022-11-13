import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { toast } from 'react-toastify'
import axios from 'axios'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
 
  const setForm = (val,setSmth) => {
    setSmth(val);
    
  }

  const sendForm=()=>{
    
    axios
      .post(
        'https://getform.io/f/4a878d60-f6c2-4f0a-9c84-f85084488448',
        {
          message: message,
          Email: email,
          Subject: subject,
          Name: name,
        },
        { headers: { Accept: 'application/json' } }
      )
      .then((response) => toast.success('Message sent successfully'))
      .catch((error) => toast.error(error))
    
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in both work and internship opportunities -
            especially on ambitious or large projects. However, if you have any
            other requests or questions, don't hesitate to contact me using
            below form either.
          </p>
          <div className="contact-form">
            <form ref={form}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setForm(e.target.value, setName)}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setForm(e.target.value, setEmail)}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setForm(e.target.value, setSubject)}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setForm(e.target.value, setMessage)}
                    required
                  ></textarea>
                </li>
                <li>
                  <button  onSubmit={() =>sendForm()}className="flat-button" value="SEND"  >Submit</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Chahine Elabed,
          <br />
          Tunisia,
          <br />
          Gafsa <br />
          <br />
          <span>elabed.chahine@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[35.8245, 10.6346]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.8245, 10.6346]}>
              <Popup>
                Chahine lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
