
import routesConfig from '../config/routes'
//

import HeaderOnly from "../components/Layout/HeaderOnly"
import Following from "../pages/Following"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Search from "../pages/Search"
import Upload from "../pages/Upload"


const  publicRoutes=[
    {  path:routesConfig.home, component:Home},
    { path:routesConfig.following,component:Following},
    { path:routesConfig.profile, component:Profile},
    {path:routesConfig.upload,component:Upload , layout:HeaderOnly},
    {path:routesConfig.search,component:Search , layout:null},
]

const privateRoutes=[

]

export{publicRoutes,privateRoutes}