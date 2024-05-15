import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { instruments } from '../instruments';

@Component({
  selector: 'app-instrument',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss'],
})
export class InstrumentComponent implements OnInit {
  instrument: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const index = this.route.snapshot.params['index'];
    this.instrument = instruments[index];
    console.log(this.instrument);
  }
}
