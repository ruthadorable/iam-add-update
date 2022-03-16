import { LocationChangeEvent } from "@angular/common";

export class Cbus {
    [x: string]: any;
    public crestra : number=0;
    public cnivbus : number=0;
    public ctypeoff : number=0;
    public cgesbus!: number;
    public uot : number =0;
    public coffcddb : number=0;
    public coffbtwtva: number=0;
    public isEdit!: boolean;
    
    public constructor(...args: []) {
        this.crestra = 0;
        this.cnivbus = 0;
        this.ctypeoff = 0;
        this.cgesbus=0;
        this.uot = 0;
        this.coffcddb = 0;
        this.coffbtwtva = 0;
        this.isEdit = false;
    }

}
