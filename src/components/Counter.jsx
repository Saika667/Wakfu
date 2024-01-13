import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { selectMissionByRange, setRelicShards, setToken } from "../feature/missions.slice";
import { useSelector } from "react-redux";

function Counter({mission, relic = null}) {
    const theme = useTheme();
    const dispatch = useDispatch();
    let counterValue;
    const stateMission = useSelector(selectMissionByRange(mission.range));

    if (relic === null) {
        counterValue = stateMission.token;
    } else {
        const relicItem = stateMission.relics.find(item => item.name === relic);
        counterValue = relicItem.shards;
    }
    
    function editTokenCount(range, value) {
        if (value < 0) return;
        value = value !== '' ? parseInt(value) : 0;
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        if (relic === null) {
            mission.token = value;
            dispatch(setToken({range, value}));
        } else {
            const relicItem = mission.relics.find(item => item.name === relic);
            relicItem.shards = value;
            dispatch(setRelicShards({range, value, relic}));
        }
        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
    }

    return (
        <div className="flex items-center ml-1">
            <span className={`mr-2 text-lg cursor-pointer select-none ${theme.textColor}`}
                onClick={() => editTokenCount(mission.range, counterValue - 1)}
            >-</span>
            <input className={`w-12 mr-2 text-center font-bold ${relic !== null ? theme.counterTextColorShard : theme.counterTextColorToken}`} 
                type="text" 
                onChange={e => editTokenCount(mission.range, e.target.value)} 
                value={counterValue} 
            />
            <span className={`text-lg cursor-pointer select-none ${theme.textColor}`}
                onClick={() => editTokenCount(mission.range, counterValue + 1)}
            >+</span>
        </div>
    );
}

export default Counter;