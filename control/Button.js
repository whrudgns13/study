import Control from "../Control.js";

export default class Button extends Control{
    constructor(...args){
        super(...args);
        this.press = args[0].press || undefined;
    }
    render(){
        const div = document.createElement("div");
        div.id = this.getId();
        div.style.width = this.width;

        const button = document.createElement("button");
        button.id = this.getId()+"__inner";
        if(typeof this.press === "function"){
            button.addEventListener("click",this.press);
        }
        button.innerText = this.text;
        
        div.append(button);
        return div;
    }
    getText(){
        return this.text;
    }
    setText(sText){
        if(this.text!==sText){
            const span = document.getElementById(this.getId()+"__inner");
            span.innerText = sText;
            this.setProperty("text",sText);
        }
        return this;
    } 
}