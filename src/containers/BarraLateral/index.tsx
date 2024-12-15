import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <div>
        <S.Filtros>
          <FiltroCard ativo={false} />
          <FiltroCard ativo={false} />
          <FiltroCard ativo={false} />
          <FiltroCard ativo={false} />
          <FiltroCard ativo={false} />
          <FiltroCard ativo={true} />
        </S.Filtros>
      </div>
    </div>
  </S.Aside>
)

export default BarraLateral
