import Control from "./Control.js";
export default class View extends Control{
    constructor(...args){
        super(...args);
        const sControllerName = args[0].getControllerName();
        if(sControllerName){
            this.controller = CustomFrameWork.getController(sControllerName);
            this.controller.setView(this);
        }
        this.content = args[0].createContent(this.controller);
    }
    getViewName(){
        return this.viewName;
    }
    render(){
        const div = document.createElement("div");
        div.append(this.content.render()); 
        return div;
    }
    getContent(){
        return this.content;
    }
    getController(){
        return this.controller;
    }
}