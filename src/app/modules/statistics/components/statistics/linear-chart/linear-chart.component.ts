import { Component, NgModule, OnInit  } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html' 
})
export class LinearChartComponent implements OnInit {

  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Ballance';
  timeline: boolean = true;
  autoScale: boolean = true;

  colorScheme = {
    domain: ['#2196F3']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  ngOnInit(): void {

    console.log(new Date());
    
    
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
