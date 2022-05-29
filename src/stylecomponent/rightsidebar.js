
import styled from 'styled-components';

export const StyledRightSidebar = styled.div`
 flex:0.25;
 border-radius: 0.3rem;
`
export const StyledRightTitle = styled.div`
 display:flex;
 justify-content: space-between;
`
export const StyledEachbox = styled(StyledRightSidebar)`
height:fit-content;
background-color: #f8f9fa;
padding:10px 30px;
margin-bottom:10px;
`

export const StyledTeam = styled.div`
 display:flex;
 justify-content: space-between; 
 padding-top:5px;
`
export const StyledTime= styled.div`
 display: flex;
 color:grey;
 justify-content: space-evenly;
`
export const StyledText = styled.div`
 color:grey;
 padding:20px 0;
 text-align: left;
`