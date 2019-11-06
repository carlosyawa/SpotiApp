import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../core/api-calls/api-request.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  public searchModel: string;
  public searchingResponse: any;

  constructor(private apiRequestService: ApiRequestService) { }

  public ngOnInit(): void {
  }

  public async buscarArtista(): Promise<void> {
    console.log(`Searching for ${this.searchModel}...`);
    this.searchingResponse = await this.apiRequestService.searchInSpotify(this.searchModel);
  }

  public showDetails(artist: any): void {
    /* //Agregar routing import { Router } from '@angular/router';

    //this.router.navigate(['product-list'], { queryParams: { id:  + 1 } }); */
    console.log('showDetails()', artist);
  }
}
