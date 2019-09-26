import { Injectable } from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
}

export interface Separator {
    name: string;
    type?: string;
}

export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    separator?: Separator[];
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: '',
        name : 'Início',
        type : 'separator',
        icon : 'dashboard'
    },
    {
        state: 'dashboard',
        name : 'Início',
        type : 'link',
        icon : 'dashboard'
    },
    {
        state: 'inscricoes',
        name : 'Meus cursos',
        type : 'link',
        icon : 'code'
    }
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}
