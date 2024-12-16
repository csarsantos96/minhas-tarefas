import * as S from './styles'

export type Props = {
  ativo: boolean
  label?: string
  contador?: number
}

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>{props.contador}</S.Contador>
    <S.Label>{props.label || 'pendentes'}</S.Label>{' '}
  </S.Card>
)

export default FiltroCard
