import { Component, OnInit, Input } from '@angular/core';
import { FruitI } from './fruit.model';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
  @Input()
  fruit: FruitI;

  constructor() { }

  ngOnInit(): void {
  }

}
