import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()
  const padPriceUsd = priceData ? parseFloat(priceData.info.price) : 0

  const padPriceUsdString =
    Number.isNaN(padPriceUsd) || padPriceUsd === 0
      ? ''
      : ` - $${padPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`


  useEffect(() => {
    document.title = `PadSwap${padPriceUsdString}`
    document.title = `PadSwap`
  }, [padPriceUsdString])
}
export default useGetDocumentTitlePrice
