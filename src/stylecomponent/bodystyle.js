import styled from 'styled-components';

export const StyledBody = styled.div`
 display: flex;
 flex-wrap:wrap;
 width: 100%;
 height: 100vh;
 padding: 10px;
`

export const StyledMiddleBody = styled.div`
  flex:0.6;
  margin: 0 15px; 
`
export const StyledMiddleTitle = styled.div`
 text-align: left;
`

export const StyledBodyCard = styled.div`
  margin-top:20px;
  border-radius: 0.3rem;
  background-color: #f8f9fa;
  padding: 5px;
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
 margin-left: 0px;
`
export const StyledEngage = styled.span`
margin-left: 20px;
`
export const StyledButton = styled.button`
 border: 1px solid  #53fc6d ;
 color:  #53fc6d ;
 background-color: transparent;
 height: fit-content;
 border-radius: 20px;
`
