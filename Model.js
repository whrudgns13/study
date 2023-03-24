export default class Model{
    constructor(oData){
        this.oData = oData;
    }

    getProperty(sPath){
        const aPath = sPath.split("/").filter(p=>p);
        let oData = this.oData;
        aPath.forEach(path=>{
            oData = oData[path];
        });
        return oData;
    }
    setProperty(sPath, value){
        const aPath = sPath.split("/").filter(p=>p);
        let oData = this.oData;
        let sCurrentPath;

        aPath.forEach((path,length)=>{
            if(aPath.length-1 === length){
                sCurrentPath = path;
                return;
            }
            oData = oData[path];
        });

        oData[sCurrentPath] = value;
        return true;
    }

}