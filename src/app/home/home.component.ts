import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private network: NetworkService) { }

  examData = null;

  selectedQuestion = 3;

  timeLeft = 0;

  submitted = false;


  timer;

  ngOnInit(): void {
    this.network.examData.subscribe(examData => {
      console.log(examData);
      this.examData = examData;
      this.timeLeft =  Number(this.examData['exam']['examDurationInMinutes'])*60;

      this.call1sTimer()
    });
  }

  getFirstKeyOfObject(input) {
    // console.log(input);
    return Object.keys(input)[0];
  }

  sendAlert(input) {
    alert(input)
  }

  call1sTimer() {
    this.timer = setTimeout(() => {
      if (this.timeLeft <=0 ){
        this.submitted = true
        clearTimeout(this.timer);
      } else {
        this.timeLeft = this.timeLeft-1;
        this.call1sTimer();
      }
    }, 1000);
  }

  getMinOfSec(input) {
    return parseInt((input/60).toString())+1;
  }

  submit(input) {
    if(this.timer) {
      clearTimeout(this.timer);
    }
    this.submitted = true;
  }
}
