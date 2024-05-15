import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import * as Aos from 'aos';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }
}
