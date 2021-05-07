import { useEffect } from 'react'
/* import useGetPriceData from './useGetPriceData' */

const useGetDocumentTitlePrice = () => {
  /* const priceData = useGetPriceData() */

  /* const cakePriceUsd = priceData ? parseFloat(priceData.prices.Cake) : 0 */

  /* const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}` */
      const cakePriceUsdString = "";


  useEffect(() => {
    /* document.title = `PancakeSwap${cakePriceUsdString}` */
    document.title = `PadSwap`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
