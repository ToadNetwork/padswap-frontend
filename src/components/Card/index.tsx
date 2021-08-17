import styled from 'styled-components'

const Card = styled.div<any>`
  width: 100%;
  border-radius: 16px;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  border: 2px solid #9a9a9a;
  padding: 10px;
`

export const GreyCard = styled(Card)`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.input};
`
