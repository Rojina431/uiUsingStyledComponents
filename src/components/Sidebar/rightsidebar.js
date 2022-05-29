import { Fragment } from "react";
import { StyledLogo } from "../../stylecomponent/leftsidebarstyle";
import { StyledEachbox, StyledRightSidebar, StyledRightTitle, StyledTeam, StyledText, StyledTime } from "../../stylecomponent/rightsidebar";

export function Sidebarcontent({goal, name, image}){
    return (
        <StyledTeam>
        <StyledLogo imagesrc={image}/>
        <h6>{name}</h6>
        <h6>{goal}</h6>
         </StyledTeam>
    )
}

export function Sidebar({goal1, name1, image1, goal2, name2, image2}) {
    return(
      <StyledEachbox>
         <Sidebarcontent goal={goal1} name={name1} image={image1}/>
         <StyledTime>
             <p style={{flex:'0.1'}}>VS</p>
             <p style={{flex:'0.8'}}>Full Time</p>
         </StyledTime>
         <Sidebarcontent goal={goal2} name={name2} image={image2}/>
         <StyledText>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to. </StyledText>
      </StyledEachbox>
    )
  }

function RightSideBar() {
    
    return (
       <Fragment>
                <StyledRightSidebar>
                <StyledRightTitle>
                <h6>Sports News</h6>
                <p>See all</p>
                </StyledRightTitle>
                <Sidebar 
                goal1="0" 
                name1="Tottenham Hotspur" 
                image1="https://w7.pngwing.com/pngs/230/849/png-transparent-1987-champions-soccer-logo-illustration-logo-football-team-football-club-logo-identity-emblem-free-logo-design-template-label-thumbnail.png"
                goal2='1' 
                name2="Real Madrid" 
                image2="https://w7.pngwing.com/pngs/1/207/png-transparent-history-of-real-madrid-c-f-logo-football-football-emblem-logo-football-team-thumbnail.png"/>
                <Sidebar 
                goal1="0" 
                name1="Tottenham Hotspur" 
                image1="https://w7.pngwing.com/pngs/230/849/png-transparent-1987-champions-soccer-logo-illustration-logo-football-team-football-club-logo-identity-emblem-free-logo-design-template-label-thumbnail.png"
                goal2='1' 
                name2="Real Madrid" 
                image2="https://w7.pngwing.com/pngs/1/207/png-transparent-history-of-real-madrid-c-f-logo-football-football-emblem-logo-football-team-thumbnail.png"/>
                <br/>
                <br/>
                <StyledRightTitle>
                <h6>Political News</h6>
                <p>See all</p>
                </StyledRightTitle>
                
             </StyledRightSidebar>
       </Fragment>
    )
}



export default RightSideBar