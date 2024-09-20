function checkBody(obj, array) {
    let result = true;
    let num = array.length;
    let numO = Object.keys(obj).length;
    for (let elem in obj) {
        if (!obj[elem]) {
            return false
        }
    }
    if (num !== numO) {
        return false
    }
    return true
}



module.exports = { checkBody };