import React from 'react'
import { toast } from 'react-toastify'
import './Modal.css'
const Modal = ({ setShowModal, img,video,responsibilities,accomplishments,used,role }) => {
  
  return (
    <div
      onClick={() => {
        setShowModal(false)
      }}
      className="overlay"
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className="modalContainer"
      >
        <img src={img} alt="/" />
        <div className="modalRight">
          <p
            className="closeBtn"
            onClick={() => {
              setShowModal(false)
            }}
          >
            X
          </p>
          <div className="contents">
            <h1>{role}</h1>

            {(video === 'null' && (
              <h3 className="text-blue-400 font-semibold text-xl">
                Video presentation is coming soon..
              </h3>
            )) || (
              <video className="video" controls poster="">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h2>Responsibilities:</h2>
            <p>{responsibilities}</p>
            <h2>Accomplishments:</h2>
            <p>{accomplishments}</p>
            <h2>Used:</h2>
            <p>
              {used.map((element) => {
                return (
                  <div className="used">
                    <button>
                      {' '}
                      <span>{element}</span>
                    </button>
                  </div>
                )
              })}
            </p>
          </div>
          <div className="btnContainer">
            <button
              className="btnPrimary"
              onClick={() => {
                setShowModal(false)

                toast('🤩🥳 I am happy that you like it !')
              }}
            >
              <span className="bold">Oh!</span> I am impressed
            </button>
            <button
              className="btnOutline"
              onClick={() => {
                setShowModal(false)

                toast('Come back in two months and you will be😎')
              }}
            >
              <span className="bold">NO</span>, not vey impressed.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
