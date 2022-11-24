import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import agency from '../../assets/Videos/agency/1.PNG'
import jenkins from '../../assets/Videos/jenkins.png'
import mern from '../../assets/Videos/mern/111.PNG'
import medical from '../../assets/Videos/Machine/Capture.PNG'
import reddit from '../../assets/Videos/studybud/Capture.PNG'
import uber from '../../assets/Videos/uber/6.jpg'
import books from '../../assets/Videos/Bookstore/Capture.PNG'
import trucks from '../../assets/Videos/trucks/Capture.PNG'
import reactWeather from '../../assets/images/reactWeather.jpg'
import vid1 from '../../assets/Videos/devops.mp4'
import vid2 from '../../assets/Videos/agencyvi.mp4'
import vid3 from '../../assets/Videos/MachineLearning.mp4'
import vid4 from '../../assets/Videos/studybuud.mp4'
import vid5 from '../../assets/Videos/Uber.mp4'
import vid6 from '../../assets/Videos/Bookstorevid.mp4'
import vid7 from '../../assets/Videos/Trucks.mp4'
import Modal from "./Modal/Modal";
import 'react-toastify/dist/ReactToastify.css'
import './Modal/Modal.css'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
          const [showModal, setShowModal] = useState(false)

      const [Id, setId] = useState(null)


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

     const portfolio = [
       {
         id: 1,
         img: jenkins,
         role: 'DevOps Engineer',
         video: vid1,
         responsibilities:
           'Designed and Developed an attractive and responsive goal scroing and management website',
         Accomplishments:
           'Prepared the development infrastructure, Managed the continuous Integration with Jenkins. Automated the SAST scan . Automated the Continuous deployment and added the monitoring functionality',
         used: ["Jenkins", "Docker", "SonarQube","Ansible", "Prometheus", "Grafana"],
         github: '',
       },
       {
         id: 2,
         img: agency,
         video: vid2,
         responsibilities:'Designed and maintained an attractive and responsive Digital Marketing agency website.',
         Accomplishments:
           'Included a Calendly link to book meetings, Implemented a video editor for visitors to watch a presentation. Created a carousel that automatically shifts infinitely, Created a section to describe every project and a banner that includes complicatend css animations.',
         role: 'Front End Developer',
         used: ["ReactJS","CSS", "Redux"],
         github: 'https://github.com/Elabed-Chahine/SMMA_Website.git',
       },
       {
         id: 3,
         img: mern,
         video: 'null',
         responsibilities:
           'Designed and Developed an attractive and responsive goal scroing and management website',
         Accomplishments:
           'Designed and created a simple interface, Included an admin dashboard to add, delete and edit goals that users scored and saved, Implemented a nosql databse to store the goals. Implemented redux to store the authentified user and to store the data sent by the backend. Used localstorage to hold the authentification token which expires in a fixed timeframe. Used redux to store the current user and to recieve the requests sent by the backend, as well as dispatching form. Data to the backend.',
         role: 'Full Stack Web Developer',
         used: ["ReactJS", "Node.js","CSS", "Redux", "Express", "MongoDB"],
       },
       {
         id: 4,
         img: medical,
         video: vid3,
         responsibilities:
           'Developed a Medical website with django that predicts sicknesses from symptoms you provide using a machine learning algorithm',
         Accomplishments:
           'implemented a Machine Learning algorithm trained with Jupyter written in Python, Implemented the Authentication and registration functionality. Designed an attractive UI/UX design',
         role: 'Machine Learning Engineer',
         used: ["Dango", "Bootstrap", "Python", "Jupyter", "sqlite"],
         github: 'https://github.com/Elabed-Chahine/MachineLearning.git',
       },
       {
         id: 5,
         img: reddit,
         video: vid4,
         role: 'Backend Software Engineer',
         responsibilities:
           'Designed and Developed a Reddit like website with django',
         Accomplishments:
           'implemented the functionality of users having the ability to make a Chat forum with all other users. Added the Check recent activities shown on the home page with authentication. Implemented the funtionality to add a subject to teach. Created the ability to Delete the subjects they added. Gave guests the ability to Filter courses. Added the funtionality for users to enroll in your courses',
         used: ["Django", "Sqlite"],
         github: 'https://github.com/Elabed-Chahine/Studybud.git',
       },
       {
         id: 6,
         img: uber,
         video: vid5,
         role: 'Mobile Developer',
         responsibilities: 'Designed and Developed an Uber Clone',
         Accomplishments:
           'Designed and created o UI/UX identical to Uber. Implemented the Authentication. Implemented Google APIs to calculate distance and find shortest possible ways. Implemented a function that calcules the price based on distance and rush hour. Added a favorite place to Immediately pin as destination. Added an extra functionality to add friends’ locations to Immediately pick as destination',
         used: ["React Native", "Firebase", "CSS", "Tailwind CSS"],
         github: 'https://github.com/Elabed-Chahine/UberClone.git',
       },
       {
         id: 7,
         img: books,
         video: vid6,
         role: 'Backend Developer',
         responsibilities:
           'Designed and Developed an E-Commerce website for books',
         Accomplishments:
           'Designed and created a responsive UI/UX, Implemented Authentication. Created an attractive Admin panel for managing books, sellers and. Buyers he can ban buyers. Added the ability to leave comments on books. Implemented the functionality to Add books. Created the Add to cart and Checkout',
         used: ["Laravel", "MYSQL", "Blade components"],
         github: 'https://github.com/Elabed-Chahine/BookStore.git',
       },
       {
         id: 8,
         img: reactWeather,
         video: 'null',
         role: 'Backend Engineer,',
         responsibilities:
           'Designed and Developed two Blog websites that communicate and send blogs between them using RabbitMQ',
         Accomplishments:
           'Designed and created of a responsive UI/UXImplemented the ability for users to Send blogs Implemented the Adding and deleting blogs as well as editing them. Implemented the ability to Consume blogs sent by another website. Implemented the ability to store recieved blogs to own database automatically after consuming a new one.. Added the ability to Show all the blogs in the home page',
         used: ["Nodejs", "RabbitMQ", "Express", "CSS"],
         github: '',
       },
       {
         id: 9,
         img: trucks,
         video: vid7,
         role: 'Full stack developer intern',
         responsibilities:
           'design and development of a website for truck drivers and shipment owners as well as maintaining it.',
         Accomplishments:
           'Created the functionality to upload a shipment by a user for truck drivers to choose which chipment to drive to. The specified destination from scratch. Added the functionality for the drivers to claim the shipment to drive, the owner will be notified. Designed the Costumer interface to visit the driver profile and their score to contact them. Connected the database to store all data and to add delete and create for normal users. Created an admin dashboard to manage users, shipments and drivers',
         used: ["Laravel", "MySQL", "Blade_Components"],
         github: 'https://github.com/Elabed-Chahine/Trucks_Stream.git',
       },
     ]

   
    

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port) => {
                        return (
                          <div className="image-box" key={port.id}>
                            <img
                              src={port.img}
                              className="portfolio-image"
                              alt="portfolio"
                            />
                            <div className="content">
                              <p className="title">{port.role}</p>
                              <h4 className="description">
                                {port.responsibilities}
                              </h4>
                              
                              {port.github !== '' && (
                                <button
                                  className="btn"
                                  onClick={() => window.open(port.github)}
                                >
                                  Code
                                </button>
                              )}

                              <button
                                className="btn"
                                onClick={() => {
                                  setShowModal(true)
                                  setId(port.id)
                                }}
                              >
                                Demo
                              </button>
                            </div>

                            {showModal && port.id === Id ? (
                              <><Modal setShowModal={setShowModal} responsibilities={port.responsibilities} role={port.role} accomplishments={port.Accomplishments} img={port.img} video={port.video} used={port.used}  /></>
                            ) : null}
                          </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;