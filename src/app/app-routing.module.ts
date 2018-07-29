import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'artist/:id', loadChildren: './pages/artist/artist.module#ArtistPageModule' },
  { path: 'albums', loadChildren: './pages/albums/albums.module#AlbumsPageModule' },
  { path: 'album', loadChildren: './pages/album/album.module#AlbumPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
