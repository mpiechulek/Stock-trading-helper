import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TradeRoutingModule } from './trade-routing.module';
import { StockTileComponent } from './components/trade/stock-tile/stock-tile.component';
import { TradeContainerComponent } from './page/trade/trade.container';
import { TradeComponent } from './components/trade/trade.component';
import { TradeDialogComponent } from './components/trade/trade-dialog/trade-dialog.component';

// Angular materials

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from './../../shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { OneOfferChangeComponent } from './components/trade/stock-tile/one-offer-change/one-offer-change.component';


@NgModule({
  declarations: [
    TradeContainerComponent,
    TradeComponent,
    TradeDialogComponent,
    StockTileComponent,
    OneOfferChangeComponent
  ],
  imports: [
    CommonModule,
    TradeRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatRadioModule,
    ScrollingModule
  ]
})
export class TradeModule { }
