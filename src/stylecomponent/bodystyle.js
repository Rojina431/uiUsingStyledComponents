import styled from 'styled-components';

export const StyledBody = styled.div`
 display: flex;
 @media (min-width: 0px) and (max-width: 650px){
 display: block;
 }
 width: 100%;
 min-height: 100vh;
 padding: 10px;
`

export const StyledMiddleBody = styled.div`
  flex:0.5;
  margin: 0 15px; 
  margin-bottom: 20px;  
`
export const StyledMiddleTitle = styled.div`
 text-align: left;
`

export const StyledBodyCard = styled.div`
  margin-top:20px;
  border-radius: 0.3rem;
  background-color: #f8f9fa;
  padding: 20px;
  
  @media (min-width:650px) and (max-width:800px) {
    min-height:105vh;
    padding:20px 20px 0 20px;
}
@media (min-width:0px) and (max-width:500px) {
    min-height:85vh;
    padding:20px 20px 0 20px;
}

`
export const StyledBodyImg = styled.img.attrs((props) => ({
   src:props.imagesrc
}))`
 width:100%;
 height:380px;
 object-fit:cover;
 border-radius:0.5rem;
`
export const StyledImgFooter = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 0 10px 15px 10px; 
 @media (min-width:650px) and (max-width:700px) {
  display: block;
}
`

export const StyledPills = styled.div`
  background-color: #f7c6ce;
  color: #fc536f ;
  border-radius: 20px;
  width: fit-content;
  height: fit-content;
  line-height: 5px;
  padding:6px;
`
export const StyledEngagement = styled.div`
 @media (min-width:650px) and (max-width:700px) {  
  margin:10px 0;
  float:left;
  
  //margin-right:5px;
}
`
export const StyledEngage = styled.span`
margin-left: 20px;
@media (min-width:600px) and (max-width:800px) {  
  margin-left:5px;
  //margin-right:5px;
}
`
export const StyledFooterHeadline = styled(StyledImgFooter)`
@media (min-width:0px) and (max-width:800px) {
  display: block;
}
`

export const Styledheadlines = styled.h6`
 flex:0.7;
 text-align:left;
`

export const StyledButton = styled.button`
 border: 1px solid  #53fc6d ;
 color:  #53fc6d ;
 background-color: transparent;
 height: fit-content;
 border-radius: 20px;
 flex: 0.3;
 @media (min-width:0px) and (max-width:800px) {
   float: left;
   margin-top: 10px;
 }
`
