import { BaseValue } from './base-value';

export class Doors {
    doorstatusfrontleft: BaseValue;
    doorstatusfrontright: BaseValue;
    doorstatusrearleft: BaseValue;
    doorstatusrearright: BaseValue;
    doorlockstatusfrontleft: BaseValue;
    doorlockstatusfrontright: BaseValue;
    doorlockstatusrearleft: BaseValue;
    doorlockstatusrearright: BaseValue;
    doorlockstatusdecklid: BaseValue;
    doorlockstatusgas: BaseValue;
    doorlockstatusvehicle: BaseValue;
}

export const ValidValue: string = "VALID";

export enum DoorStatusEnum {
    open = "OPEN",
    closed = "CLOSED"
}

export enum DoorLockStatusEnum {
    locked = "LOCKED",
    unlocked = "UNLOCKED"
}

export enum DoorLockCommandEnum {
    lock = "LOCK",
    unlock = "UNLOCK"
}

export enum CommandResultEnum {
    initiated = "INITIATED",
    rejected = "REJECTED"
}

