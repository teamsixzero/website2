import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {client} from '../utils/sanity'

const ImageContainer = styled.img`
  position: relative !important;
  height: max-content !important;
  border: 0.5px solid black;
`

const Media = ({src, alt}) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (!src?._ref) return

    client.fetch(`*[_id == $ref][0]`, {ref: src?._ref}).then((img) => {
      setImage(`${img?.url}?auto=format&w=100`)
    })
  }, [src?._ref])

  if (!image) return null

  return <ImageContainer src={image} alt={alt} />
}

const Container = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  gap: 0.0625rem;

  padding: 0.125rem;

  background-color: ${({color}) => color};
  border-radius: 0.1875rem;
`

const ColumnsMedia = ({media}) => {
  return (
    <Container>
      {media?.length > 0 &&
        media?.map((med, index) => {
          switch (med?.type) {
            case 'image':
              return <Media key={index} src={med?.image?.asset} alt={med?.image?.alt} />

            case 'video':
              return (
                <Media key={index} src={med?.video?.poster?.asset} alt={med?.vide?.poster?.alt} />
              )

            default:
              return <></>
          }
        })}
    </Container>
  )
}

export default ColumnsMedia
