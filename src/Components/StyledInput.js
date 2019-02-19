import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: #ddd;
  padding-left: 10px;
  height: 30px;
  border: ${props => props.borderWidth}px solid hotpink;

  &:focus {
    border-color: hotpink;
  }
  }`

export default StyledInput
