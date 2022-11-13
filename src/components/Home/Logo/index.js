import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'
import 'animate.css'

const Logo = () => {

  

  return (
    <div className="logo-container animate__animated  animate__zoomInDown animate__delay-2s">
      <img
        className="solid-logo"
        src={LogoS}
        alt="ReactJS,  Developer"
      />
    </div>
  )
}

export default Logo
