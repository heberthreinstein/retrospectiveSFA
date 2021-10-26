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
    Roullete(this.sectors).subscribe((res: any) => console.log(res));
  }
}
