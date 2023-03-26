import React from "react";
import {useImput} from "./hooks/useImput";
import "./footer.css";
import {BsFacebook, BsInstagram, BsFillSendFill, BsTwitter, BsYoutube} from "react-icons/bs";

function Footer(){
    const email = useImput('',{isEmpty: true});
    const name = useImput('',{isEmpty: true});

    return(
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="footer-email-container">
                    <h4 className="email-header">Узнайте больше!</h4>
                    <p className="email-paragraph">Отправьте заявку на консультацию.</p>
                    <form action="#" className="email-form">
                        <div className="imput-error-container">
                            {(email.isDirty && email.isEmpty) && <div className="imput-error"> Поле не может быть пустым!</div>}
                            {(name.isDirty && name.isEmpty) && <div className="imput-error"> Пожалуйска укажите имя !</div>}
                        </div>
                        <div className="imput-container">
                            <input onChange={ e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} type="email" name="email" placeholder="Email" aria-label="Email address" className="imput"/>
                            <input onChange={ e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} type="text" name="name" placeholder="Ваше имя" className="imput"/>
                            <button type="submit" className="email-button">Отправить</button>
                        </div>
                    </form>
                </div>
                <div className="more-info">
                    <h4 className="more-info-header">БОЛЬШЕ О НАС :</h4>
                    <div className="more-info-social-block">
                        <ul className="socials">
                            <li><BsFacebook className="social"/></li>
                            <li><BsInstagram className="social"/></li>
                            <li><BsFillSendFill className="social"/></li>
                            <li><BsTwitter className="social"/></li>
                            <li><BsYoutube className="social"/></li>
                        </ul>
                    </div>
                    <p className="call-paragraph">
                        Построим счастливый дом для вашей семьи!
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;