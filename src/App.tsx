import  styled  from 'styled-components'

export const App = () => {
    return (
        <Box>
            <StyledBtn>Hello</StyledBtn>
        </Box>
    )
}
const StyledBtn = styled.button`
  border: none;
  background-color: blueviolet;
  padding: 10px 20px;
  border-radius: 5px;
  color: seashell;
  font-weight: bold;
  font-size: 2rem;
`
const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
