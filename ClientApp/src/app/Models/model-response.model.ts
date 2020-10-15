import { ApiResponse } from "./api-response.model";

export class ModelResponse<T> extends ApiResponse {
  public model: T;
}
