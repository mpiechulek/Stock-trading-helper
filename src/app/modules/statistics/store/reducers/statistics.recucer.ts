import { sampleTime } from "rxjs/operators";
import { StatisticsActions, StatisticsWindowActionTypes } from "../actions/statistics-windows.actions";
import { StatisticsWindows } from "../models/statistics-windows";

const initialState: Array<any> = [
    { chosenSubSection: 1 }
];

export function StatisticsReducer(state: Array<any> = initialState, action: StatisticsActions) {

    switch (action.type) {

        case StatisticsWindowActionTypes.CHOSE_HARTS:

            return [...state, { chosenSubSection: action.payload }];

        default:

            return state;

    }
}


