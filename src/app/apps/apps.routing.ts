import { Routes } from '@angular/router';

import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { MailComponent } from './mail/mail.component';
import { ChatComponent } from './chat/chat.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calendar',
        component: FullcalendarComponent,
		data: {
          title: 'Calendar',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Calendar' }
          ]
        }
      },
      {
        path: 'messages',
        component: MailComponent,
		data: {
          title: 'Email',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Email' }
          ]
        }
      },
      {
        path: 'chat',
        component: ChatComponent,
		data: {
          title: 'Chat',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Chat' }
          ]
        }
      },
      {
        path: 'taskboard',
        component: TaskboardComponent,
		data: {
          title: 'Taskboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Taskboard' }
          ]
        }
      }
    ]
  }
];
