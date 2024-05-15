import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  @ViewChild('video') video!: ElementRef;

  videoSource = '';
  isShowVideo = false;

  showVideo(videoSrc: string): void {
    console.log(videoSrc);
    this.videoSource = videoSrc;
    this.isShowVideo = true;
    this.video.nativeElement.load();
  }

  hideVideo(): void {
    this.isShowVideo = false;
    this.video.nativeElement.pause();
    this.videoSource = '';
  }
}
