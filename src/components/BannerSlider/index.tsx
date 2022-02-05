import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettigns } from 'components/Slider'

import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettigns = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
