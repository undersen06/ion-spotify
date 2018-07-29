import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private searchUrl: string = 'https://api.spotify.com/v1/'
  private artistURL:string;
  private headers: HttpHeaders;
  


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.headers = new HttpHeaders().set('Authorization', 'Bearer BQDLtYUF5frmUtPBug8ame8o3DQzSpEDtuk57YvSMNqkiY3FfTTgDASylIx-GPCbmWtq3tmw9CnszwuDb9xn4Z-jeUyr9E8xDpjmigo4Gs1mSlxk6rZIeQlPrphorb8VQEDHigtXW9ewh2-4');
  }


  searchMusic(_data: string, type = 'artist') {

    let params: any = {};
    params.query = _data;
    params.offset = 0;
    params.limit = '20';
    params.type = type;

    return this.http.get(`${this.searchUrl}search`, { params, headers:this.headers });

  }

  getArtist(id:string) {
    return this.http.get(`${this.searchUrl}artists/${id}`, { headers:this.headers });
  }

  getAlbums(id:string) {
    // return this.http.get(`${this.searchUrl}artists/${id}/albums`, { headers:this.headers });
  }
}
