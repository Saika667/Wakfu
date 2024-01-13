import dailyHunterMissions from "../../data/daily-hunter-missions";
import { useTheme } from "styled-components";
import RangeContainer from "../RangeContainer";
import ThemeButton from "../ThemeButton";

export function initLocalStorage() {
  const version = '2.0';
  const dailyHunter = localStorage.getItem('dailyHunter');
  // Get today's date
  const today = new Date();
  const todayDate = today.getDate() + '-' + (today.getMonth() + 1);
  // Check if today + month exists in local storage
  if (!dailyHunter || JSON.parse(dailyHunter).version === undefined || JSON.parse(dailyHunter).version < version) {
    // If not, create it
    localStorage.setItem('dailyHunter', JSON.stringify({
      date: todayDate,
      theme: 'light',
      version: version,
      missions: dailyHunterMissions.map(mission => ({
        range: mission.range,
        token: 0,
        relics: mission.relics.map(relic => ({name: relic.name, shards: 0, visible: true})),
        relics_visible: true,
        resources: mission.resources.items.map(item => ({ name: item, checked: false })),
        resources_visible: true,
        seeds: mission.seeds.items.map(item => ({ name: item, checked: false })),
        seeds_visible: true,
        visible: true,
        bosses_visible: true
      }))
    }));
  } else if (JSON.parse(dailyHunter).date !== todayDate) {
      const dailyHunterMissions = JSON.parse(dailyHunter).missions;
      // If it exists but is not today, reset it
      localStorage.setItem('dailyHunter', JSON.stringify({
          date: todayDate,
          theme: JSON.parse(dailyHunter).theme,
          version: version,
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
              visible: mission.visible,
              bosses_visible: mission.bosses_visible
          }))
      }));
  }
}

function DailyHunter() {
  const theme = useTheme();

  initLocalStorage();

  return (
    <div className={(`bg-gradient-to-b ${theme.gradientFrom} ${theme.gradientTo} p-5 min-h-screen`)}>
        <ThemeButton />
        <h1 className={`select-none text-3xl font-bold text-center mb-5 lg:mb-10 ${theme.textColor}`}>Le chasseur du jour</h1>
        <section className=" lg:flex lg:flex-wrap lg:justify-center">
        {dailyHunterMissions.map((mission, index) => (
            <RangeContainer key={index} mission={mission} index={index}/>   
        ))}
        </section>
    </div>
  );
}

export default DailyHunter; 