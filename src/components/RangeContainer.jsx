import FoldingContainer from "./FoldingContainer";
import Relic from "./Relic";
import HunterList from "./HunterList";
import Counter from "./Counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "styled-components";

function RangeContainer({ mission, dailyHunter, setDailyHunter, index }) {
    function toggleVisibility(range) {
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        mission.visible = !mission.visible;
        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
        setDailyHunter(dailyHunter);
    }

    const theme = useTheme();
    const isVisible = dailyHunter.missions.find(storageMission => storageMission.range === mission.range).visible;
    return (
        <div className={`mb-5 lg:w-[30%] ${(index + 1) % 3 !== 0 ? 'lg:mr-10' : ''}`}>
            <div className={`${theme.rangeContainerColor} bg-opacity-30 rounded-md p-3`}>
                <div className="flex justify-between mb-2">
                    <h2 className={`font-bold w-10/12 select-none ${theme.textColor}`}>{mission.range} - {mission.locations.join(', ')}</h2>
                    <div className="w-1/12">
                        {isVisible ?
                            <FontAwesomeIcon icon={faEye} className={`cursor-pointer inline-block w-full ${theme.textColor}`} onClick={() => { toggleVisibility(mission.range) }} /> :
                            <FontAwesomeIcon icon={faEyeSlash} className={`cursor-pointer inline-block w-full ${theme.textColor}`} onClick={() => { toggleVisibility(mission.range) }} />
                        }  
                    </div>
                </div>

                <div className={`${isVisible ? 'max-h-[150rem]' : 'max-h-0'} transition-[max-height] duration-500 overflow-hidden`}>
                    <div className={`flex justify-between items-center font-semibold`}>
                        <div className="flex items-center">
                            <img src={mission.token.image} alt="token" className="inline-block mr-2 w-10" />
                            <p className={`${theme.textColor}`}>{mission.token.name}</p>
                        </div>
                        <Counter setDailyHunter={setDailyHunter} dailyHunter={dailyHunter} mission={mission}/>
                    </div>

                    {mission.relics.length > 0 &&
                        <div>
                            <FoldingContainer title={"Reliques de la tranche"} type='relics' setDailyHunter={setDailyHunter} range={mission.range}>
                            {mission.relics.map((relic, index) => (
                                <Relic key={index} index={index} relic={relic} dailyHunter={dailyHunter} mission={mission} setDailyHunter={setDailyHunter}/>
                            ))}
                            </FoldingContainer>
                        </div>
                    }

                    <div>
                        <FoldingContainer title={"Ressources de monstre"} type='resources' setDailyHunter={setDailyHunter} range={mission.range}>
                            <HunterList dailyHunter={dailyHunter} mission={mission} setDailyHunter={setDailyHunter} type="resources" />
                        </FoldingContainer>
                        <FoldingContainer title={"Semences de monstres"} type='seeds' setDailyHunter={setDailyHunter} range={mission.range}>
                            <HunterList dailyHunter={dailyHunter} mission={mission} setDailyHunter={setDailyHunter} type="seeds" />
                        </FoldingContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RangeContainer;