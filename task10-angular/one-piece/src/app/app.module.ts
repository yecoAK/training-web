import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/menu/menu.component';
import {HomeComponent} from "./pages/home/home.component";
import {MainComponent} from './components/main/main.component';
import { IslandsComponent } from './components/islands/islands.component';
import { IslandsPageComponent } from './pages/islands-page/islands-page.component';
import { MistObjectPageComponent } from './pages/mist-object-page/mist-object-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { SearchComponent } from './components/search/search.component';
import { MistObjectComponent } from './components/mist-object/mist-object.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'islandsPage', component: IslandsPageComponent},
            {path: 'charactersPage', component: CharactersPageComponent},
            {path: 'mistObjectPage', component: MistObjectPageComponent},
        ])
    ],
    declarations: [
        AppComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        MainComponent,
        IslandsComponent,
        IslandsPageComponent,
        MistObjectPageComponent,
        CharactersPageComponent,
        SearchComponent,
        MistObjectComponent,
        CharactersComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/