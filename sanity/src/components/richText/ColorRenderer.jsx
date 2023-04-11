import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {client} from '../../utils/sanity'

const Color = styled.div`
  color: ${({value}) => value} !important;

  * {
    color: inherit !important;
  }
`

const ColorRenderer = (props) => {
  const {renderDefault, value} = props

  const [textColor, setTextColor] = useState(`#000000`)

  useEffect(() => {
    console.log(`textColor`, textColor)
  }, [textColor])

  useEffect(() => {
    if (!value?._ref) return

    client.fetch(`*[_id == $ref][0]`, {ref: value?._ref}).then((color) => {
      setTextColor(color?.value?.hex)
    })
  }, [value?._ref])

  if (!value) return renderDefault(props)

  return <Color value={textColor}>{renderDefault(props)}</Color>
}

export default ColorRenderer
