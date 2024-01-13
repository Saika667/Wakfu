import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setRelicsVisibility, setResourcesVisibility, setSeedsVisibility, setBossesResources, selectMissionByRange } from '../feature/missions.slice';

function FoldingContainer({ title, children, type, range }) {
    const dispatch = useDispatch();
    const theme = useTheme();

    const isVisible = useSelector(selectMissionByRange(range))[type + '_visible'];

    function toggleVisibility(range, type) {
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        mission[type + '_visible'] = !mission[type + '_visible'];

        if (type === "relics") {
            dispatch(setRelicsVisibility({range, value: mission[type + '_visible']}));
        } else if ( type === "resources") {
            dispatch(setResourcesVisibility({range, value: mission[type + '_visible']}));
        } else if (type === "seeds") {
            dispatch(setSeedsVisibility({range, value: mission[type + '_visible']}));
        } else if (type === "bosses") {
            dispatch(setBossesResources({range, value: mission[type + '_visible']}));
        }

        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
    }

    return (
        <div className={`${theme.foldingContainer} rounded-md my-4`}>
            <div className={`flex justify-between items-center rounded-md ${theme.foldingTitleContainer} p-1.5 cursor-pointer`}
                onClick={() => toggleVisibility(range, type)}
            >
                <h3 className={`font-medium underline select-none ${theme.textColor}`}>{ title }</h3>
                <FontAwesomeIcon icon={faAngleUp} className={`${theme.textColor} ${isVisible ? 'rotate-180' : ''} duration-500`}/>
            </div>
            <div className={`${isVisible ? 'max-h-[70rem]' : 'max-h-0'} transition-[max-height] duration-500 overflow-hidden ${theme.textColor} select-none`}>
                { children }
            </div>
        </div>
    );
}

export default FoldingContainer;