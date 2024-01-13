import FoldingContainer from "./FoldingContainer";
import Relic from "./Relic";
import HunterList from "./HunterList";
import Counter from "./Counter";
import BossResourceItem from './BossResourceItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectMissionByRange, setRangeVisibility } from "../feature/missions.slice";

function RangeContainer({ mission, index }) {
    const dispatch = useDispatch();
    const theme = useTheme();
    const range = useSelector(selectMissionByRange(mission.range));
    const isVisible = range.visible;

    function toggleVisibility(range) {
        const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
        const mission = dailyHunter.missions.find(mission => mission.range === range);
        mission.visible = !mission.visible;
        dispatch(setRangeVisibility({ range, value: mission.visible }));
        localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
    }

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
                        <Counter mission={mission}/>
                    </div>
                    
                    <FoldingContainer title={"Ressources de boss (30 jetons)"} type="bosses" range={mission.range}>
                        <div className="flex flex-wrap justify-center">
                            {mission.boss_resources.map((bossResource, index) => (
                                <BossResourceItem key={index} item={bossResource} range={mission.range}/>
                            ))}
                        </div>
                        <p className="text-center italic">{ range.activeBossResource }</p>
                    </FoldingContainer>

                    {mission.relics.length > 0 &&
                        <FoldingContainer title={"Reliques de la tranche"} type='relics' range={mission.range}>
                        {mission.relics.map((relic, index) => (
                            <Relic key={index} relic={relic} mission={mission} />
                        ))}
                        </FoldingContainer>
                    }

                    <FoldingContainer title={"Ressources de monstre"} type='resources' range={mission.range}>
                        <HunterList mission={mission} type="resources" />
                    </FoldingContainer>

                    <FoldingContainer title={"Semences de monstres"} type='seeds' range={mission.range}>
                        <HunterList mission={mission} type="seeds" />
                    </FoldingContainer>

                </div>
            </div>
        </div>
    )
}

export default RangeContainer;