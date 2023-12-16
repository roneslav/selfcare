import React from "react";

import './promo.css'


const Promo = () => {
    return (<section className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__img">
                    {/*<img src={promoImg} alt="Promo" height="500" width="500"/>*/}
                </div>
                <div className="promo__text">
                    <div className="promo__title">
                        SELF-CARE NOTES
                    </div>
                    <div className="promo__desc">
                        Реєструйся онлайн на комфортну годину до улюбленого майстра!
                    </div>
                </div>
            </div>
        </div>
    </section> );
}

export default Promo;