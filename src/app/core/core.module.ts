import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiRequestService } from './api-calls/api-request.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiRequestService],
  declarations: []
})
export class CoreModule {

}
