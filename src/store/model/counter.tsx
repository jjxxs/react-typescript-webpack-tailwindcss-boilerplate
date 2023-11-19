import {createSlice} from "@reduxjs/toolkit";
import {StoreState} from "../store";

export const getCount = (state: StoreState) => {
    return state.counter.count
}

export interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        }
    }
})

export const {
    increment,
    decrement
} = CounterSlice.actions

export default CounterSlice.reducer