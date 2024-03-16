// app-translate.module.ts
// This module is used to translate the text in the application. It uses the pipe to translate the text.
// Import Pipe in the module and use it in the HTML file to translate the text.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        TranslatePipe
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        TranslatePipe
    ]
})
export class AppTranslateModule { }
