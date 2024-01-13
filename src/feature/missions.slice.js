import { createSelector, createSlice } from '@reduxjs/toolkit';
import { initLocalStorage } from '../components/daily-hunter/DailyHunter';

function getInitialState() {
    initLocalStorage();
    const local = localStorage.getItem('dailyHunter');
    return JSON.parse(local).missions;
}

export const missionsSlice = createSlice({
    name: "DailyMissions",
    initialState: { missions : getInitialState()},
    reducers: {
        setToken: (state, action) => {
            const { range, value } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            rangeMission.token = value;
        },
        setRelicShards: (state, action) => {
            const { range, value, relic } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            const relicItem = rangeMission.relics.find(item => item.name === relic);
            relicItem.shards = value;
        },
        setRelicVisibility: (state, action) => {
            const { range, currentRelic } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            const relicItem = rangeMission.relics.find(item => item.name === currentRelic.name);
            relicItem.visible = currentRelic.visible;
        },
        setRelicsVisibility: (state, action) => {
            const { range, value } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            rangeMission.relics_visible = value;
        },
        setResourceChecked: (state, action) => {
            const { range, value, item } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            const resourceItem = rangeMission.resources.find(resource => resource.name === item);
            resourceItem.checked = value;
        },
        setResourcesVisibility: (state, action) => {
            const { range, value } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            rangeMission.resources_visible = value;
        },
        setSeedChecked: (state, action) => {
            const { range, value, item } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            const resourceItem = rangeMission.seeds.find(resource => resource.name === item);
            resourceItem.checked = value;
        },
        setSeedsVisibility: (state, action) => {
            const { range, value } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            rangeMission.seeds_visible = value;
        },
        setRangeVisibility: (state, action) => {
            const { range, value } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            rangeMission.visible = value;
        },
        setBossesResources: (state, action) => {
            const { range, value } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            rangeMission.bosses_visible = value;
        },
        setActiveBossResource: (state, action) => {
            const { range, item } = action.payload;
            const rangeMission = state.missions.find(mission => mission.range === range);
            rangeMission.activeBossResource = rangeMission.activeBossResource === item ? null : item;
        }
    }
})

export const { 
    setToken, 
    setRelicShards, 
    setRelicVisibility, 
    setRelicsVisibility, 
    setResourceChecked,
    setResourcesVisibility,
    setSeedChecked,
    setSeedsVisibility,
    setRangeVisibility,
    setBossesResources,
    setActiveBossResource
} = missionsSlice.actions;

export const selectMissionsState = (state) => state.dailyMissions;

export const selectMissionByRange = (range) => createSelector(
    [selectMissionsState],
    (missionState) => missionState.missions.find((mission) => mission.range === range)
);

export const selectRelic = (range, relic) => createSelector(
    [selectMissionByRange(range)],
    (missionState) => missionState.relics.find((missionRelic) => missionRelic.name === relic)  
);

export default missionsSlice.reducer;