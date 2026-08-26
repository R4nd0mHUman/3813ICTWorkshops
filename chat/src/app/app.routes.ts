import { Routes } from '@angular/router'; // Import the Routes type used to define Angular application routes.
import { Chat } from './chat/chat'; // Import the Chat component that should be displayed for our route.

export const routes: Routes = [ // routing config = controls which angular component shows up for a particular URL
    {
        path: '', // application's default URL.
        component: Chat // What is displayed when the empty path is visited
    }
];
