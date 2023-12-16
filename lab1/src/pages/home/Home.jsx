import React from "react";

import './home.css';
import Promo from "../../components/promo/Promo";
import Objects from "../../components/objects/Objects";
import ButtonRegister from "../../components/buttonRegister/ButtonRegister";

function Home(){
    return(
    <div className='home__page'>
        <Promo/>
        <Objects />
        <ButtonRegister />
    </div>
    )
}

export default Home;