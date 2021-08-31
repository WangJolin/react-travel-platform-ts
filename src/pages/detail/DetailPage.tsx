import React from "react";
import { RouterComponentProps } from 'react-router-dom'

interface Matchparams {
    touristRouteId: string
}
export const DetailPage: React.FC<RouterComponentProps<Matchparams>> = (props) => {
    return <h1>路由路线详情页面，路线ID：{props.match.params.touristRouteId}</h1>
}