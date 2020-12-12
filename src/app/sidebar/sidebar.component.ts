import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() submitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  submit() {
    this.submitEvent.next('submit');
  }
}
