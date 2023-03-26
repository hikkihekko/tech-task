import React from "react";
import './header.css';

function Header(){

    
    return(
        <header className="header">
            <div className="logo-container">
                <img src="https://i.pinimg.com/originals/82/35/56/8235567369865fd6063cc3c486e95ab6.png" alt="logo" />
            </div>
            <ul className="header-nav">
                <li className="header-nav-item">
                    <a href="#advantages" className="nav-link">
                        Почему мы
                    </a>
                </li>
                <li className="header-nav-item">
                    <a href="#window-carousel" className="nav-link">
                        Наши проекты
                    </a>
                </li>
                <li className="header-nav-item">
                    <a href="#process-container" className="nav-link">
                        Процесс
                    </a>
                </li>
                <li className="header-nav-item">
                    <a href="#about-company" className="nav-link">
                        О нас
                    </a>
                </li>
                <li className="header-nav-item">
                    <a href="#footer" className="nav-link">
                        Контакты
                    </a>
                </li>
            </ul>
            <span>
                <a className="phone-link" href='tel:+77765171215'>+7 776 517 1215</a>
            </span>
        </header>
    );
};

export default Header;