import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

export interface ISpeechEvent extends Event {
  results: any;
}

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {

  private recognition: SpeechRecognition;
  SpeechToText: Observable<string>;
  timeoutHandler: number;

  constructor() { }

  ngOnInit(): void {
    const {webkitSpeechRecognition} = (window as any);
   // const speechRecognitionList = new SpeechGrammarList();
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.lang = 'es-ES';
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;
  }

  startRecognition(): void{
    this.recognition.start();

    this.SpeechToText = fromEvent(this.recognition, 'result')
    .pipe(
      map( (event: ISpeechEvent) => {
        return event.results[0][0].transcript;
      })
    );
  }

  public mouseup(): void {
    console.log('muouseup');
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
      this.recognition.stop();
    }
  }

  public mousedown(): void {
    console.log('muousedown');

    this.timeoutHandler = setTimeout(() => {
      this.timeoutHandler = null;
      this.startRecognition();
    }, 500);
  }



}
