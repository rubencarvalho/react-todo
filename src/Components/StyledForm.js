import styled from 'styled-components'
const colors = {
  background: '#eee',
}
const StyledForm = styled.form`
  background-color: ${colors.background};
  border: 1px solid ${props => (props.isNotEmpty ? 'green' : 'hotpink')};
  &:focus {
    border-color: hotpink;
  }
  }`

export default StyledForm
