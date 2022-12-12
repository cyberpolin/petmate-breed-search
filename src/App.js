import { useState } from "react"
import styled, { ThemeProvider, keyframes } from "styled-components"

import { Search } from "./components/Search"

const theme = {
  bg: "#EFF5F5",
  text: "#497174",
  border: "#D6E4E5",
  error: "#EB6440",
}

function App() {
  const [results, setResults] = useState([])
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>
          <Search onResults={setResults} />
        </Header>
        <Results>
          {results.map((b, i) => (
            <BreedContainer key={i}>
              <Img src="https://picsum.photos/id/237/300/200" />
              <Title>{b.name}</Title>
              <Description>{b.description}</Description>
            </BreedContainer>
          ))}
          {results.length === 0 && (
            <h3>No encontramos ninguna raza con ese nombre</h3>
          )}
        </Results>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App

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
