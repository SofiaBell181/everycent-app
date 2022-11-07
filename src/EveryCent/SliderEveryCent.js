import 'bootstrap/dist/css/bootstrap.min.css';
import '../EveryCent/EveryCent.css';
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import React, { useEffect, useRef, useState } from "react";
import { IMaskInput } from 'react-imask';
import "swiper/css";
import "swiper/css/pagination";
import ProgressCircle from './ProgressCircle';
import ProgressCircleTwo from './ProgressCircleTwo';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function SliderEveryCent() {

    const [salaryEmployee, setSalaryEmployee] = useState();
    const [correctNumber, setCorrectNumber] = useState();
    const [message, setMessage] = useState('');
    const [calculation, setCalculation] = useState('');
    const [personalIncomeTax, setPersonalIncomeTax] = useState('');
    const [personalIncomeTaxNumber, setPersonalIncomeTaxNumber] = useState('');
    const [netYearIncome, setNetYearIncome] = useState('');
    const [interimResult, setInterimResult] = useState();
    const [netMounthlyIncome, setNetMounthlyIncome] = useState('');
    const [personalTotalTax, setPersonalTotalTax] = useState('');

    const [salaryEmployer, setSalaryEmployer] = useState();
    const [correctNumberTwo, setCorrectNumberTwo] = useState();
    const [messageTwo, setMessageTwo] = useState('');
    const [EmployerSocialTax, setEmployerSocialTax] = useState()
    const [employeeCosts, setEmployeeCosts] = useState('');
    

    const blockForm = useRef();
    const btnCalculate = useRef();
    const i1 = useRef(null);
    const parMessage = useRef();
    const iNetYearIncome = useRef();
    const form = useRef();

    const iEmpoloyerCost = useRef();
    const blockFormTwo = useRef();
    const btnCalculateTwo = useRef();
    const i2 = useRef();
    const form2 = useRef();


    const getSalary = () => {
        let iValue = i1.current.maskRef._unmaskedValue;
        setSalaryEmployee(iValue);    
        if(salaryEmployee === '' || i1.current.maskRef._unmaskedValue === '') {
            setPersonalIncomeTax('');
            setNetMounthlyIncome('');
            setNetYearIncome('');
            setCalculation('');
            setPersonalIncomeTaxNumber('');
        }
    }

    useEffect(() => {

        const validate = () => {
        (salaryEmployee <= 0) ? setCorrectNumber(false) : setCorrectNumber(true);
        }

        validate()
    }, [salaryEmployee])


    const showMessage = () => {
        if (correctNumber === false) {
          setMessage('Enter the correct annual income here');
          setPersonalIncomeTax('');
          setPersonalTotalTax('');
          setNetYearIncome('');

        }
        else {
          setMessage('');
          calculate();
          showForm();
        }
      }
    

    const fun1 = (e) => {
        e.preventDefault();
        showMessage();
    }


    const calculate = () => {
        let getSalary = Number(salaryEmployee);
        let calculation1 = (getSalary * 0.105);
        let calculation2 = getSalary - calculation1;
        setCalculation(calculation2);
    }

    
    useEffect(() => {
            const getPersonalTax = () => {
                if (calculation > 0 && calculation <= 20004) {
                    setPersonalIncomeTax("20%");
                    setPersonalIncomeTaxNumber(20);
                }

                else if (calculation > 20004 && calculation <= 78100) {
                    setPersonalIncomeTax("23%");
                    setPersonalIncomeTaxNumber(23);
                }

                else if (calculation > 78100) {
                    setPersonalIncomeTax("31%");
                    setPersonalIncomeTaxNumber(31);
                }

                else return false;
        }
        getPersonalTax();
    }, [calculation])

    useEffect(() => {
        const getNetYearIncom = () => {
            let calculation3 = calculation - calculation *(personalIncomeTaxNumber / 100);
            (personalIncomeTaxNumber === '') ? setInterimResult('') : setInterimResult(calculation3);;
            let resultIncom  = String(calculation3);
            (personalIncomeTaxNumber === '') ? setNetYearIncome('') : setNetYearIncome(resultIncom);       
        }

        getNetYearIncom()
    }, [personalIncomeTaxNumber, calculation])


    useEffect(() => {
        const getTottalTax = () => {
            let resTotalTax = Math.abs(((Number(netYearIncome) / Number(i1.current.maskRef._unmaskedValue)) - 1) *100);
            let resultTotalTax = resTotalTax.toFixed(2)
            if (i1.current.maskRef._unmaskedValue === '' || netYearIncome === '') setPersonalTotalTax('');
            else return setPersonalTotalTax(resultTotalTax)
        }

        getTottalTax()
    }, [netYearIncome])


    useEffect(() => {
        const getNetMounthlyIncome = () => {
            let yearIncom = interimResult;
            let MounthlyIncome = yearIncom / 12;
            let resMounthlyIncome = MounthlyIncome.toFixed(2)
            .toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            (netYearIncome === '') ? setNetMounthlyIncome('') : setNetMounthlyIncome(resMounthlyIncome); 
        }
        getNetMounthlyIncome();
    }, [interimResult, netYearIncome])


    const getSalaryTwo = () => {
        let iValue2 = i2.current.maskRef._unmaskedValue;
        setSalaryEmployer(iValue2);    

        if (salaryEmployer === '' || i2.current.maskRef._unmaskedValue === '') {
            setEmployeeCosts('');
            setEmployerSocialTax('');
        }
    }


    useEffect(() => {
        const validate2 = () => {
        (salaryEmployer <= 0) ? setCorrectNumberTwo(false) : setCorrectNumberTwo(true);
        }

        validate2()
    }, [salaryEmployer])


    const showMessageTwo = () => {
        if (correctNumberTwo === false) {
            setMessageTwo('Enter the correct annual income here');
            setEmployeeCosts('');
            setEmployerSocialTax('');

        }
        else {
            setMessageTwo('');
          calculateTwo();
          showFormTwo()
        }
      }

    const fun2 = (e) => {
        e.preventDefault();
        showMessageTwo();
    }

    const showForm = () => {
        gsap.to(blockForm.current, {
            opacity:1, y:60, duration:.7, ease: "power2"
        })
        gsap.to(btnCalculate.current, {
            opacity:0, duration:.7, ease: "power2"
        })
    }

    const showFormTwo = () => {
        gsap.to(blockFormTwo.current, {
            opacity:1, y:60, duration:.7, ease: "power2"
        })
        gsap.to(btnCalculateTwo.current, {
            opacity:0, duration:.7, ease: "power2"
        })

    }


    const calculateTwo = () => {
        let getSalary = Number(salaryEmployer);
        let getEmployeeCosts = (getSalary*0.2359) + getSalary;
        let resEmpoleeCosts = String(getEmployeeCosts);
        setEmployerSocialTax(23.59)
    
        setEmployeeCosts(resEmpoleeCosts);
    }

  
    const hideBox = () => {
        setSalaryEmployee();
        gsap.to(blockForm.current, {
            opacity:0, y:0, duration:.3, ease: "power2"
        });
        gsap.to(btnCalculate.current, {
            opacity:1, duration:.9, ease: "power2"
        });



        setSalaryEmployer();
        gsap.to(blockFormTwo.current, {
            opacity:0, y:0, duration:.3, ease: "power2"
        })
        gsap.to(btnCalculateTwo.current, {
            opacity:1, duration:.9, ease: "power2"
        })
    }



    useEffect(() => {
        AOS.init({duration:2000, once: true})
    }, [])



    return(
        <>
         <Swiper onSlideChange={hideBox} spaceBetween={30} speed={500} pagination={{clickable: true}}  modules={[Pagination]} className="mySwiper">
                    <SwiperSlide className='mySlide'>
                        <div className='form-calculate' ref={form}>
                            <div className='calculate-header'>
                                <p data-aos="fade-up" data-aos-delay="80" data-aos-easing="linear" data-aos-duration="700">Employee</p>
                            </div>

                            <form onSubmit={fun1}  className='calculation-block' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                                <div className='bg-i'>

                                    <IMaskInput className='i-salary' ref={i1} onAccept={getSalary}
                                    mask={Number} radix="." thousandsSeparator=' ' value={salaryEmployee} placeholder="Type annual € income here" required />

                                    <p ref={parMessage}>{message}</p>
                                </div>
                                
                                <div className='block-tax' ref={blockForm}>
                                    <div className='table-tax'>
                                        <p>Total income tax rate</p>
                                        <ProgressCircle personalTotalTax={personalTotalTax}/>
                                        <p>Individual Income Tax: {personalIncomeTax}</p>
                                        <p>Employer Social Security Contributions: 10.5%</p>
                                        <p>Your net monthly income: {netMounthlyIncome}</p>
                                        <p className='parIncome'>Your net year income</p>
                                    </div>
                                    <div className='bg-i2'>
                                        <IMaskInput className='i-yearIncome' ref={iNetYearIncome} value={netYearIncome}
                                        mask={Number} radix="." readOnly thousandsSeparator=' ' placeholder="" />
                                    </div>
                                </div>
                                
                               
                               <div className='bg-btn' ref={btnCalculate}><button type='submit' >Calculate</button></div>
                            </form>
                        </div>
                    </SwiperSlide>
                   
                    <SwiperSlide className='mySlide__2'>
                    <div className='form-calculate'  ref={form2}>
                            <div className='calculate-header'>
                                <p>Employer</p>
                            </div>

                            <form className='calculation-block' onSubmit={fun2} >
                                <div className='bg-i'>
                                    <IMaskInput className='i-salary' ref={i2} onAccept={getSalaryTwo} value={salaryEmployer}
                                    mask={Number} radix="." thousandsSeparator=' 'placeholder='Employee&#39;s estimated salary' required />
                                    <p ref={parMessage}>{messageTwo}</p>
                                </div>
                                
                                <div className='block-tax__2' ref={blockFormTwo}>
                                    <div className="table-tax__2">
                                        <ProgressCircleTwo EmployerSocialTax={EmployerSocialTax}/>
                                        <p>Employer Social Security Contributions: {EmployerSocialTax + '%'}</p>
                                        <p  className='parIncome'>Your employee costs:</p>

                                    </div>
                                    <div className='bg-i3'>
                                        <IMaskInput className='i-yearIncome' ref={iEmpoloyerCost} value={employeeCosts}
                                        mask={Number} radix="." readOnly thousandsSeparator=' ' placeholder="" />
                                    </div>
                                </div>
                                <div className='bg-btn__2' ref={btnCalculateTwo}><button type='submit'>Calculate</button></div>
                            </form>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </>
    )
}