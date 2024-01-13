import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../feature/theme.slice';
import missionsReducer from '../feature/missions.slice';

export default configureStore({
    reducer: {
        theme : themeReducer,
        dailyMissions : missionsReducer
    },
})

