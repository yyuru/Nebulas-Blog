//根模块
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
//元数据
@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        AppModuleShared
    ]
})
export class AppModule {
}
