import { Action } from "@ngrx/store";

export enum StatisticsWindowActionTypes {

    CHOSE_HARTS = '[STATISTICS] Chose harts section',
    CHOSE_TABLE = '[STATISTICS] Chose table section',
    CHOSE_STATS = '[STATISTICS] Chose stats section'

}
export class ChoseHartSubSectionAction implements Action {

    readonly type = StatisticsWindowActionTypes.CHOSE_HARTS;

    constructor(public payload: number) {

    }

}

export type StatisticsActions = ChoseHartSubSectionAction