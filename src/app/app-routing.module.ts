import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { MyActivityComponent } from './my-activity/my-activity.component';

const routes: Routes = [
  {
    path: 'my-activity',
    component: MyActivityComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: '',
    redirectTo: 'my-activity',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'my-activity'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
