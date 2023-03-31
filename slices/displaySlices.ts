import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store/store';


export interface DisplaySlice {
    displayGrid: boolean
}

const initialState: DisplaySlice = {
    displayGrid: true,
}

export const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        changeView(state) {
            state.displayGrid = !state.displayGrid
        }
    }
})

export const {changeView} = displaySlice.actions

export const selectDisplay = (state: RootState) => state.display.displayGrid

export default displaySlice.reducer