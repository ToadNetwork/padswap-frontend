import React from 'react'
import styled from 'styled-components'
import { useLastTruthy } from '../../hooks/useLast'
import { AdvancedSwapDetails, AdvancedSwapDetailsProps } from './AdvancedSwapDetails'

const AdvancedDetailsFooter = styled.div<{ show: boolean }>`
  width: 100%;
  max-width: 500px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({ theme }) => theme.colors.textSubtle};
  z-index: 1;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  height: ${({ show }) => (show ? 'auto' : '0px')};
  margin-top: ${({ show }) => (show ? '10px' : '0px')};
  transition: transform 300ms ease-in-out;
`

export default function AdvancedSwapDetailsDropdown({ trade, ...rest }: AdvancedSwapDetailsProps) {
  const lastTrade = useLastTruthy(trade)

  return (
    <AdvancedDetailsFooter show={Boolean(trade)}>
      <AdvancedSwapDetails {...rest} trade={trade ?? lastTrade ?? undefined} />
    </AdvancedDetailsFooter>
  )
}
