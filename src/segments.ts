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

export const prizeProba = {
    JACKPOT: 0.01,
    HIGH_DISCOUNT: 0.1,
    LOW_DISCOUNT: 0.2,
    GOODIE: 0.69
}