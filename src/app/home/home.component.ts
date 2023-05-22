import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  countdown: string;
  description: string;
  location: string;
  date: string;
  time: string;

  constructor() {
    this.countdown = this.calculateCountdown();
    this.description = 'Join us for an unforgettable New Year Eve celebration! Get ready to ring in the New Year with style and excitement. Our exclusive party promises to be a night filled with joy, laughter, and great memories. Located at the stunning venue of #405, 4th Floor, Iscon Atria 1, Gotri Road, Vadodara, our New Year party offers a perfect blend of elegance and entertainment. The venue is beautifully decorated to create an enchanting ambiance for the celebration. Save the date: December 31, 2023. The party starts at 8:00 p.m. IST and continues until the early hours of the New Year. Be prepared for a spectacular countdown as we welcome the stroke of midnight with fireworks and champagne toasts.Do not miss this opportunity to celebrate the arrival of a fresh year with your loved ones and friends. Join us for an extraordinary New Year Eve party that will leave you with unforgettable memories. Secure your tickets now and get ready for an evening of pure excitement and joy! Feel free to customize the description according to the specific details and theme of your New Year party.';
    this.location = '#405, 4th Floor, Iscon Atria 1, Gotri Road, Vadodara 390021';
    this.date = '31st December 2023';
    this.time = '08:00 p.m. IST';
  }

  private calculateCountdown(): string {
    const eventDate = new Date('December 31, 2023 20:00:00');
    const currentDate = new Date();

    const timeDiff = eventDate.getTime() - currentDate.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return days + ' days, ' + hours + ' hours';
  }
}
