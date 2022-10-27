import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <h3 className='footer__title'>&#169; Academlo 2022</h3>
        <ul className='footer__list'>
            <li className='footer_item'>
                <i className='bx bxl-instagram'></i>
            </li>
            <li className='footer_item'>
                <i className='bx bxl-linkedin' ></i>
            </li>
            <li className='footer_item'>
                <i className='bx bxl-youtube' ></i>
            </li>
        </ul>
    </footer>
  )
}

export default Footer