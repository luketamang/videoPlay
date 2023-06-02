import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  lightbox: any;

  constructor() { }

  ngOnInit(): void {
  }


  playVideo(url: any){
    console.warn("Video url : ", url)

    this.lightbox = GLightbox({
      'href': `${url}`,
      'type': 'video',
      'source': 'youtube',
      'width': 900,
      'autoplayvideo': true,
    }),
    this.lightbox.open();
    this.lightbox.on('open', ()=>{

    });
    this.lightbox.on('close', ()=>{
      this.lightbox.destroy();
    })
  }


  videoList = [
    {
      id: 'https://www.youtube.com/watch?v=0ibt_J4267A&ab_channel=VanSnyder%E2%84%A2'
    },
    {
      id: 'https://www.youtube.com/watch?v=wytv3C6o4AE&ab_channel=CotneusProd.'
    },
    {
      id: 'https://www.youtube.com/watch?v=RgKAFK5djSk&ab_channel=WizKhalifaMusic'
    }
  ]


}
