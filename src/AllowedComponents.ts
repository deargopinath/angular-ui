import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {FormsModule} from '@angular/forms'
import { ApplicationRouter } from './ApplicationRouter'
import { ApplicationRoot } from './ApplicationRoot'
import { Banner } from './components/banner/Banner'
import {RoughWork} from './components/rough-work/RoughWork' 

@NgModule({
  declarations: [
    ApplicationRoot,
    Banner,
    RoughWork
  ],
  imports: [
    ApplicationRouter,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ApplicationRoot]
})
export class AllowedComponents { }
