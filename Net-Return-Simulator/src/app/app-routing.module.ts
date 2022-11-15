import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.HOME,
    pathMatch: 'full',
  },
  // {
  //   path: ROUTES.CANDIDATES,
  //   loadChildren: () =>
  //     import('./pages/candidates/candidate.module').then((m) => m.CandidateModule),
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
