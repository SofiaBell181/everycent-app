import 'bootstrap/dist/css/bootstrap.min.css';
import '../EveryCent/EveryCent.css';
import Logo from '../EveryCent/image/Logo-large.png';
import { useEffect } from 'react';
import appStore from '../EveryCent/image/appStore.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SliderEveryCent from './SliderEveryCent';

export default function FooterCent() {

    useEffect(() => {
        AOS.init({duration:2000, once: true})
    }, [])
    
    return (
        <>
        <div className="container-footer">
            <div className="container block-footer">
                <div className='footer-header'>
                    <h2  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">Find out how it works in Latvia</h2>
                </div>

                <div className="project-swiper"  >
                    <SliderEveryCent />
                </div>

                <div className='footer-link' data-aos="zoom-in-left" data-aos-duration="900">
                    <a href="#store" ><img src={appStore} alt="app Store"  /></a>
                    <a href="#main" className='link-mainPage'>Back to main page</a>
                </div>

                <div className='footer-logo'   data-aos="zoom-in-right" data-aos-duration="900">
                <img src={Logo} className="logo-footer" alt="logo" width='50' height="50"/>
                <p className='name-app__footer'>Everycent</p>
                <a className='created-link' href='https://frontend-dev-sofiabell.glitch.me/'>Created by Sophie</a>
                </div>
            </div>
        </div>
        </>
    )
}