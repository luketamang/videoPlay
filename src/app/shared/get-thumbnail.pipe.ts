import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getThumbnail'
})
export class GetThumbnailPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    let video_id;
    let result;
    let thumbnail;


    if (result = value.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) {
      video_id = result.pop();
    }
    else if (result = value.match(/youtu.be\/(.{11})/)) {
      video_id = result.pop();
    }
    if (video_id) {
      var quality_key = 'maxresdefault';

      thumbnail = "http://img.youtube.com/vi/" + video_id + "/" + quality_key + ".jpg";
      return thumbnail;

    }
    return thumbnail;
  }

}
