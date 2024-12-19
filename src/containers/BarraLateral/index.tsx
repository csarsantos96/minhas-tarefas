import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <div>
          <S.Filtros>
            <FiltroCard ativo={false} contador={5} label="pendentes" />
            <FiltroCard ativo={false} contador={3} label="concluídas" />
            <FiltroCard ativo={false} contador={1} label="urgentes" />
            <FiltroCard ativo={false} contador={5} label="importantes" />
            <FiltroCard ativo={false} contador={7} label="normal" />
            <FiltroCard ativo={true} contador={21} label="todas" />
          </S.Filtros>
        </div>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
