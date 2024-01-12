import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'styled-components';

function FoldingContainer({ title, children, setDailyHunter, type, range }) {

    function toggleVisibility(range, type) {
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        mission[type + '_visible'] = !mission[type + '_visible'];
        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
        setDailyHunter(dailyHunter);
    }
  
    const theme = useTheme();
    const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
    const mission = dailyHunter.missions.find(mission => mission.range === range);

    return (
        <div className={`${theme.foldingContainer} rounded-md my-4`}>
            <div className={`flex justify-between items-center rounded-md ${theme.foldingTitleContainer} p-1.5 cursor-pointer`}
                onClick={() => toggleVisibility(range, type)}
            >
                <h3 className={`font-medium underline select-none ${theme.textColor}`}>{ title }</h3>
                <FontAwesomeIcon icon={faAngleUp} className={`${theme.textColor}`}/>
            </div>
            <div className={`${mission[type + '_visible'] ? 'max-h-[70rem]' : 'max-h-0'} transition-[max-height] duration-500 overflow-hidden ${theme.textColor} select-none`}>
                { children }
            </div>
        </div>
    );
}

export default FoldingContainer;