import { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"

import fetchAPI from "../lib/fetchAPI"

type ResultsProps = {
  onResults: any
  placeholder?: string
  url?: string
}

export function Search({ placeholder, url, onResults }: ResultsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const timeoutRef: { current?: NodeJS.Timeout } = useRef()

  const hasSearch = searchTerm.length > 0

  async function search(searchTerm: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(async () => {
      try {
        setIsLoading(true)
        const result = await fetchAPI.get(
          `https://breeds-api.petmate.mobi/api/breeds?search=${searchTerm}`
        )
        onResults(result.data)
      } catch (e) {
        console.warn(e)
      } finally {
        setIsLoading(false)
      }
    }, 250)
  }

  async function onChangeText(e: any) {
    setSearchTerm(e.target.value)
    await search(e.target.value)
  }

  function onClose() {
    setSearchTerm("")
  }

  useEffect(() => {
    search("")
  }, [])

  return (
    <SearchWrapper isLoading={isLoading}>
      <SearchInput
        placeholder={placeholder || "Busca una raza"}
        value={searchTerm}
        onChange={onChangeText}
      />
      <Close hasSearch={hasSearch} onClick={onClose} />
    </SearchWrapper>
  )
}

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
    opacity: ${({ isLoading }: { isLoading: boolean }) => (isLoading ? 1 : 0)};
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
  right: ${({ hasSearch }: { hasSearch: boolean }) =>
    hasSearch ? "10px" : "-20px"};
  transition: all 0.2s;
  content: "";
  background: url(/assets/close.png) 0px 0px no-repeat;
  background-size: cover;
  cursor: pointer;
`
