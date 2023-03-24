import CustomObject from "./CustomObject.js";
import Model from "./Model.js";
import View from "./View.js";

// console.log(CustomObject,Model,View);

export default class ManagedObject extends CustomObject{
    constructor(...args){
        super(...args);
        this.oModel = {};
        this.oPropagatedProperties = {
            oModel : {}
        };
    }

    getModel(sModelName){
        if(!sModelName) return this.oModel[""];
        return this.oModel[sModelName] || this.oPropagatedProperties.oModel[sModelName];
    }

    setModel(sModelName,oModel){
        if(!oModel && sModelName instanceof Model){
            this.oModel[""] = sModelName;
            return;
        }

        if(oModel instanceof Model){
            this.oModel[sModelName] = oModel;
            if(this instanceof View){
                this.getContent().oPropagatedProperties.oModel[sModelName] = oModel;
                this.getContent().updateModel();
            }
            return;
        }

        throw new Error("Model 객체가 들어와야합니다.");
    }

    setProperty(sPropertyName, value){
        if(this.updateModelProperty(sPropertyName,value,this[sPropertyName])){
            let oProperties = this.property;
            oProperties[sPropertyName] = value;
            this[sPropertyName] = value;
        }
    }
    updateModelProperty(sPropertyName,value,oldValue){
        const oBindingInfo = this.bindingInfo;
        if(!oBindingInfo.isEmpty() && value!==oldValue){
            const oModel = this.oModel[oBindingInfo[sPropertyName].modelName] || this.oPropagatedProperties.oModel[oBindingInfo[sPropertyName].modelName];
            return oModel.setProperty(oBindingInfo[sPropertyName].path,value);    
        }
        return false;
    }
}