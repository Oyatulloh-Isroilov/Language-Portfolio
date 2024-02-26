import './components.css';
import { Link, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from '../i18next';
import { useState, useEffect } from 'react';
import Home from './Home';
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

function Header() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        i18n.changeLanguage('en');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const { t, i18n } = useTranslation();
    const [visible, setVisible] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setVisible(false);
    };

    return (
        <>
            <div className="header">
                <div className="BrightBar">
                    <div className="checkbox-apple">
                        <div className="toggle-container">
                            <button className="toggle-button" onClick={toggleDarkMode}>
                                {darkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="languages">
                    <select onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="ru">Russia</option>
                        <option value="uz">Uzbek</option>
                    </select>
                </div>
                <div className="menu">
                    <Link to='/' className='links'>{t("home")}</Link>
                    <Link to='/About' className='links'>{t("about")}</Link>
                    <Link to='/Skills' className='links'>{t("skills")}</Link>
                    <Link to='/Project' className='links'>{t("project")}</Link>
                    <Link to='/Contact' className='links'>{t("contact")}</Link>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/About' element={<About></About>} />
                <Route path='/Skills' element={<Skills></Skills>} />
                <Route path='/Project' element={<Project></Project>} />
                <Route path='/Contact' element={<Contact></Contact>} />
            </Routes>
        </>
    );
}

export default Header;
