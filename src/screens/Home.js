import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import heroImg from '../images/hero.png'
import reviewPhoto from '../images/reviewer.png'
import person from '../images/person1.png'
import quote from '../images/quote.png'
import Carousel from 'nuka-carousel'

const CTAButton = styled.button`
  font-weight: bold;
  background: #206d7e;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 4rem;
  margin-top: 40vh;
  color: white;
  outline: none;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`

const LandingDiv = styled.div`
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 60vh;
`

const Title = styled.h2`
  background-color: #33afcb;
  color: white;
  font-size: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
`

const HomeText = styled.div`
  margin: 0.5rem 3rem;
  margin-bottom: 2rem;
  font-style: italic;
  font-size: 0.9rem;
`

export default function Home() {
  return (
    <>
      <LandingDiv>
        <Link to="/make-appointment/">
          <CTAButton>ЗАПАЗВАНЕ НА ЧАС</CTAButton>
        </Link>
      </LandingDiv>

      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} style={{ fontSize: '1.8rem' }}>
            ◀️
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} style={{ fontSize: '1.8rem' }}>
            ▶️
          </button>
        )}
        wrapAround
        autoplay
        style={{ margin: '0.5rem', padding: '2rem' }}
      >
        <div>
          <div
            style={{
              marginTop: '2rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              style={{ maxWidth: 60, marginRight: '20px' }}
              src={reviewPhoto}
              alt="review"
            />
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: '1.6rem',
                fontWeight: '700'
              }}
            >
              МАРИЯ ИВАНОВА
            </p>
          </div>
          <img
            style={{ maxWidth: 30, marginRight: '20px' }}
            src={quote}
            alt="review"
          />
          <HomeText>
            Миналата година подмених старите си коронки с циркониеви и проведох
            цялостно лечение на зъбите си в изнесения кабинет на Дентапрайм в
            Гранд мол по прецизно изработен индивидуален план. Изключително съм
            доволна от постигнатия резултат, от високия професионализъм на целия
            лекуващ ме екип начело с д-р Герчева и от цялостното мед.обслужване,
            за което им благодаря.
          </HomeText>
        </div>
        <div>
          <div
            style={{
              marginTop: '2rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              style={{ maxWidth: 60, marginRight: '20px' }}
              src={person}
              alt="review"
            />
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: '1.6rem',
                fontWeight: '700'
              }}
            >
              ТАНЯ КОЙЧЕВА
            </p>
          </div>
          <img
            style={{ maxWidth: 30, marginRight: '20px' }}
            src={quote}
            alt="review"
          />
          <HomeText>
            Адмирации за д-р Гарчева асистент Боряна Йорданова! Да изпиташ
            удоволствие от зъболекар е рядко явление, но не невъзможно! Така се
            чувствувах в ръцете на тези две млади момичета, чийто любов към
            професията беше очевадна! Аплодисменти и за вежливата, любезна М.
            Панайотова – изчерпателна в информацията си!
          </HomeText>
        </div>
        <div>
          <div
            style={{
              marginTop: '2rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              style={{ maxWidth: 60, marginRight: '20px' }}
              src={person}
              alt="review"
            />
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: '1.6rem',
                fontWeight: '700'
              }}
            >
              ИВАНА КОСЕВА
            </p>
          </div>
          <img
            style={{ maxWidth: 30, marginRight: '20px' }}
            src={quote}
            alt="review"
          />
          <HomeText>
            Изключително съм доволна от обслужването. 7-годишната ми дъщеря
            също. Това за нея беше първото й посещение при зъболекар и беше
            доста притеснена, но всички бяха толкова мили и зъболекарката така
            добре я предразположи, че дъщеря ми беше супер доволна.
          </HomeText>
        </div>
      </Carousel>
      <Title>Доктори</Title>
      <HomeText>
        Лекарският екип на „Медикал лайф“ предлага диагностика и извънболнично
        лечение на заболявания в 18 специалности: Акушерство и гинекология,
        Вътрешни болести, Гастроентерология, Стоматология, Детска нефрология,
        Детски болести, Ендокринология и болести на обмяната, Кардиология, Кожни
        и венерически болести, Неврология, Нефрология, Ортопедия и
        травматология, Очни болести, УНГ, Урология, Хирургия, Съдова хирургия,
        Физиотерапия и рехабилитация. Информация за лекарите и приемно време в
        „Медикал Лайф“ е публикувана в сайта на медицинския център{' '}
      </HomeText>
      <Link to="/doctors/">
        <Button style={{ width: '50%' }} color="primary">
          ДОКТОРИ
        </Button>
      </Link>
    </>
  )
}
