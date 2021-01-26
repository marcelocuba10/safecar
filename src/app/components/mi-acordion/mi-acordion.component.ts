import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mi-acordion',
  templateUrl: './mi-acordion.component.html',
  styleUrls: ['./mi-acordion.component.scss'],
})
export class MiAcordionComponent implements OnInit {

  @Input()
  nome: string;
  @Input()
  telefone: string;
  @Input()
  endereco: string;
  @Input()
  RUC: string;
  @Input()
  email: string;
  @Input()
  responsavel: string;

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  public isMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() { }

  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public broadcastName(name: string): void {
    this.change.emit(name);
  }

}
