
import { IoSettingsOutline } from 'react-icons/io5'
import { StyledLeft, StyledLowerBox, StyledUpperBox,StyledLogo, StyledPhotoSettings, Styledphotoname } from '../../stylecomponent/leftsidebarstyle'

function Sidebar () {
    return (
        <StyledLeft> 
            <StyledUpperBox>
                <StyledPhotoSettings>
                  <Styledphotoname> 
                  <StyledLogo imagesrc="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"/>
                  <p>Rojina Baral</p>
                  </Styledphotoname> 
                  <IoSettingsOutline size={20}/>
                </StyledPhotoSettings> 
                
            </StyledUpperBox>
            <StyledLowerBox>
                <h3>Category</h3>
                <br/>
                <p>Politics</p>
                <p>Business</p>
                <p>Health Care</p>
                <p>Technology</p>
                <p>Sports</p>
                <p>Weather</p>
                <p>International</p>
            </StyledLowerBox>
            </StyledLeft>
    )
}

export default Sidebar