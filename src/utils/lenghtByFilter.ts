
const lengthByFilter = <T>(array: T[], cb: (item: T) => boolean) => {

    const filtered = array.filter(cb)
    return filtered.length
}

export default lengthByFilter

