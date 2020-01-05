export class ObjectUtils {

    static cleanNullValues(object: any): any {
        if (!object) return null;
        let newObj = {};
        Object.keys(object).forEach(key => {
            if (object[key] != null && object[key] != undefined && object[key] != '') {
                newObj[key] = object[key];
            }
        })
        return newObj;
    }
}