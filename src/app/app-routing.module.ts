import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth/auth-layout.component';
import { MainLayoutComponent } from './layout/main/main-layout.component';

const routes: Routes = [

	{
		path: 'auth',
		component: AuthLayoutComponent,
		loadChildren: () =>
			import('./modules/auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: 'home',
			
				loadChildren: () =>
					import('./modules/home/home.module').then(
						m => m.HomeModule
					)
			},
			{
				path: 'trade',
			
				loadChildren: () =>
					import('./modules/trade/trade.module').then(
						m => m.TradeModule
					)
			},
			{
				path: 'calculator',
				
				loadChildren: () =>
					import('./modules/calculator/calculator.module').then(
						m => m.CalculatorModule
					)
			},
			{
				path: 'currency',
			
				loadChildren: () =>
					import('./modules/currency/currency.module').then(
						m => m.CurrencyModule
					)
			},
			{
				path: 'statistics',
				
				loadChildren: () =>
					import('./modules/statistics/statistics.module').then(
						m => m.StatisticsModule
					)
			},
			// {
			//   path: 'calendar',
			//   loadChildren: () => 
			//     import('./modules/calendar/calendar.module').then(
			//       m => m.CalendarDateModule
			//     )
			// },
			// { path: '**', redirectTo: '/', pathMatch: 'full' } 
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
