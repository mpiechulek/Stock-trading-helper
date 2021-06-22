import { Component, Input, OnInit } from '@angular/core';
import { TransactionWalletModel } from 'src/app/data/models/statistics-section.model';

@Component({
  selector: 'app-advanced-pipe-chart',
  templateUrl: './advanced-pipe-chart.component.html'
})
export class AdvancedPipeChartComponent implements OnInit {

  single: any[];

  view = [600, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  @Input() readonly colorScheme: Object;

  @Input() transactionWallet: TransactionWalletModel[];

  constructor() {

    this.onChangeChartSize(window.innerWidth);

  }

  ngOnInit(): void {

  }

  /**
   * 
   * @param event 
   */
  onResize(event): void {
    this.onChangeChartSize(event.target.innerWidth);
  }

  /**
   * 
   * @param width 
   */
  onChangeChartSize(width: number): void {

    if (width > 1440) {
      this.view = [600, 400];
    } else if (width <= 1440 && width > 960) {
      this.view = [450, 400];
    } else if (width <= 960 && width > 800) {
      this.view = [350, 400];
    } else if (width <= 800 && width > 400) {
      this.view = [340, 400];
    } else if (width <= 400) {
      this.view = [200, 600];
    }

  }

  onSelect(event) {

  }

}
