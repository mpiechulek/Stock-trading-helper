import { Action } from "@ngrx/store";
import {StatisticsWindows} from "../models/statistics-windows";

export enum StatisticsWindowActionTypes {

    CHOSE_HARTS= '[STATISTICS] Chose harts section',
    CHOSE_TABLE= '[STATISTICS] Chose table section',
    CHOSE_STATS= '[STATISTICS] Chose stats section'

}

export class ChoseHartSubSectionAction implements Action {

    readonly type = StatisticsWindowActionTypes.CHOSE_HARTS;

    constructor(public payload:StatisticsWindows){

    }
    
}

export type StatisticsActions = ChoseHartSubSectionAction