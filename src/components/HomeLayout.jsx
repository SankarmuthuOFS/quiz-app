import { Header } from "./Header"
import { HomeCards } from "./HmeCards"
import { HomeSubHeader } from "./HomeSubHeader"
export const HomeLayout = () =>{
    return(
        <div>
            <Header/>
            <HomeSubHeader/>
            <HomeCards/>
        
        </div>
    )
}