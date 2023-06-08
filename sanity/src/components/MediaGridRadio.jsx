import React, {useCallback, useState} from 'react'
import styled from 'styled-components'
import {Card, Flex, Radio, Text} from '@sanity/ui'
import {set} from 'sanity'

const iconWidth = 56

const IconWrapper = styled.div`
  width: ${iconWidth}px;
  height: ${iconWidth}px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2px;
  border: 1px solid var(--card-border-color);
  border-radius: 0.0625rem;
`

const IconContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 2px;

  aspect-ratio: ${({aspect}) => aspect || '1/1'};
`

const IconBoxWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const IconBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  flex: ${({flex}) => flex || 1};
  border-radius: 0.0625rem;

  &:before {
    content: '${({num}) => num}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    margin: auto;

    font-size: 12px;
    color: var(--card-border-color);
    text-align: center;
  }
`

const MediaGridRadio = (props) => {
  const {elementProps, onChange} = props

  const [value, setValue] = useState(elementProps?.value || 'style-1')

  const handleChange = useCallback(
    (event) => {
      const style = event.target.value
      setValue(style)
      onChange(set(style))
    },
    [onChange]
  )

  return (
    <Card padding={2} border radius={1}>
      <Flex direction="column" gap={2}>
        <Flex padding={2} gap={2} align="center">
          <Radio checked={value === 'style-1'} name="foo" onChange={handleChange} value="style-1" />

          <Flex align="center" gap={2}>
            <Text size={1}>1:2</Text>

            <IconWrapper>
              <IconContainer aspect="1.5">
                <IconBoxWrapper>
                  <IconBox num={1} />
                  <IconBox num={2} />
                </IconBoxWrapper>

                <IconBox num={3} flex={2} />
              </IconContainer>
            </IconWrapper>
          </Flex>
        </Flex>

        <Flex padding={2} gap={2} align="center">
          <Radio checked={value === 'style-2'} name="foo" onChange={handleChange} value="style-2" />
          <Flex align="center" gap={2}>
            <Text size={1}>1:1</Text>

            <IconWrapper>
              <IconContainer aspect="1.015">
                <IconBoxWrapper>
                  <IconBox num={1} />
                  <IconBox num={2} />
                </IconBoxWrapper>

                <IconBox num={3} />
              </IconContainer>
            </IconWrapper>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}

export default MediaGridRadio
