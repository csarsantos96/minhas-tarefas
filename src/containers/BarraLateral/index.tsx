import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <input type="text" placeholder="Buscar" />
      <div>
        <S.Filtros>
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard ativo/>
        </S.Filtros>
      </div>
    </div>
  </S.Aside>
)

export default BarraLateral
