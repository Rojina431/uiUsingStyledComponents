import { Fragment } from "react";
import AppBar from "./AppBar/appbar";
import Sidebar from "./Sidebar/sidebar";
import Footer from "./Footer/footer";
import { StyledBody } from "../stylecomponent/bodystyle";
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./Homepage/homeppage";
import RightSideBar from "./Sidebar/rightsidebar";

function MainComponent() {
    return (
        <Fragment>
            <AppBar/>
              <StyledBody>
                <Sidebar/>
                    <Router>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                        </Routes>
                    </Router>
                <RightSideBar/>
                </StyledBody>
            <Footer/>
        </Fragment>
    )
}

export default MainComponent