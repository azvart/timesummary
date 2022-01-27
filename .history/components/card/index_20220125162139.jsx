import Image from 'next/image';
import {useState} from 'react';




const Card = ({name, lastName, age, email}) => {
  const [close,setClose] = useState(true);
  return (
    <div className="card">
        <div className='card-image'>
            <h1>{name} {lastName}</h1>
        </div>
        <div className='card-body'>
            <div className='controls'>

            </div>
        </div>
    </div>
  )
}




export default Card;