// import Header from "./Header";

import Header from "../component/Header";


function HeaderOnly({children}) {
    return <div>
        <Header/>
        <div>
            <div>
                {children}
            </div>
        </div>
    </div>
}

export default HeaderOnly;