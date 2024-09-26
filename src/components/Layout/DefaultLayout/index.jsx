
import Header from "../component/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return <div>
        <Header/>
        <div>
            <Sidebar/>
            <div>
                {children}
            </div>
        </div>
    </div>
}

export default DefaultLayout;