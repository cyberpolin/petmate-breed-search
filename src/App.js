import styled, { ThemeProvider, keyframes } from "styled-components"

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
          <SearchWrapper
            isLoading={true}
            onClose={() => alert("cierrate sesamo")}
          >
            <SearchInput placeholder="Busca una raza" />
            <Close onClick={() => alert("cierrate sesamo")} />
          </SearchWrapper>
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`
const SearchInput = styled.input`
  background-color: #33333300;
  border: none;
  padding: 20px 0px;
  width: 100%;
  text-indent: 40px;
`

const SearchWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  margin: 20px 10%;
  width: 70%;
  padding: 0px 0px;
  background-color: ${({ theme }) => theme.bg};
  background: url(/assets/search.png) 10px center no-repeat;
  position: relative;
  overflow: hidden;
  &::after {
    opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
    display: "block";
    position: absolute;
    height: 24px;
    width: 24px;
    top: 25%;
    right: 50px;
    content: "";
    background: url(/assets/loading.png);
    animation: ${rotate} 3s linear infinite;
    z-index: 1000;
    transition: opacity 0.2s;
  }
`
const Close = styled.span`
  position: absolute;
  height: 24px;
  width: 24px;
  top: 25%;
  right: ${({ hasText }) => (hasText ? "10px" : "-20px")};
  transition: all 0.2s;
  content: "";
  background: url(/assets/close.png) 0px 0px no-repeat;
  background-size: cover;
  cursor: pointer;
`
//Loader

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
  width: 70%;
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
