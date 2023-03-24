import Control from "../Control.js";

export default class Text extends Control{
    constructor(...args){
        super(...args);
    }
    render(){
        const div = document.createElement("div");
        div.id = this.getId();
        div.style.width = this.width;

        const span = document.createElement("span");
        span.id = this.getId()+"__inner";
       
        span.innerText = this.text;
        
        div.append(span);
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