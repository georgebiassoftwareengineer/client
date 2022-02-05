import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettigns = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettigns
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
