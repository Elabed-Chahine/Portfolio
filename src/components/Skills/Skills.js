import React from 'react'
import { useEffect, useState } from 'react'
import {
 
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './Skills.scss'
import Sphere from './Sphere/Sphere'
function Skills() {
  const [letterClass, setLetterClass] = useState('text-animate')
    const[show, setShow]= useState(true)
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                ' ',
                'a',
                'n',
                'd',
                ' ',
                't',
                'e',
                'c',
                'h',
                'n',
                'o',
                'l',
                'o',
                'g',
                'i',
                'e',
                's',
              ]}
              idx={10}
            />
          </h1>
          <p>
            Here's a small overview of all the skills and technologies that I
            have acquired during my whole web development journey so far,
            <br /> including freelance, academic skills and Internships.
          </p>
          <button
            onClick={() => {
              setShow(!show)
            }}
          >
            change sphere
          </button>
        </div>

        <div className="stage-cube-cont">
          <Sphere show={show} />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills