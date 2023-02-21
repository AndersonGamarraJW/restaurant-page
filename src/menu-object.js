export class Menu{
    constructor(title,desc,time){
        this._title = title;
        this._desc = desc;
        this._time = time;
    }
    get title(){return this._title;}
    get desc(){return this._desc;}
    get time(){return this._time;}
    set title(value){
        const newTitle = value.charAt(0).toUpperCase() + value.slice(1);
        this._title = newTitle;
    }
    set desc(value){this._desc = value;}
    set time(value){this.time=value;}
}