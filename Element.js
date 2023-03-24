import ManagedObject from "./ManagedObject.js";

export default class Element extends ManagedObject{
    static id = "text_";
    static num = 0;
    static createId(){
        return this.id+this.num++;
    }
    constructor(...args){
        super(...args);
        args.id ? this.id = id : this.id = Element.createId();
    }
    getId(){
        return this.id;
    }
    setProperty(sPropertyName, value){            
        super.setProperty.bind(this)(sPropertyName,value);
    }
}