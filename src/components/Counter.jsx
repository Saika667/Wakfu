import { useTheme } from "styled-components";

function Counter({setDailyHunter, dailyHunter, mission, relic = null}) {
    let counterValue;
    // if(counterValue === undefined) {
    //     counterValue = 0;
    // }
    if (relic === null) {
        // if(counterValue === null) {
        //     counterValue = 0;
        // }
        counterValue = dailyHunter.missions.find(storageMission => storageMission.range === mission.range).token;
    } else {
        // if(counterValue === null) {
        //     counterValue = 0;
        // }
        const relicItem = dailyHunter.missions.find(item => item.range === mission.range).relics.find(item => item.name === relic);
        counterValue = relicItem.shards;
    }
    const theme = useTheme();

    function editTokenCount(range, value) {
        if (value < 0) return;
        value = value !== '' ? parseInt(value) : 0;
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        if (relic === null) {
            mission.token = value;
        } else {
            const relicItem = mission.relics.find(item => item.name === relic);
            relicItem.shards = value;
        }
        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
        setDailyHunter(dailyHunter);
    }

    return (
        <div className="flex items-center">
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