export class Order {
  constructor(
  public id: number,
  public first_name: string,
  public last_name: string,
  public customer_id: number,
  public table: number,
  public type: string,
  public dishname: string,
  public dish_desc: string
  ) { }
}
