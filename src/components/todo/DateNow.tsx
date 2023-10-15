import { createDate } from "../../hooks/createDate"

const DateNow = ({ time }: { time: number }) => {

    return (
        <div >
            <p> {createDate(time).Hour}:{createDate(time).Min}:{createDate(time).Sec} </p>
            <p> {createDate(time).D}/{createDate(time).M}/{createDate(time).Y} </p>
            <p> {createDate(time).Day} </p>
        </div>
    )
}

export default DateNow