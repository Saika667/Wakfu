import dailyHunterMissions from "../../data/daily-hunter-missions";
import { useState } from "react";
import { useTheme } from "styled-components";
import RangeContainer from "../RangeContainer";
import ThemeButton from "../ThemeButton";

function DailyHunter({ setTheme }) {
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
        theme: 'light',
        missions: dailyHunterMissions.map(mission => ({
          range: mission.range,
          token: 0,
          relics: mission.relics.map(relic => ({name: relic.name, shards: 0, visible: true})),
          relics_visible: true,
          resources: mission.resources.items.map(item => ({ name: item, checked: false })),
          resources_visible: true,
          seeds: mission.seeds.items.map(item => ({ name: item, checked: false })),
          seeds_visible: true,
          visible: true
        }))
      }));
    } else if (JSON.parse(dailyHunter).date !== todayDate) {
        const dailyHunterMissions = JSON.parse(dailyHunter).missions;
        // If it exists but is not today, reset it
        localStorage.setItem('dailyHunter', JSON.stringify({
            date: todayDate,
            theme: JSON.parse(dailyHunter).theme,
            missions: dailyHunterMissions.map(mission => ({
                range: mission.range,
                token: mission.token,
                relics: mission.relics.map(relic => (
                    {   
                        name: relic.name, 
                        shards: relic.shards, 
                        visible: relic.visible
                    })),
                relics_visible: mission.relics_visible,
                resources: mission.resources.map(item => ({ name: item.name, checked: false })),
                resources_visible: mission.resources_visible,
                seeds: mission.seeds.map(item => ({ name: item.name, checked: false })),
                seeds_visible: mission.seeds_visible,
                visible: mission.visible
            }))
        }));
    }
  }

  initLocalStorage();

  // Save local storage in state
  const [dailyHunter, setDailyHunter] = useState(JSON.parse(localStorage.getItem('dailyHunter')));
  const theme = useTheme();
 
  return (
    <div className={(`bg-gradient-to-b ${theme.gradientFrom} ${theme.gradientTo} p-5 min-h-screen`)}>
        <ThemeButton setTheme ={setTheme} />
        <h1 className={`select-none text-3xl font-bold text-center mb-5 lg:mb-10 ${theme.textColor}`}>Le chasseur du jour</h1>
        <section className=" lg:flex lg:flex-wrap lg:justify-center">
        {dailyHunterMissions.map((mission, index) => (
            <RangeContainer key={index} mission={mission} dailyHunter={dailyHunter} setDailyHunter={setDailyHunter} index={index}/>   
        ))}
        </section>
    </div>
  );
}

export default DailyHunter; 