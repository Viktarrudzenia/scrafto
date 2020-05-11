import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBM1mKNNac556SuLjnxPeFHf_oCAcm5WO8&maxResults=50&type=video&part=snippet&q=john');
  }
}
