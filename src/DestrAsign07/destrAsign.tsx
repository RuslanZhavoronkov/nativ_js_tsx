import React from "react";

type TitleType = {
    title: number
}

type StreetType = {
    title:string
}

type AddressType = {
    street:StreetType
}
export type ManType = {
    name:string,
    age: number,
    lessons: Array<TitleType>,
    address: AddressType
   
}

type  PropsType = {
    title: string
    man: ManType
    food: Array <string>
    car: {model: string}
}


export const  ManComponent: React.FC<PropsType> = ({props}) => {

const [message, setMessage]=useState<string>("hello")


   const {title, man, ...restProps} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {restProps.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}