import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Constants } from './app/shared/Constants';

declare var __webpack_public_path__: string;

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}


if ((window as any).__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  Constants.publishUrl = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else{
  Constants.publishUrl = environment.publishUrl;
  render();
}

export async function bootstrap (props: Object) {
  console.log("bootstrap:"+ JSON.stringify(props));
}

export async function mount (props: Object) {
   /*if (props['baseUrl'] != null) {
    Constants.baseUrl = props['baseUrl'];
  }*/
  render();
}

export async function unmount (props: Object) {
  // @ts-ignore
  app.destroy();
}




