import '../EveryCent/EveryCent.css';
import Logo from '../EveryCent/image/Logo-large.png';
import MainCent from '../EveryCent/MainCent';
import FooterCent from './FooterCent';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactFullpage from '@fullpage/react-fullpage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';


export default function HeaderCent() {

    const main  = useRef(null);
    const menuBody = useRef();
    const menuIcon = useRef();

    const buttonHandler = (main) => {
        main.current.scrollIntoView({ behavior: "smooth" });
    }

    const showBurger = function() {
        if (menuBody) menuBody.current.classList.toggle('_active');
        else return false;

        if (menuIcon) menuIcon.current.classList.toggle('_active');
        else return false;
       
    }


    useEffect(() => {
        AOS.init({duration:2000})
    }, [])

    return(
        <>       
        <div className="section">
           <div className='container bg__text'>
                    <div className='bg'></div>
          
                        <div className='container-header'>

                            <nav>
                                <ul className='menu-header'>
                                    <li className='name-app'>Everycent</li>
                                </ul>

                                <ul className='menu-link'>
                                    <li><a href="/">Appstore</a></li>
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>

                            <div className='d24'></div>

                            <div className="menu-icon" ref={menuIcon} onClick={showBurger}>
                                <span></span>
                            </div>

                            <div className="menu-body" ref={menuBody}>
                                <ul className='menu-link__mb'>
                                    <li><a href="/">Appstore</a></li>
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>

                            <div className='block-logo'>
                                <div className='logo-header'>
                                    <img src={Logo} alt="logo" className='logo-header' width='70' height="70"/>
                                    <p className='name-app__header'>Everycent</p>
                                </div>
                            </div>

                            <div className='block-head' data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                                <h1>Easy way to <br />
                                calculate your <br />
                                incomes and taxes <br />
                                wherever you are</h1>

                            </div>

                            <a className='block-store' href="#" ></a>

                            <div className='block-par'>
                                <p data-aos="fade-up"
                                data-aos-delay="1000"
                                data-aos-offset="0">Ready to find out where taxes suit you best?</p>
                            </div>

                            <div className="block-arrow">
                                <button onClick={() => buttonHandler(main)}>
                                    <div className="id hv" data-aos="fade-zoom-in"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay="1200"
                                        data-aos-offset="0">
                                        <svg viewBox="0 0 10.375 17.031"><path d="M435.647,369.528a0.861,0.861,0,0,0,0-1.328l-7.578-7.578a0.942,0.942,0,0,0-1.328,0l-0.859.859a0.974,0.974,0,0,0-.293.664,0.838,0.838,0,0,0,.254.664l6.054,6.055-6.054,6.055a0.837,0.837,0,0,0-.254.664,0.976,0.976,0,0,0,.293.664l0.859,0.859a0.944,0.944,0,0,0,1.328,0Z" transform="translate(-425.594 -360.344)"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
            </div>
            
                <section id='main' ref={main}></section>
                <MainCent/>
                <FooterCent/>
        </div>  
        </>
    )
}