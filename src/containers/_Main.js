import React from 'react'
import s from './_Main.module.css'
import { FaGithub, FaDribbble, FaLinkedin, FaInstagram } from "react-icons/fa";
import Header from './Header'
import Carousel from 'react-bootstrap/Carousel'

const _Main = ({ }) => {
    return (
        <div className={s.container}>

            {/** HOME */}

            <div className={s.home} id="home">
                {/** Background Text */}
                <span className={s.backgroundText}>
                    HELLO THERE
                </span>
                {/** Background Text */}
                <Header />
                <span className={s.homeTitle}>
                    Hello I'm a
                </span>
                <span className={s.homeTitle}>
                    Full Stack Developer
                </span>

                <Br size={50} />

                {/** Call to Action Button */}
                <div className={s.ctaButtons}>
                    <a href="#aboutMe" className={s.btnAboutMe}>ABOUT ME</a>
                    <Hr size={36} />
                    <a href="" className={s.btnMyWorks}>MY WORKS</a>
                </div>
            </div>

            {/** ABOUT ME */}

            <div className={s.aboutMe} id="aboutMe">
                {/** Background Text */}
                <span className={s.backgroundText}>
                    ABOUT ME
                </span>
                {/** Background Text */}
                <div className={s.aboutMeContent}>
                    <span className={s.aboutMeIntroduction}>
                        Hi, my name is Reza Iqronoor.
                        <br />
                        A teenager with a hobby of programming and ui design. Currently, I'm a full-stack software developer focusing mainly on mobile and website.
                        <br />
                        <br />
                        I choose React Native as my framework for building apps and Node.js for the backend.
                        <br />
                        <br />
                        Striving for more experience, I tried freelancing now and then, doing projects that i had never done before is what makes me going, I love new experiences
                    </span>
                    <div className={s.aboutMeLogoContainer}>
                        <a href="https://github.com/RezaIqronoor" className={s.btnIcon}>
                            <FaGithub size={56} color={'#333333'} />
                            <span className={s.iconName}>Github</span>
                        </a>
                        <a href="https://dribbble.com/rezaiqronoor" className={s.btnIcon}>
                            <FaDribbble size={56} color={'#333333'} />
                            <span className={s.iconName}>Dribbble</span>
                        </a>
                        <a href="https://www.linkedin.com/in/reza-iqronoor-104b491a6/" className={s.btnIcon}>
                            <FaLinkedin size={56} color={'#333333'} />
                            <span className={s.iconName}>Linkedin</span>
                        </a>
                        <a href="https://www.instagram.com/reza.iqronoor/" className={s.btnIcon}>
                            <FaInstagram size={56} color={'#333333'} />
                            <span className={s.iconName}>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>

            {/** MY WORKS */}

            <div className={s.myWorks} id="myWorks">
                {/** Background Text */}
                <span className={s.backgroundText}>
                    MY WORKS
                </span>
                {/** Background Text */}
                <div className={s.myWorksContent}>
                    {/**
                     * Bootstrap Carousel
                     */}
                    <Carousel className={s.carousel}>
                        <Carousel.Item className={s.carousel}>
                            <img
                                className="d-block w-100"
                                src="https://images8.alphacoders.com/840/840677.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={s.carousel}>
                            <img
                                className="d-block w-100"
                                src="https://images8.alphacoders.com/840/840677.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

const Br = ({ size }) => {
    return (
        <div style={{ height: size }} />
    )
}

const Hr = ({ size }) => {
    return (
        <div style={{ width: size }} />
    )
}

export default _Main