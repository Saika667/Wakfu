import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faSkull } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'styled-components'

function ThemeButton({ setTheme }) {
    const theme = useTheme();

    function changeThemeAndSaveStorage(typeTheme) {
        setTheme(typeTheme);
        let storage = localStorage.getItem('dailyHunter');
        storage = JSON.parse(storage);
        storage.theme = typeTheme;
        localStorage.setItem('dailyHunter', JSON.stringify(storage));
    }

    return (
        <div className="flex justify-end relative md:absolute md:top-[1.7rem] md:right-12">
            <div className='mr-6 cursor-pointer'
                onClick={() => changeThemeAndSaveStorage("light")}
            >
                <FontAwesomeIcon icon={faSun} className={`${theme.textColor}`}/>
            </div>
            <div className='mr-6 cursor-pointer'
                onClick={() => changeThemeAndSaveStorage("dark")}
            >
                <FontAwesomeIcon icon={faMoon} className={`${theme.textColor}`}/>
            </div>
            <div className='cursor-pointer'
                onClick={() => changeThemeAndSaveStorage("saika")}
            >
                <FontAwesomeIcon icon={faSkull} className={`${theme.textColor}`}/>
            </div>
        </div>
    )
}

export default ThemeButton