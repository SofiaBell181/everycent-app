import '../EveryCent/EveryCent.css';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import { useEffect, useState } from "react";
  
export default function Chart(props) {

    const {personalTotalTax} = props;
    const [showPersent, setShowPercent] = useState('');
    useEffect(() => {
        const show = () => {
            if (personalTotalTax === '') {
                setShowPercent('')
            }
            else setShowPercent('%');
            
        }

        show()
    }, [personalTotalTax])

    return(
        <>
        <div className='block-chart'>
            
        <CircularProgressbar value={personalTotalTax} text={`${personalTotalTax}${showPersent}`}  strokeWidth={12} 
            styles={buildStyles({
                textSize: '17px',
                textColor: 'rgb(252,252,252)',
                pathColor: 'rgb(58,175,253)',
                pathTransition:
                personalTotalTax === 0 ? "none" : "stroke-dashoffset 0.8s ease 0.3s",
      
            })} 
  
            />

        </div>
        </>
    )
}

