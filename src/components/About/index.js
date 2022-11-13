import { useEffect, useState } from 'react'
import {
  faDocker,
  faJenkins,
  faGitAlt,
  
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious web developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            Having a strong academic background and the ability to think through
            a problem coupled with the confidence to make ideas heard. I am
            comfortable working alongside an expert team. I have balanced a
            rigorous course load and a number of extracurricular activities that
            have allowed me to enhance my skills relevant to any role be it:
            Full-stack development or DevOps engineering with various modern
            technologies.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#e5fa24" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDocker} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJenkins} color="#b6b904" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <div className="stage-cube-cont1">
        <div className="cubespinner1">
          <div className="face1">
            <FontAwesomeIcon icon={faPython} color="#e5fa24" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faDocker} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJenkins} color="#b6b904" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
