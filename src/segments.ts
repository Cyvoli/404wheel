import { LOW_DISCOUNT, HIGH_DISCOUNT, GOODIE, JACKPOT, Prize } from './constants';

export const segmentsPrizes : Prize[] = [
    LOW_DISCOUNT,
    GOODIE,
    HIGH_DISCOUNT,
    GOODIE,
    LOW_DISCOUNT,
    GOODIE,
    HIGH_DISCOUNT,
    GOODIE,
    LOW_DISCOUNT,
    JACKPOT
];

export const segColors = [
    "#8041ba",
    "#00c5be",
    "#8041ba",
    "#00c5be",
    "#8041ba",
    "#00c5be",
    "#8041ba",
    "#00c5be",
    "#8041ba",
    "#d3af37"
]

export const prizeProba = [
    {
        proba: 0.01,
        prize: JACKPOT
    },
    {
        proba: 0.1,
        prize: HIGH_DISCOUNT
    },
    {
        proba: 0.2,
        prize: LOW_DISCOUNT
    },
    {
        proba: 0.69,
        prize: GOODIE
    }
]

export type PrizeProba = {proba: number, prize: Prize}