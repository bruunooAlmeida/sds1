import { Platform } from "../Records/types";

export type Game = {
    id:        number;
    name:     string;
    platform : Platform;
}

export type ChartItem = {
    x: string; 
    y: number;
}