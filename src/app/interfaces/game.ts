import { OverlayModule } from '@angular/cdk/overlay';

export interface Game {
    title: string;
    id: string;
    img: string;

}
export interface Game_Module {
    id: string;
    title: string;
    completed: string;
    inprogress: string;
    total: string;
    max: string;
    overall: string;
    raw: number;
}

