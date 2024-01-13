import { useDispatch, useSelector } from "react-redux";
import { selectMissionByRange, setResourceChecked, setSeedChecked } from "../feature/missions.slice";

function HunterList({ mission, type }) {
    const dispatch = useDispatch();
    const stateList = useSelector(selectMissionByRange(mission.range))[type];

    function handleCheck(range, resourceType, item) {
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        const resource = mission[resourceType].find(resource => resource.name === item);
        resource.checked = !resource.checked;

        if (resourceType === 'resources') {
            dispatch(setResourceChecked({range, value: resource.checked, item}));
        } else if (resourceType === 'seeds') {
            dispatch(setSeedChecked({range, value: resource.checked, item}));
        }
        
        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
    }

    return (
        <div className="mb-4 p-1.5">
            <p className="mb-3">Progression : {stateList.filter(resource => resource.checked === true).length} / {mission.resources.items.length}</p>
            <div>
                { mission[type].items.map((item, index) => (
                    <div className={
                        `mb-1 w-fit cursor-pointer relative
                        ${stateList.find(resource => resource.name === item)
                            .checked ? 'after:absolute after:top-1/2 after:left-0 after:w-100 after:h-0.5 after:bg-pink-800 after:animate-[strike_.5s_ease-in-out_forwards]' : ''
                        }`}
                        key={index}
                        onClick={() => handleCheck(mission.range, type, item)
                    }>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HunterList;