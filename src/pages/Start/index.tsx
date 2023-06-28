import { Context } from '../../Context'
import { useContext, useState } from 'react'
import { HeaderStart } from '../../components/HeaderStart'
import { StartStyle, Title, ButtonStart, Warning, Form } from './style'
import logo from '../../assets/logo.png'
import { Navigate, useNavigate } from 'react-router-dom'

export function Start() {
  const { isDarkTheme, setUser, user } = useContext(Context)

  const [name, setName] = useState<string>('')

  const navigate = useNavigate()

  return user == null ? (
    <>
      <HeaderStart />
      <StartStyle background_color={isDarkTheme ? '#323232' : 'white'}>
        <figure>
          <img src={logo} alt='Logo Done' />
        </figure>

        <Title color={isDarkTheme ? 'white' : 'black'}>
          Seu organizador de <span>tarefas.</span>
        </Title>

        <Form
          color={isDarkTheme ? 'white' : 'black'}
          background_color={isDarkTheme ? '#3c3c3c' : '#F2F2F2'}
          onSubmit={() => {
            localStorage.setItem(
              '@TASKS',
              JSON.stringify({ user: name, tasks: [] })
            )
            setUser({ user: name, tasks: [] })
            navigate('/home', { replace: true })
          }}
        >
          <label htmlFor='name'>Qual é o seu nome?</label>
          <input
            id='name'
            type='text'
            placeholder='Digite aqui'
            onChange={(event) => setName(event.target.value)}
            required
          />

          <ButtonStart type='submit'>iniciar</ButtonStart>
        </Form>

        <Warning color={isDarkTheme ? 'white' : 'black'}>
          Atenção: as tarefas ficarão armazenadas apenas neste navegador não
          sendo possível acessar às tarefas aqui criadas em diferentes
          dispositivos
        </Warning>
      </StartStyle>
    </>
  ) : (
    <Navigate to={'/home'} />
  )
}
