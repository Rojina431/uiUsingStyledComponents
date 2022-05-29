import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav} from "reactstrap";
import { FcHome, FcVideoCall } from 'react-icons/fc' 
import { BsNewspaper, BsSearch } from 'react-icons/bs'
import { StyledSearchInput, StyledSearchButton, StyledNav } from "../../stylecomponent/searcinput";
import useWindowsdimensions from "../../windowsdimensions";

function AppBar() {

   const {width, height} = useWindowsdimensions();

    return (<div>
    <Navbar
      color="light"
      expand="md"
      light
    >
      <NavbarBrand href="/">
        NEWS
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <StyledNav><FcHome/> Home</StyledNav>
          <StyledNav><FcVideoCall/>  Video</StyledNav>
          <StyledNav><BsNewspaper/>  Magazine</StyledNav>
            <StyledSearchInput widthvalue={width}></StyledSearchInput><StyledSearchButton><BsSearch/></StyledSearchButton>
          
          </Nav>
      </Collapse>
    </Navbar>
  </div>
    )
}

export default AppBar