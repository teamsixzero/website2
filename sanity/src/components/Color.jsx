import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${({color}) => color};
  border: 1px solid var(--card-shadow-outline-color);
  border-radius: 0.1875rem;

  & + * {
    display: none !important;
  }
`

const Color = ({value}) => {
  return <Container color={value} />
}

export default Color
