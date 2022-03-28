
import {BiRun} from 'react-icons/bi'

interface dataForm{
    id:number,
    title:string,
    icon:any
    path:string,
}
export const MobileMenuData:dataForm[] = [
    {
        id:1,
        title:' 마이 러닝',
        icon:<BiRun />,
        path:'/run'
    }
]