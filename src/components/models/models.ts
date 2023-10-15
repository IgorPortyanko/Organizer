
export interface TodoItemIf {
    id: number
    text: string
    complete: boolean
}

export interface weatherInfoIf{
    clouds: {}
    dt: number
    dt_txt: string
    main:{
        feels_like: number
        grnd_level: number
        humidity: number
        pressure: number
        sea_level: number
        temp: number
        temp_kf: number
        temp_max: number
        temp_min: number
    }
    pop: number
    sys:{}
    visibility: number
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        }
    ]
    wind: {
        speed: number
        deg: number
        dust: number
    }
}

export interface weatherDataIf {
    city: string
    weatherInfo: weatherInfoIf[]
}

export interface fiveDayWeather{
    firstDay : []
    secondDay : []
    thirdDay : []
    fourthDay : []
    fifthDay : []
}

export interface todayWeather {
    todayDataWeather : []
}