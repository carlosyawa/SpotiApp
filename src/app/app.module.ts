import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureModule } from './features/feature.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { MenuComponent } from '../app/features/menu/menu.component';
import { MainComponent } from '../app/features/main/main.component';
import { ArtistDetailComponent } from '../app/features/artist-detail/artist-detail.component';
import { SearchArtistComponent } from '../app/features/search-artist/search-artist.component';
import { AvancedSearchComponent } from '../app/features/avanced-search/avanced-search.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    CoreModule,
    RouterModule.forRoot([
      { path: 'mi-menu', component: MenuComponent },
      {
        path: 'principal', component: MainComponent,
        children: [
          { path: 'detalles/:id', component: ArtistDetailComponent },
          { path: 'buscar-artista', component: SearchArtistComponent },
          { path: 'busqueda', component: AvancedSearchComponent },

        ]
      },
      { path: '**', component: MenuComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
