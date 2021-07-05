export function getDateTimeString(date_time) {
    const date = new Date(date_time)
    return date.toLocaleString()
}