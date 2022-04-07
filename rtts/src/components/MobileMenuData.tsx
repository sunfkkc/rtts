
import {BiRun} from 'react-icons/bi'
import {FaHome} from 'react-icons/fa'

interface dataForm{
    id:number,
    title:string,
    icon:any
    path:string,
}
export const MobileMenuData:dataForm[] = [
    {
        id:0,
        title:' Home',
        icon:<FaHome />,
        path:'/home'
    },
    
    {
        id:1,
        title:' My Running',
        icon:<BiRun />,
        path:'/run'
    }
]