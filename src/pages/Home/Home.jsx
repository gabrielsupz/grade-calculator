import { AlertMessage } from '../../components/AlertMessage/AlertMessage'
import { Button } from '../../components/Button/Button'
import { InfoMessage } from '../../components/InfoMessage/InfoMessage'
import { Section } from '../../components/Section/Section'
import * as S from './style'
export function Home() {
  return (
    <S.HomeStyled>
      <S.leftMessages>
        <InfoMessage
          text=" São contadas as notas dos 4 bimestres, sendo que a ultima tem seu valor
        dobrado"
        />

        <AlertMessage
          text="Calcule a sua nota final ou a nota que precisa tirar para atingir a
        média"
        />
      </S.leftMessages>

      <Section />

      <S.asideFlex>
        <div>
          <Button title="Entre" />
          <Button title="Registre-se" />
        </div>

        <div>
          {' '}
          <Button title="Logue para mais funcionalidades" />{' '}
          <Button title="Veja seus modelos" />{' '}
          <Button title="Crie seu modelo" />
        </div>
      </S.asideFlex>
    </S.HomeStyled>
  )
}
