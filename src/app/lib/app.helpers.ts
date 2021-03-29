export function objectToQs(o): string {
    var str = [];
    for (var k in o) {
        if (o[k] !== undefined && o[k] !== null) {
            str.push(k + "=" + o[k]);
        }
    }
    return str.join("&");
}