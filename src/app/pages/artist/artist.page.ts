import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
Router


@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {
  artist: any = {};

  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute,private router:Router) {




  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {

      this.spotifyService.getArtist(data.id).subscribe((data) => {
        console.log(data);

        this.artist = data;
      });

    });
  }

  goBack(){
    console.log('sss');
    
    this.router.navigate(['']);
  }

}
