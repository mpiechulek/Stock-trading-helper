import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
    selector: 'mwl-demo-utils-calendar-header',
    template: `
    
    <div class="row text-center">

      <div class="col-md-4">

        <div class="btn-group">

          <button
            mat-raised-button
            color="primary"
            class="btn btn-primary"
            mwlCalendarPreviousView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Previous
          </button>
          <button
            mat-raised-button
            color="primary"
            class="btn btn-outline-secondary"
            mwlCalendarToday
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Today
          </button>
          <button
            mat-raised-button
            color="primary"
            class="btn btn-primary"
            mwlCalendarNextView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Next
          </button>
        </div>
      </div>
      <div class="col-md-4">
        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>
      </div>
      <div class="col-md-4">
        <div class="btn-group">
          <button
            mat-raised-button
            color="primary"
            class="btn btn-primary"
            (click)="viewChange.emit(CalendarView.Month)"
            [class.active]="view === CalendarView.Month"
          >
            Month
          </button>
          <button
            mat-raised-button
            color="primary"
            class="btn btn-primary"
            (click)="viewChange.emit(CalendarView.Week)"
            [class.active]="view === CalendarView.Week"
          >
            Week
          </button>
          <button
            mat-raised-button
            color="primary"
            class="btn btn-primary"
            (click)="viewChange.emit(CalendarView.Day)"
            [class.active]="view === CalendarView.Day"
          >
            Day
          </button>
        </div>
      </div>
    </div>
    <br />
  `,
})

export class CalendarHeaderComponent {
    @Input() view: CalendarView;

    @Input() viewDate: Date;

    @Input() locale: string = 'en';

    @Output() viewChange = new EventEmitter<CalendarView>();

    @Output() viewDateChange = new EventEmitter<Date>();

    CalendarView = CalendarView;
}