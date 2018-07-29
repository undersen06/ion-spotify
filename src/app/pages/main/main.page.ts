import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoaderComponent } from '../../components/loader/loader.component';
import {Router} from "@angular/router";






@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  providers: [LoaderComponent]
})
export class MainPage implements OnInit {
  
  artists=[];
  private subject: Subject<string> = new Subject();
  isLoading:boolean;
  isCanceled:boolean;


  constructor(private spotifyService: SpotifyService,private router:Router) {

  }

  ngOnInit() {

    this.subject.pipe(
      debounceTime(2000)).subscribe(searchTextValue => {
        this.getSpotifyData(searchTextValue);
      });

  }

  onInput(data) {
    //starts with the loader
    this.isLoading=true;
    this.subject.next(data);
  }


  getSpotifyData(data: string) {
    //stop the loader
    this.isCanceled=false;
    this.spotifyService.searchMusic(data).subscribe((data:any) => {
      this.isLoading=false;
      this.artists = data.artists.items;
      console.log(data);
      
      
    })


  }


  onCancel($event) {
    console.log('hi' + $event)
    this.artists=[];
  }

  goToArtist(_data){

    this.router.navigate([`artist/${_data}`]);
    
  }

}
