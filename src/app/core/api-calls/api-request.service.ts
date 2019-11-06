import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiRequestService {
  private spotifyApiUrl = 'https://api.spotify.com/v1/';

  private bodyGrantTypeFormData: String = 'grant_type=client_credentials';
  private accessToken: string;

  constructor(private httpClient: HttpClient) {
    this.loginSpotify();
  }

  private getAuthorizationCoded(): string {
    console.log('Iniciando', environment.clientID, environment.clientSecret);
    /* //btoa() aplica un algoritmo de codificación como solicita
    Spotify https://beta.developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow */
    return  'basic' + window.btoa(environment.clientID + ':' + environment.clientSecret);
  }

  public async loginSpotify(): Promise<any> {
    const urlForToken = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', this.getAuthorizationCoded())
      .set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    /* //Nota los parámetros se mandan en sintaxis "clave = valor" cuando Content-type es x-www-form-urlencoded */
    const response: any = await this.httpClient.post(urlForToken, this.bodyGrantTypeFormData, { headers: headers }).toPromise();
    console.log('loginSpotify() response token', response);
    this.accessToken = response.access_token;
  }

  public async searchInSpotify(artist: string): Promise<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ${this.accessToken}');
    const urlToQuery = '${this.spotifyApiUrl}search?q=${artist}&type=artist';
    const response = await this.httpClient.get(urlToQuery, { headers: headers }).toPromise();
    console.log('searchInSpotify() response search', response);
    return response;
  }

  public async searchArtist(id: string): Promise<any> {
    const url = 'https://api.spotify.com/v1/artists/' + id;

    const headers = new HttpHeaders().set('Authorization', 'Bearer ${this.accessToken}');
    const response = await this.httpClient.get(url, { headers: headers }).toPromise();

    console.log('searchArtist()', response);
    return response;
  }

  public async searchAlbums(id: string): Promise<any> {
    const url = 'https://api.spotify.com/v1/artists/${id}/albums';

    const headers = new HttpHeaders().set('Authorization', 'Bearer ${this.accessToken}');
    const response = await this.httpClient.get(url, { headers: headers }).toPromise();

    console.log('searchAlbums()', response);
    return response;
  }

}
