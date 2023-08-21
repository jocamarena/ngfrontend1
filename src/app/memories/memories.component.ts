import { Component } from '@angular/core';

export class Memory {
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent {
  memory: Memory = new Memory("Monday","On this day I went to the store");
   memories: Memory[] = [new Memory("Monday","On this day I went to the store")];
}
