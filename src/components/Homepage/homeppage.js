import { StyledBodyCard, StyledMiddleBody, StyledMiddleTitle, StyledBodyImg, StyledImgFooter, StyledPills, StyledEngagement, StyledEngage, StyledButton, Styledheadlines, StyledFooterHeadline } from "../../stylecomponent/bodystyle"
import {BsEye, BsShare} from 'react-icons/bs'
import {VscComment} from 'react-icons/vsc'
import {IoShieldCheckmark} from 'react-icons/io5'

function HomePage() {
    return (
        <StyledMiddleBody>
            <StyledMiddleTitle><h6>Today's Headlines</h6></StyledMiddleTitle>
            <StyledBodyCard>
                <StyledBodyImg imagesrc="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg" />
                <br/>
                <br/>
                <StyledImgFooter>
                    <StyledPills>Congress</StyledPills>
                     <StyledEngagement>
                    <StyledEngage><BsEye/> 1.2m </StyledEngage>
                    <StyledEngage><VscComment/> 1.2k</StyledEngage>
                    <StyledEngage><BsShare/> 20k</StyledEngage>
                     </StyledEngagement>
                </StyledImgFooter>
                <br/>
                <StyledFooterHeadline>
                    <Styledheadlines>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to. </Styledheadlines>
                    <StyledButton><IoShieldCheckmark/> Saved to podcast</StyledButton>
                </StyledFooterHeadline>
            </StyledBodyCard>
        </StyledMiddleBody>
    )
}

export default HomePage