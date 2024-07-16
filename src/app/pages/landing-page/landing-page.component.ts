import { Component, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  myFirstSubscription: Subscription;

  constructor() { 
    const customIntervalObservable = new Observable((observer:Observer<number>) => {
      // write the Observable logic here
    });

    this.myFirstSubscription = customIntervalObservable.subscribe({
      next: (data: number) => {
        // output the data
      },
      error: (error: Error) => {
        // output the error
      },
      complete: () => {
        // output "completed!"
      }
    });
  }

  // ngOnDestroy(): void {
    // unsubscribe here
  // }
}
