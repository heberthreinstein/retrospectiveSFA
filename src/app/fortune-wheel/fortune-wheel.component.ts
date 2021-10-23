import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import * as Roullete from './roulette';

@Component({
  selector: 'app-fortune-wheel',
  templateUrl: './fortune-wheel.component.html',
  styleUrls: ['./fortune-wheel.component.scss']
})
export class FortuneWheelComponent implements AfterViewInit  {
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('spin') spin!: ElementRef;

  @Input() sectors: any;

  ngAfterViewInit (): void {
    
    var roulette = Roullete(this.sectors).subscribe((res: any) => console.log(res));
  }
}
