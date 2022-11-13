import React, {  } from 'react'
import { Cloud } from 'react-icon-cloud'

import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import javascript from '../../../assets/javascript.png'
import reactImage from '../../../assets/react.png'
import laravel from '../../../assets/laravel.png'
import rest from '../../../assets/rest.png'
import github from '../../../assets/github.png'
import docker from '../../../assets/docker.png'
import django from '../../../assets/django.png'
import tailwind from '../../../assets/tailwind.png'
import node from '../../../assets/node.png'
import python from '../../../assets/python.png'
import redux from '../../../assets/redux.png'
import mysql from '../../../assets/mysql.png'
import mongo from '../../../assets/mongo.png'
import web from '../../../assets/dev.png'
import devops from '../../../assets/devops.png'
import git from '../../../assets/git.png'
import asp from '../../../assets/asp.png'
import java from '../../../assets/java.png'
import php from '../../../assets/php.png'
import c from '../../../assets/c.png'
import des from '../../../assets/des.png'
import db from '../../../assets/db.png'
import boot from '../../../assets/boot.png'
import gitlab from '../../../assets/gitlab.png'
import press from '../../../assets/press.png'
import json from '../../../assets/json.png'
import jup from '../../../assets/juppng.png'
import tensorflow from '../../../assets/tensorflow.png'
import cisco from '../../../assets/cisco.png'
import word from '../../../assets/word.png'
import office from '../../../assets/office.png'
import illus from '../../../assets/illus.png'
import mat from '../../../assets/mat.png'
import symphony from '../../../assets/symphony.png'
import vagrant from '../../../assets/Vagrant.png'
import sonar from '../../../assets/sonar.png'
import cloud from '../../../assets/cloud.png'
import colab from '../../../assets/colab.png'
import photo from '../../../assets/photo1.jpg'



function Sphere({show}) {

const techs = [
  {
    id: 1,
    title: 'HTML',
    img: html,
  },
  {
    id: 2,
    title: 'CSS',
    img: css,
  },
  {
    id: 3,
    title: 'JavaScript',
    img: javascript,
  },
  {
    id: 4,
    title: 'React',
    img: reactImage,
  },
  {
    id: 5,
    title: 'Tailwind',
    img: tailwind,
  },
  {
    id: 6,
    title: 'Laravel',
    img: laravel,
  },
  {
    id: 7,
    title: 'Rest APIs',
    img: rest,
  },
  {
    id: 8,
    title: 'GitHub',
    img: github,
  },
  {
    id: 9,
    title: 'Docker',
    img: docker,
  },
  {
    id: 10,
    title: 'Django',
    img: django,
  },
  {
    id: 11,
    title: 'Node.js',
    img: node,
  },
  {
    id: 12,
    title: 'Python',
    img: python,
  },
  {
    id: 13,
    title: 'Redux',
    img: redux,
  },
  {
    id: 15,
    title: 'MySQL',
    img: mysql,
  },
  {
    id: 16,
    title: 'MongoDB',
    img: mongo,
  },
  {
    id: 17,
    title: 'Software development',
    img: web,
  },
  {
    id: 18,
    title: '.net',
    img: asp,
  },
  {
    id: 19,
    title: '.DevOps',
    img: devops,
  },
  {
    id: 20,
    title: 'Git',
    img: git,
  },
  {
    id: 21,
    title: 'JAVA',
    img: java,
  },
  {
    id: 22,
    title: 'PHP',
    img: php,
  },
  {
    id: 23,
    title: 'C/C#',
    img: c,
  },
  {
    id: 24,
    title: 'Leadership',
  },
  {
    id: 25,
    title: 'Design',
    img: des,
  },
  {
    id: 26,
    title: 'Database administration',
    img: db,
  },
  {
    id: 27,
    title: 'Bootstrap',
    img: boot,
  },
  {
    id: 28,
    title: 'Gitlab',
    img: gitlab,
  },
  {
    id: 29,
    title: 'WordPress',
    img: press,
  },
  {
    id: 30,
    title: 'Json',
    img: json,
  },
  {
    id: 31,
    title: 'Jupyter',
    img: jup,
  },
  {
    id: 32,
    title: 'TensorFlow',
    img: tensorflow,
  },
  {
    id: 33,
    title: 'Cisco ',
    img: cisco,
  },
  {
    id: 34,
    title: 'Word ',
    img: word,
  },
  {
    id: 35,
    title: 'Microsoft Office ',
    img: office,
  },
  {
    id: 36,
    title: 'Adobe Illustrator ',
    img: illus,
  },
  {
    id: 37,
    title: 'MatLab ',
    img: mat,
  },
  {
    id: 38,
    title: 'React Native',
    img: reactImage,
  },
  {
    id: 39,
    title: 'Symphony',
    img: symphony,
  },
  {
    id: 40,
    title: 'Vagrant',
    img: vagrant,
  },
  {
    id: 41,
    title: 'Sonar',
    img: sonar,
  },
  {
    id: 42,
    title: 'Sonar Cloud',
    img: cloud,
  },
  {
    id: 43,
    title: 'Colab',
    img: colab,
  },
  {
    id: 44,
    title: 'Chahine',
    img: photo,
  },
]
   
const renderIcons = (techs)=>{
    return techs.map((tech) => (
      <div>
        <div key={tech.id} className="stacks">
          <a className="" href="/portfolio">
            {tech.title}
            <img height="42" width="42" alt="html" src={tech.img} />
          </a>
          
        </div>
      </div>
    ))
}

  
const renderText= (techs) => (techs.map((tech) => (
    <div>
      <div key={tech.id} className="stacks">
        <a className="" href="/portfolio">
          {tech.title}
          
        </a>
        
      </div>
    </div>
  ))
)

  return (
    <Cloud>
      
      {show ? renderIcons(techs) : renderText(techs)}
      
    </Cloud>
  )
}

export default Sphere