export default class CustomFrameWork{
    static viewContainer = [];
    static controllerConainer = [];
    static addViewContainer(oControl){
        CustomFrameWork.viewContainer.push(oControl);
    }
    static getId(id){
        return CustomFrameWork.viewContainer.find(control=>control.id===id);
    }
    static addControllerContainer(oController){
        CustomFrameWork.controllerConainer.push(oController);
    }
    static getController(sControllerName){
        return CustomFrameWork.controllerConainer.find(controller=>controller.name===sControllerName);
    }
}