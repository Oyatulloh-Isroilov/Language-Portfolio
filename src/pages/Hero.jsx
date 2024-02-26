import React, { useEffect } from 'react';
import './components.css';
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('en');
    }, []);

    return (
        <div className='HeroC'>
            <div className='Hero'>
                <div className="infoBar">
                    <h1>{t("mainInfo")}</h1>
                    <p>{t("info")}</p>
                    <div className="Buttons">
                        <button className='hireBtn'>{t("hireBtn")}</button>
                        <button className='projectBtn'>{t("projectBtn")}</button>
                    </div>
                </div>
                <div className="imgBar">
                    <img className='HeroImg' src="./hero.png" alt="Hero Image" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
