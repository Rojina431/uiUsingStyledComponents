import styled from 'styled-components'

export const StyledSearchInput = styled.input.attrs({
  placeholder:" Search items.."
})`
   border:  1px solid grey;
   border-radius: 5rem;
   display: inline;
   position: absolute;
   right: 0;
   margin-right:10px;
`
export const StyledSearchButton = styled.span`
  margin-right: 20px;
  margin-top: 2px;
  position: absolute;
  right: 0;
`
export const StyledNav = styled.nav`
  padding:0.5rem  1rem;
  border-bottom: 2px solid #f8f9fa;
  &:hover{
    color: red;
    border-bottom: 2px solid;
    border-image-source: linear-gradient(to right, red, pink);
    border-image-slice: 1;
    transition: ease-in;
  }
`