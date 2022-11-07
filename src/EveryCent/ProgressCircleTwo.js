import '../EveryCent/EveryCent.css';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import { useEffect, useState } from "react";
  
export default function Chart(props) {

    const {EmployerSocialTax} = props;

    const [showPersent, setShowPercent] = useState('');
    const percentage = EmployerSocialTax;


    useEffect(() => {
        const show = () => {
            if (percentage === '') {
                setShowPercent('')
            }
            else setShowPercent('%');
            
        }

        show()
    }, [percentage])


    return(
        <>
        <div className='block-chart'>
            
        <CircularProgressbar value={percentage} text={`${percentage}${showPersent}`}  strokeWidth={12} 
            styles={buildStyles({
                textSize: '17px',
                textColor: ' #C5C5C5',
                pathColor: 'rgb(58,175,253)',
                pathTransition:
                percentage === 0 ? "none" : "stroke-dashoffset 0.8s ease 0.3s",
      
            })} 
  
            />

        </div>
        </>
    )
}

