// Layout will return only HEader
import { Header } from "./Header"
import { HomeCards } from "./HmeCards"
import { HomeSubHeader } from "./HomeSubHeader"
export const Layout = () =>{
    return (
        <div>
            <Header/>
            <HomeSubHeader/>
            <HomeCards/>
        </div>
  
    )
}