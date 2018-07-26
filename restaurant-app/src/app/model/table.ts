import {Order} from './order';

export class Table {
  constructor(
    public id: number,
    public minutes: number,
    public customers_total: number,
    public color: string,
    public posX: number,
    public posY: number,
    public width: number,
    public length: number
  ) { }
}
