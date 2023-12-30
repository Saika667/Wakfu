import dailyHunterMissions from "../../data/daily-hunter-missions";
import token from "../../assets/token.png";
import visible from "../../assets/visible.png";
import hidden from "../../assets/hidden.png";
import { useState } from "react";

function DailyHunter() {
  function initLocalStorage() {
    const dailyHunter = localStorage.getItem('dailyHunter');
    // Get today's date
    const today = new Date();
    const todayDate = today.getDate() + '-' + (today.getMonth() + 1);
    // Check if today + month exists in local storage
    if (!dailyHunter) {
      // If not, create it
      localStorage.setItem('dailyHunter', JSON.stringify({
        date: todayDate,
        missions: dailyHunterMissions.map(mission => ({
          range: mission.range,
          resources: mission.resources.items.map(item => ({ name: item, checked: false })),
          seeds: mission.seeds.items.map(item => ({ name: item, checked: false })),
          visible: true
        }))
      }));
    } else if (JSON.parse(dailyHunter).date !== todayDate) {
        // If it exists but is not today, reset it
        localStorage.setItem('dailyHunter', JSON.stringify({
            date: todayDate,
            missions: dailyHunterMissions.map(mission => ({
            range: mission.range,
            resources: mission.resources.items.map(item => ({ name: item, checked: false })),
            seeds: mission.seeds.items.map(item => ({ name: item, checked: false })),
            visible: JSON.parse(dailyHunter).missions.find(storageMission => storageMission.range === mission.range).visible
            }))
        }));
    }
  }

  initLocalStorage();

  function handleCheck(range, resourceType, item) {
    const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
    const mission = dailyHunter.missions.find(mission => mission.range === range);
    const resource = mission[resourceType].find(resource => resource.name === item);
    resource.checked = !resource.checked;
    localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
    setDailyHunter(dailyHunter);
  }

  function toggleVisibility(range) {
    const dailyHunter = JSON.parse(localStorage.getItem('dailyHunter'));
    const mission = dailyHunter.missions.find(mission => mission.range === range);
    mission.visible = !mission.visible;
    localStorage.setItem('dailyHunter', JSON.stringify(dailyHunter));
    setDailyHunter(dailyHunter);
  }

  // Save local storage in state
  const [dailyHunter, setDailyHunter] = useState(JSON.parse(localStorage.getItem('dailyHunter')));
  console.log(dailyHunter, dailyHunterMissions);

  return (
    <div className="bg-gradient-to-b from-violet-500 to-purple-500 p-5 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-5 lg:mb-10">Le chasseur du jour</h1>
      <section className=" lg:flex lg:flex-wrap lg:justify-center">
        {dailyHunterMissions.map((mission, index) => (
            <div key={index} className="mb-5 lg:w-1/4 lg:mr-10">
                <div className={`bg-slate-300 bg-opacity-30 rounded-md p-3 ${dailyHunter.missions.find(dailyMission => dailyMission.range === mission.range).visible ? 'h-full' : ''}`}>
                    <div className="flex justify-between mb-2">
                        <h2 className="font-bold w-10/12">{mission.range} - {mission.locations.join(', ')}</h2>
                        <div className="w-1/12">
                            <img className="cursor-pointer inline-block w-full" src={dailyHunter.missions.find(dailyMission => dailyMission.range === mission.range).visible ? hidden : visible} alt="visibility" onClick={() => { toggleVisibility(mission.range) }} />
                        </div>
                    </div>
                    <p className={`font-semibold ${dailyHunter.missions.find(storageMission => storageMission.range === mission.range).visible ? 'mb-4' : ''}`}>
                        <img src={token} alt="token" className="inline-block mr-2 w-7" />
                        {mission.token_type}
                    </p>
                    <div className={`${dailyHunter.missions.find(storageMission => storageMission.range === mission.range).visible ? '' : 'hidden'}`}>
                        <div className="mb-4">
                            <h3 className="font-medium underline">A récupérer sur les monstres</h3>
                            <p className="mb-3">Progression : {dailyHunter.missions.find(dailyMission => dailyMission.range === mission.range).resources.filter(resource => resource.checked === true).length} / {mission.resources.items.length}</p>
                            <div>
                                { mission.resources.items.map((item, index) => (
                                    <div className={
                                        `mb-1 w-fit cursor-pointer relative
                                        ${dailyHunter.missions.find(dailyMission => dailyMission.range === mission.range)
                                            .resources.find(resource => resource.name === item)
                                            .checked ? 'after:absolute after:top-1/2 after:left-0 after:w-100 after:h-0.5 after:bg-pink-800 after:animate-[strike_.5s_ease-in-out_forwards]' : ''
                                        }`}
                                        key={index}
                                        onClick={() => handleCheck(mission.range, 'resources', item)
                                    }>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium underline">Semences de monstres</h3>
                            <p className="mb-3">Progression : {dailyHunter.missions.find(dailyMission => dailyMission.range === mission.range).seeds.filter(resource => resource.checked === true).length} / {mission.seeds.items.length}</p>
                            <div>
                                { mission.seeds.items.map((item, index) => (
                                    <div className={
                                        `mb-1 w-fit cursor-pointer relative
                                        ${dailyHunter.missions.find(dailyMission => dailyMission.range === mission.range)
                                            .seeds.find(seeds => seeds.name === item)
                                            .checked ? 'after:absolute after:top-1/2 after:left-0 after:w-100 after:h-0.5 after:bg-pink-800 after:animate-[strike_.5s_ease-in-out_forwards]' : ''
                                        }`}
                                        key={index}
                                        onClick={() => handleCheck(mission.range, 'seeds', item)
                                    }>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        ))}
      </section>
    </div>
  );
}

export default DailyHunter; 