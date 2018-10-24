export class Recipe{
public name:string;
public description:string;
public imagePath:string;
constructor(name :string, descrpt : string, imagePathT : string){
    this.name=name;
    this.description=descrpt;
    this.imagePath=imagePathT;
}
}