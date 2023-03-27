import {Model,Controller,View,Text,Button} from "./CustomFrameWorkModule.js";

const oModel = new Model({
    name : "joga"
});

new Controller({
    name : "CustomFrameWork.Controller",
    onInit : function(){

    },
    onPress : function(oEvent){
        console.log(oEvent);
    }
});

const oView = new View({
    viewName : "CustomFrameWork",
    getControllerName : function(){
        return "CustomFrameWork.Controller"
    },
    createContent : function(oController){
        const text = new Text({
            
            text : "{ViewModel>/name}",
            width : "30px"
        })

        const button = new Button({
            text : "{ViewModel>/name}",
            width : "30px",
            press : function(oEvent){
                oController.onPress(oEvent);
            }
        });
        return button;
    }
});

oView.setModel("ViewModel",oModel);

oView.placeAt("body");