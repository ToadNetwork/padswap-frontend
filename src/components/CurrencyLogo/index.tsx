import { Currency, ETHER, Token } from '@padswap/sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import CoinLogo from '../pancake/CoinLogo'

const getTokenLogoURL = (address: string) =>
`https://padswap.exchange/bsc/images/coins/${address}.png`

const StyledBnbLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, `/images/coins/${currency?.address ?? 'token'}.png`, getTokenLogoURL(currency.address)]
      }

      return [`/images/coins/${currency?.address ?? 'token'}.png`, getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <StyledBnbLogo src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAulBMVEUAAADvrxDvtwjvuAnxuQvwuQrwuQvwuQrwugvwugvvtwvxuAvxugvvtwjvtgrwuQvxugnwuwryuQvxuwvvugvvtQvwuQvvtwzvuQ3wuAvvvxDvuAvvuArwugvvtwrvuQrvtgvvuAzvuAvvtwvvtgvwuQvFmQvFmQwZGRAZGRELDhF+Yw5EOQ82LhDirgs2Lg9wWQ4oIxDTpAxhTg7TowsnIxBhTw59ZA6Mbg1vWQ6Lbw6Lbg1EOA////8DpA4OAAAAJXRSTlMAEEBwj6/P3++/YJ+fIFDfb69fjzAw70BQvxCQsM+gUHCQcKCQAtJYUgAAAAFiS0dEPdBtUVkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflARoNBSomjRAaAAADq0lEQVRo3sWabXeaMBSAg4gglrG1Vqrtttr2FgZrt6KOvf3/37UPakngJrk32LP70ZzzPOblXiCJEKTwRv44mIQRAEAUToOxP/LEqcKLZyEgMTmLkxPQ/SkYYjrQMTLS9xG8c//zIZAijZ347yMgh4NiFAIrmIrkA7DjjDHd5xE4BLkT3hgc44KUfEkIzpEShmkewYBIL63DDwPj3LL4YXD4b8w3Ggjj85gPGKU5gV98IRgundfnY1GWBMMCXa0ejU8ypFjGjYl8kuGiz4/JfJLhnD8BLZ9i6E3DGYdPMQTMAVL5FEOmCEImn2BIOR3o8wkGn94BjG83LDxqB3C+3eATO6DjWw2vs3DlyLcajgspYPCrimGYHpKYwwfgGDzrFPf5LMN+mpc8PscwtYwQzucYPPMIfcX5XcOTnhCb6+jzNwnzXW6RDS+1njATQkyAZNioLRWJD6kQK2OqvBo23ZaKwgfwxAgohk2/paLwIRM++vtWNbT87VYxSPytJhOu8fW5kQ0Sf/ciGyT+D3y1XqOF6LGQ//RzI/HLUjL8lPiafLjB8nifX8iwb3dlqRhkPm74iDwLjvn7C+djhkab06mI9PWhwfl9Q6OvGgthqj8Nzu8aGlNdEsb61uB81dAYK19XkBea+larglpT+QqbQDFUcoNsUPO3MvChP8mtoVIbWkO3PlR6/gJZpkdD1W04Gvr1p9LxIcWqda5LtL0Bq2+Vhg9TtFTkSqnY/lYMEv+PUvkKvFSgxS4v5PomrdZ6J/EbebVWhabY4eW6Vte/ZKiV9S8Zak25ziwPnB1WNdr8etnaHjiWR+YTXpfa/LUYPPOr9Su/Z2jKkmL4KIT4ROJ3DE1Zkgwz84vX31JT+RrOi5dhEtTK1xpUfmF4dUwsL7+4gc7ffyD4wDPQ+bDf6DQu1L6BwYfDfsKSY+Dwbw7faOZkzg0fgWY+fKZ9xuoNBfEz1jjNBoOFD+1e9ipyMdj48m7ILfANNj7EnO2cvqFgbefYngp9g5UPndOEgGew82fdTcGIY7Dz+ycJ9m3N1mDnA3LcsiYbCPw1svO7ComGwnFrmTANkBc0fuK8vZ8XBD7MdQcIMcFA4BvO027hBHFnOsS5fWM+aZScx+cw0+EQfDT//0eNQqzWrvw19aZC7NSJiHFmndzz+QHvfgK3E2nGPtXnKKI7p3sJVEXqO19DuQrs+GUmhkQSG99cl/4J7tAk8T26eRvO4hPe0Mn8h2B5vP4zCR78jAj/BxvHMSB40+znAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTI2VDEzOjA0OjUyKzAwOjAwvapJxgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0yNlQxMzowNDo1MiswMDowMMz38XoAAAAASUVORK5CYII=" size={size} style={style} />
  }

  return (currency as any)?.symbol ? (
    <CoinLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  ) : (
    <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  )
}
