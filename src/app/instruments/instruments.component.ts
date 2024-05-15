import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { instruments } from './instruments';

@Component({
  selector: 'app-instruments',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss'],
})
export class InstrumentsComponent implements OnInit {
  instruments: any = [];

  ngOnInit(): void {
    this.instruments = instruments;
  }
}
