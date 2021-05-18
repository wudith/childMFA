import { Component, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'


@Component({
  selector: 'app-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private vRef: ViewContainerRef,
    private translate: TranslateService
  ) {
   
    this.translate.addLangs(["zh-CN", "en-US"]);
    this.translate.setDefaultLang('zh-CN');
    this.translate.use('zh-CN');
     
  }
}
