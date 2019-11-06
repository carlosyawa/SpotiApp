import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../core/api-calls/api-request.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  private id: string ;

  constructor(private activatedRoute: ActivatedRoute, private apiRequestService: ApiRequestService) { }
  public artist: any;
  public albums: any;

  ngOnInit() {
    console.log('ngOnInit()',
    this.id = this.activatedRoute.snapshot.params.id);
    this.search();
  }

  public async search(): Promise<void> {
    this.artist = await this.apiRequestService.searchArtist(this.id);
    this.albums = await this.apiRequestService.searchAlbums(this.id);

  }


}
