import { Arcane, ArcaneBaseEvent } from 'arcanepad-web-sdk';

export class AttackEvent extends ArcaneBaseEvent {
  damage: number
  constructor(damage: number) {
    super(CustomEventNames.Attack)
    this.damage = damage
  }
}

export class MoveLeft extends ArcaneBaseEvent {

  constructor() {
    super("MoveLeft" + Arcane.msg.clientId)
  }
}

export enum CustomEventNames {
  Attack = "Attack"
}
