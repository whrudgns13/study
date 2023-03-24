import Element from "./Element.js";
export default class Control extends Element{
    constructor(...args){
        super(...args);
        this.initControl(...args);
        CustomFrameWork.addViewContainer(this);
    }
    initControl(obj){
        this.bindingInfo = {};
        this.property = {};

        for(let [key,value] of Object.entries(obj)){
            const reg = new RegExp(/^{.*}$/g);
            if(reg.test(value)){
                const text = value.replace("{","").replace("}","");
                const [modelName, path] = text.split(">");
                const realValue = this.getModel(modelName)?.getProperty(path);
                this.property[key] = realValue;
                this[key] = realValue;
                this.bindingInfo[key] = {
                    path,
                    modelName
                };
                continue;
            }
            this[key] = value;
            this.property[key] = value;                
        }            
    }
    updateModel(){
        const oBindingInfo = this.bindingInfo;
        for(let [sBindingKey, oModelPath] of Object.entries(oBindingInfo)){
            const sPath = oModelPath.path;
            const sModelName = oModelPath.modelName;
            const sValue = this.oPropagatedProperties.oModel[sModelName].getProperty(sPath);
            this[sBindingKey] = sValue;
            this.property[sBindingKey] = sValue;
        }
    }
    placeAt(sClass){
        const node = document.querySelector(`${sClass}`);
        node.append(this.render());
    }
}