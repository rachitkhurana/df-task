import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  @Input() qIndex;

  constructor() {
    console.log(this.question);
   }

  ngOnInit(): void {
  }

}
