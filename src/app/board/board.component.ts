import { Component, OnInit } from '@angular/core';
import { RespostasService } from '../services/respostas.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  respostas: any;

  constructor(private respostaService: RespostasService) { }

  ngOnInit(): void {
    this.respostas = this.respostaService.getAllRespostas();
  }

}
