import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['h','a', 'h', 'i', 'n', 'e']
  const jobArray = [
    'A',
    'n',
    'd',
    ' ',
    'I',
    ' ',
    'a',
    'm',
    ' ',
    'a',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <div className="flex -mb-20">
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="Full stack Developer, Chahine" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={11}
              />
            </div>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            Full Stack Developer / DevOps enthusiast / Machine learning intern/
            Digital Marketer/{' '}
          </h2>
          <Link to="/contact" className="flat-button ">
            CONTACT
            <span className="me"> ME</span>
          </Link>
          <a href="../../assets/resume.pdf" className=" resume " download={true}>
            Download
            <span className="me">resume</span>
          </a>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
