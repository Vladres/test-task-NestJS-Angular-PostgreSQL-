export class ModelRequest<T> {
  public model: T;

  constructor(model) {
    if (model == null) return;
    Object.assign(this, model);
  }
}
