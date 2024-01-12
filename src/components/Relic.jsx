import Counter from "./Counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "styled-components";

function Relic({ relic, dailyHunter, mission, setDailyHunter }) {

    function toggleVisibility(range, relic) {
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        const currentRelic = mission.relics.find(item => item.name === relic);
        currentRelic.visible = !currentRelic.visible;
        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
        setDailyHunter(dailyHunter);
    }

    const relicStorage = dailyHunter.missions
    .find(dailyMission => dailyMission.range === mission.range).relics
    .find(item => item.name === relic.name);

    const isVisible = relicStorage.visible;
    const shards = relicStorage.shards;
    const shardsWithTokens = Math.floor(dailyHunter.missions.find(storageMission => storageMission.range === mission.range).token / relic.token_per_shard);
    let shardsWithTokensPercentage;
    if (shards > 99) {
        shardsWithTokensPercentage = 0;
    } else if (shards + shardsWithTokens > 100) {
        shardsWithTokensPercentage = 100 - shards;
    } else {
        shardsWithTokensPercentage = Math.min(100 - shards, shardsWithTokens);
    }
    const theme = useTheme();
    const purchaseRelicWithToken = Math.max(0, (100 - shards) * relic.token_per_shard);

    return (
        <div className="flex flex-col p-1.5">
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center">
                    <img className="w-10" src={relic.image} alt={relic.name}/>
                    <p className="inline-block mx-2 font-medium">{relic.name}</p>
                </div>
                {isVisible ?
                    <FontAwesomeIcon icon={faEye} className={`${theme.textColor}`} onClick={() => { toggleVisibility(mission.range, relic.name) }} /> :
                    <FontAwesomeIcon icon={faEyeSlash} className={`${theme.textColor}`} onClick={() => { toggleVisibility(mission.range, relic.name) }} />
                }
            </div>
            <div className={`overflow-hidden ${isVisible ? 'max-h-40' : 'max-h-0'} transition-[max-height] duration-500`}>
                <div className={`flex h-2 ${theme.counterBarTotal}`}>
                    <div className={`shard h-2 ${theme.counterBarShard}`} style={{width: `${Math.min(shards, 100)}%`}}></div>
                    <div className={`token h-2 ${theme.counterBarToken}`} style={{width: `${shardsWithTokensPercentage}%`}}></div>
                </div>
                <div className="flex justify-between items-center mt-1.5">
                    <div className="flex">
                        <img src={relic.shard} alt={`fragment de ${relic.name}`}/>
                        <Counter mission={mission} dailyHunter={dailyHunter} setDailyHunter={setDailyHunter} relic={relic.name}/>
                    </div>
                    
                    <p className="text-xs italic" title="Nombre de jetons total pour obtenir la relique en achetant les fragments manquants.">Nb de jetons : <span className="font-bold mr-1">{ purchaseRelicWithToken }</span></p>
                </div>
            </div>
        </div>
    );
}

export default Relic;