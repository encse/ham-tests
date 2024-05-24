export function pairs(mappings: Record<string, string[]>): Array<[string, string]> {

    let res: Array<[string, string]>= [];
    for (const k of Object.keys(mappings)) {
        for (const v of mappings[k]){
            res.push([k,v])
        }
    }
    return res;
}