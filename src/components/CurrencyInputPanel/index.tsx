import React, { useState, useCallback } from 'react'
import { Currency, Pair } from '@padswap/sdk'
import { Button, ChevronDownIcon, Text } from '@padswap/uikit'
import styled from 'styled-components'
import { darken } from 'polished'
import useI18n from 'hooks/useI18n'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import CurrencyLogo from '../CurrencyLogo'
import DoubleCurrencyLogo from '../DoubleLogo'
import { RowBetween } from '../Row'
import { Input as NumericalInput } from '../NumericalInput'
import { useActiveWeb3React } from '../../hooks'

const WrapperContainer = styled.div`

`
const InputRow = styled.div<{ selected: boolean }>`
  backgroud-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0rem 0rem 0rem 1rem;
`
const CurrencySelect = styled.button<{ selected: boolean }>`
  background-color: #1b1b1b;
  align-items: center;
  height: 50px;
  width: 118px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ selected, theme }) => (selected ? theme.colors.text : '#FFFFFF')};
  border-radius: 0px 16px 16px 0px;
  padding: 0px 8px 0px 10px;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  :hover {
    background-color: #000000ab;;
  }
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => darken(0.2, theme.colors.textSubtle)};
  }
`
const Aligner = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '16px')};
  background-color: ${({ theme }) => theme.colors.input};
  z-index: 1;
  height:50px;
`
const Container = styled.div<{ hideInput: boolean }>`
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
`
interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect?: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  hideInput?: boolean
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const TranslateString = useI18n()
  const translatedLabel = label || TranslateString(132, 'Input')
  const handleDismissSearch = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])
  return (
    <WrapperContainer>
    <LabelRow>
      <RowBetween>
        {account && (
          <Text onClick={onMax} fontSize="14px" style={{ display: 'inline', cursor: 'pointer', marginBottom: '5px', marginLeft: '-10px' }}>
            {!hideBalance && !!currency && selectedCurrencyBalance
              ? `BALANCE: ${selectedCurrencyBalance?.toSignificant(6)}`
              : 'BALANCE: loading...'}
          </Text>
        )}
      </RowBetween>
    </LabelRow>
    <InputPanel id={id}>
      <Container hideInput={hideInput}>
        <InputRow style={hideInput ? { padding: '0', borderRadius: '8px' } : {}} selected={disableCurrencySelect}>
          {!hideInput && (
            <>
              <NumericalInput
                className="token-amount-input"
                value={value}
                onUserInput={(val) => {
                  onUserInput(val)
                }}
              />
              {account && currency && showMaxButton && label !== 'To' && (
                <Button onClick={onMax} scale="sm" variant="text">
                  MAX
                </Button>
              )}
            </>
          )}
          <CurrencySelect
            selected={!!currency}
            className="open-currency-select-button"
            onClick={() => {
              if (!disableCurrencySelect) {
                setModalOpen(true)
              }
            }}
          >
            <Aligner>
              {pair ? (
                <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
              ) : currency ? (
                <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
              ) : null}
              {pair ? (
                <Text id="pair">
                  {pair?.token0.symbol}:{pair?.token1.symbol}
                </Text>
              ) : (
                <Text id="pair" style={{ margin: 'auto' }}>
                  {(currency && currency.symbol && currency.symbol.length > 20
                    ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                        currency.symbol.length - 5,
                        currency.symbol.length
                      )}`
                    : currency?.symbol) || TranslateString(1196, 'SELECT')}
                </Text>
              )}
              {!disableCurrencySelect && <ChevronDownIcon />}
            </Aligner>
          </CurrencySelect>
        </InputRow>
      </Container>
      {!disableCurrencySelect && onCurrencySelect && (
        <CurrencySearchModal
          isOpen={modalOpen}
          onDismiss={handleDismissSearch}
          onCurrencySelect={onCurrencySelect}
          selectedCurrency={currency}
          otherSelectedCurrency={otherCurrency}
          showCommonBases={showCommonBases}
        />
      )}
    </InputPanel>
    </WrapperContainer>
  )
}
