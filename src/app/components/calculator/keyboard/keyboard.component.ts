import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  
  @Output() onAddChar = new EventEmitter<string | number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: string | number) {
    console.log('clicked: ' + value);
    this.onAddChar.emit(value);
  }

}
