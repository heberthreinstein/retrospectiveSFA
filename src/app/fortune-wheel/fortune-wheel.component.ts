import { Component, Input, OnChanges} from '@angular/core';
import * as Roullete from './roulette';

@Component({
  selector: 'app-fortune-wheel',
  templateUrl: './fortune-wheel.component.html',
  styleUrls: ['./fortune-wheel.component.scss']
})
export class FortuneWheelComponent implements OnChanges  {

  @Input() sectors: any;

  ngOnChanges (): void {
    var sec = new Array()
    this.sectors.forEach((e: any, i: any) => {
      if (!e.sorteado) {
        sec.push(e)
      }
    });
    Roullete(sec).subscribe((res: any) => console.log(res));
  }
}
