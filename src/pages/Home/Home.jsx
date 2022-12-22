import { AlertMessage } from '../../components/AlertMessage/AlertMessage'
import { Button } from '../../components/Button/Button'
import { InfoMessage } from '../../components/InfoMessage/InfoMessage'
import { Section } from '../../components/Section/Section'
import { useAuth } from '../../providers/hook'
import * as S from './style'
export function Home() {
  const { period } = useAuth()

  return (
    <S.HomeStyled>
      <S.leftMessages>
        <InfoMessage period={period} />

        <AlertMessage
          text="Calcule a sua nota final ou a nota que precisa tirar para atingir a
        média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas"
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
          <S.NoticeDiv>Logue para mais funcionalidades.</S.NoticeDiv>
          <Button title="Veja seus modelos" />{' '}
          <Button title="Crie seu modelo" />
        </div>
      </S.asideFlex>
    </S.HomeStyled>
  )
}
