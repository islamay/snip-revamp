import moment from "moment"

const timeRelative = (date: any) => {
    return moment(date).startOf('seconds').fromNow()
}

export default timeRelative