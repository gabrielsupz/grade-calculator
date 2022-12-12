import { Button } from '../../components/Button/Button'
import { Section } from '../../components/section/Section'
import * as S from './style'
export function Home() {
  return (
    <S.HomeStyled>
      <div></div>

      <S.CalcAndSignIn>
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
      </S.CalcAndSignIn>
    </S.HomeStyled>
  )
}
