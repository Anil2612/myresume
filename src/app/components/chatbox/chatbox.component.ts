import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
interface Message {
  text: string;
  from: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // whenever the bound data changes
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            stagger(
              '80ms',
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ChatboxComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  botTyping = false;

  messages: Message[] = [
    { text: 'Hi! How can I help you today?', from: 'bot' },
  ];
  newMessage: string = '';

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  ngOnInit() { }

  constructor(private apiService: ApiService){}

  sendMessage(event?: any) {
    if (event) {
      event.preventDefault();
    }

    const trimmedMsg = this.newMessage.trim();
    if (!trimmedMsg) return;

    this.messages.push({ text: trimmedMsg, from: 'user' });
    this.newMessage = '';
    this.scrollToBottom();

    this.botTyping = true;

  this.apiService.getAnswer({topic: trimmedMsg}).subscribe((response: any)=> {
      this.botTyping = false;
      this.messages.push({ text: response?.response?.raw, from: 'bot' });
      this.scrollToBottom();
    })
  }

  scrollToBottom() {
    setTimeout(() => {
      const container = document.querySelector('.messages');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 100);
  }

  async getBotResponse(userMessage: string): Promise<string> {


    // Simulated backend delay and response (replace with real API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simple echo bot with a twist
        resolve(
          `You said: "${userMessage}". This is a cute bot response! 😊`
        );
      }, 1200);
    });
  }

  closeChat() {
    this.close.emit();
  }
}
