import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }
  note = {title: 'Chores', value: 'Don\'t forget to clean up', color: 'lighblue'};
  ngOnInit() {
  }

}
