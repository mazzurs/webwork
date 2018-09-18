import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import StartLearning from '../Buttons/Begin/Begin'
import logo from '../../assets/images/logo.png'

const buttons = [
  {
    text: 'О проекте',
    cls: 'about',
    link: 'about'
  },
  {
    text: 'Курс',
    cls: 'Course',
    link: 'course'
  },
  {
    text: 'Отзывы',
    cls: 'Reviews',
    link: 'reviews'
  },
  {
    text: 'Контакты',
    cls: 'contact',
    link: 'contact'
  }
]

const date = new Date()

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <footer className='footer'>
        <div className='wrapper'>

          <div className='footer-items'>
            <div className='title'>
              © WEBWORK {date.getFullYear()}
              <p className='sub-title'>Школа онлайн-образования</p>
            </div>
            <div className='info'>
              <ul className='info-list'>
                <li>+3 (809) 832-49-811</li>
                <li>smazzurs@gmail.com</li>
              </ul>
            </div>
            <div className='socials'>
              <p>Мы в соцсетях</p>
              <div className='socials-container'>
                <a href='https://www.facebook.com/smazzur' target='_blank'>
                  <div className='facebook'/>
                </a>
                <a href='https://vk.com/sergmazur' target='_blank'>
                  <div className='vk'/>
                </a>
                <a href='https://www.instagram.com/mazur_serg/' target='_blank'>
                  <div className='insta'/>
                </a>
                <a href='https://t.me/mazur_s' target='_blank'>
                  <div className='telegram'/>
                </a>
              </div>
            </div>
          </div>

          <div className='footer-items navigation'>
            <div className='footer-item main'>
              <div className='sub-title'>Навигация</div>
              <div className='footer-main'>
                <ul>
                  <li><NavLink className='nav-link' to='/main/about'>О проекте</NavLink></li>
                  <li><NavLink className='nav-link' to='/main/course'>Курс</NavLink></li>
                  <li><NavLink className='nav-link' to='/main/reviews'>Отзывы</NavLink></li>
                  <li><NavLink className='nav-link' to='/main/contact'>Контакты</NavLink></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer