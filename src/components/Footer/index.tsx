import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Youtube
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <Link href="/">home</Link>
        <Link href="/store">Store</Link>
        <Link href="/games">Games</Link>
        <Link href="/search">Search</Link>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2022 © Todos os Direitos Reservados</S.Copyright>
  </S.Wrapper>
)

export default Footer
