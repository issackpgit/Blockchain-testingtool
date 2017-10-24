import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { TransactionComponent } from './transaction/transaction.component';
export const AppRoutes:Routes = [
    {
        path : 'block',
        component : BlockComponent
    },
    {
        path : 'trans',
        component : TransactionComponent
    },
]