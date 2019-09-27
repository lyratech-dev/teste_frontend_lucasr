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
        name: 'Cursos',
        type: 'sub',
        icon: 'link',
        children: [
          { state: 'meus-cursos', name: 'Meus Cursos', type: 'link' },
          { state: 'nova', name: 'Nova Inscrição', type: 'link' }
        ]
    },
    {
        state: 'teste',
        name : 'Teste',
        type : 'link',
        icon : 'dashboard'
    },
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}
