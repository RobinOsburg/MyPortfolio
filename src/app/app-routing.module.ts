import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', component:MainComponent },
  {path:'imprint', component: ImprintComponent},
  {path:'legalNotice', component: LegalNoticeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
