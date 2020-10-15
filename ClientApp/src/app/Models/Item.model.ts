export class Item {
  public id: number
  public createDateTime: string
  public name: string
  public image_url:string

  constructor(model) {
    if (model == null) return;
    Object.assign(this, model);
  }
}
