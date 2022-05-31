import styled from 'styled-components'

export const StyledLeft = styled.div`
flex:0.15;
margin-top: 20px;
border-radius: 0.3rem;
margin-bottom: 20px;
`

export const StyledUpperBox = styled(StyledLeft)`
height:fit-content;
background-color: #f8f9fa;
`
export const StyledPhotoSettings = styled(StyledUpperBox)`
   display:flex;
   justify-content: space-between;
   padding: 10px 10px 0 10px;
`


export const StyledLogo = styled.img.attrs((props) => ({
    src:props.imagesrc
}))`
 height:40px;
 width:40px;
 object-fit: cover;
 border-radius: 50%;
`

export const Styledphotoname = styled.h5`
 text-align: left;
`

export const StyledLowerBox = styled(StyledLeft)`
background-color: #f8f9fa;
margin-top: 10px;
padding-left: 10px;
padding-bottom:20px;
text-align: left;
height:fit-content;
min-width:fit-content
`