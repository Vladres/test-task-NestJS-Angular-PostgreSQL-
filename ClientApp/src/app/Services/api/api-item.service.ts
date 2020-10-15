import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelResponse } from '../../Models/model-response.model';
import { API } from '../../helpers/api.decorator';
import { Item } from '../../Models/Item.model';
import { IdModelRequest } from '../../Models/id-model-request.model';
import { ApiResponse } from '../../Models/api-response.model';
import { ModelRequest } from '../../Models/model-request.model';

@Injectable({
  providedIn: 'root'
})
export class APIItemService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  @API<ModelResponse<Item[]>>()
  public async getItems(): Promise<ModelResponse<Item[]>> {
    let response = new ModelResponse<Item[]>();
    response.model = await this._httpClient.get<Item[]>('http://localhost:3000/items').toPromise();
    return response;
  }

  @API<ModelResponse<Item>>()
  public async editItem(request: IdModelRequest<any>): Promise<ModelResponse<Item>> {
    let response = new ModelResponse<Item>();
    response.model = await this._httpClient.put<Item>(`http://localhost:3000/items/${request.id}`, request.model).toPromise();
    return response;
  }

  @API<ApiResponse>()
  public async addItem(request: ModelRequest<any>): Promise<ModelResponse<Item>> {
    let response = new ModelResponse<Item>();
    response.model = await this._httpClient.post<any>(`http://localhost:3000/items`, request.model).toPromise();
    return response;
  }

  
  @API<ApiResponse>()
  public async editItems(request: ModelRequest<Item[]>): Promise<ModelResponse<Item[]>> {
    let response = new ModelResponse<Item[]>();
    console.log(request)
    response.model = await this._httpClient.put<any>(`http://localhost:3000/items`, request.model).toPromise();
    return response;
  }



}
