export default class Controller{
    constructor(...args){
        for(const key in args[0]){
            this[key] = args[0][key];
        }
        CustomFrameWork.addControllerContainer(this);
    }
    getView(){
        return this.oView;
    }
    setView(oView){
        this.oView = oView;
    }
}