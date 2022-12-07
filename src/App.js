import styled, { ThemeProvider } from "styled-components"

const result = [
  {
    id: "001",
    name: "Schnauzer",
    description:
      "Lorem ipsum dolor asit met wacha wachero, dale like y comparte :D",
  },
  {
    id: "002",
    name: "Boxer",
    description:
      "Lorem ipsum dolor asit met wacha wachero, dale like y comparte :D",
  },
  {
    id: "003",
    name: "Gran Danes",
    description:
      "Lorem ipsum dolor asit met wacha wachero, dale like y comparte :D",
  },
  {
    id: "004",
    name: "Coker spaniel",
    description:
      "Lorem ipsum dolor asit met wacha wachero, dale like y comparte :D",
  },
  {
    id: "005",
    name: "Doberman",
    description:
      "Lorem ipsum dolor asit met wacha wachero, dale like y comparte :D",
  },
]

const theme = {
  bg: "#EFF5F5",
  text: "#497174",
  border: "#D6E4E5",
  error: "#EB6440",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>
          <SearchInput placeholder="Busca una raza" />
        </Header>
        <Results>
          {result.map((b) => (
            <BreedContainer>
              <Img src="https://picsum.photos/id/237/300/200" />
              <Title>{b.name}</Title>
              <Description>{b.description}</Description>
            </BreedContainer>
          ))}
        </Results>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App

const SearchInput = styled.input`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  margin: 20px 10%;
  width: 70%;
  padding: 10px;
  background: ${({ theme }) => theme.bg};
`

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  min-width: 100%;
`

const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`

const Results = styled.div`
  width: 70%;
`

const BreedContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px;
  margin: 10px auto;
`

const Img = styled.img`
  margin: 0 20px 0 0;
  float: left;
  border-radius: 5px;
`

const Title = styled.h3`
  color: ${({ theme }) => theme.text};
`

const Description = styled.p`
  color: ${({ theme }) => theme.text};
`
