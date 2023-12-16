import success_img from './../../components/img/success.png';

import './success.css'
import {useNavigate} from "react-router-dom";


function Success() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <section>
            <div className='success-box'>
                <img src={success_img} alt='successfull image'/>
                <h2>Успіх!</h2><br/>
                <a1>Ваш запис зареєстровано.</a1>
                <a1>Очікуйте подальші нагадування у нашому телеграм-боті.</a1><br/>
                <button className='btn-to-catalog' onClick={goHome}>Повернутись на головну сторінку</button>
            </div>
        </section>
    )

}

export default Success;