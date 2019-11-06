import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule } from '@angular/router';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { AvancedSearchComponent } from './avanced-search/avanced-search.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [MainComponent, MenuComponent, ArtistDetailComponent, SearchArtistComponent, AvancedSearchComponent],
  exports: [MainComponent]
})
export class FeatureModule { }
