import { createSlice } from '@reduxjs/toolkit';
import { initLocalStorage } from '../components/daily-hunter/DailyHunter';

function getInitialState() {
    initLocalStorage();
    const local = localStorage.getItem('dailyHunter');
    return JSON.parse(local).theme;
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        color: getInitialState(),
    },
    reducers: {
        setTheme: (state, action) => {
            state.color = action.payload;
        },
    },
})

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;