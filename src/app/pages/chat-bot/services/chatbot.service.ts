import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const dialogflowURL = 'https://us-central1-phmartinchatbot.cloudfunctions.net/dialogflowGateway';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }


  botGateWay(text, sessionId): Observable<any>{
        return this.http.post<any>(
          dialogflowURL,
          {
            sessionId,
            queryInput: {
              text: {
                text,
                languageCode: 'es-ES'
              }
            }
          }
        );
  }
}
