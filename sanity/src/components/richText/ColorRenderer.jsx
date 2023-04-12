/* eslint-disable react/prop-types */

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {client} from '../../utils/sanity'

const Color = styled.div`
  position: relative;
  width: max-content;

  display: inline-block;

  color: ${({value}) => value} !important;

  transition: color 0.3s ease-in-out;

  * {
    color: inherit !important;
  }
`

const ColorRenderer = (props) => {
  const {renderDefault, value} = props

  const [textColor, setTextColor] = useState(`#000000`)

  useEffect(() => {
    if (!value?.reference?._ref) return

    client.fetch(`*[_id == $ref][0]`, {ref: value?.reference?._ref}).then((color) => {
      setTextColor(color?.value?.hex)
    })
  }, [value?.reference?._ref])

  if (!value) return renderDefault(props)

  return <Color value={textColor}>{renderDefault(props)}</Color>
}

export default ColorRenderer
