import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retrospectiveSFA';

  sectors = [
    {color:"#f82", label:"Stack"},
    {color:"#0bf", label:"10"},
    {color:"#fb0", label:"200"},
    {color:"#0fb", label:"50"},
    {color:"#b0f", label:"100"},
    {color:"#f0b", label:"5"},
    {color:"#bf0", label:"500"},
  ];
}
