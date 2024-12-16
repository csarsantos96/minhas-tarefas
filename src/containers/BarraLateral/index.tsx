import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
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

export default BarraLateral
