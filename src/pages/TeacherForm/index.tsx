import React, { useState, FormEvent } from 'react';
import { Container, Main, Fieldset, Footer, ScheduleItem } from './styles';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Field from './components/Field';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

interface ScheduleItems {
  week_day: number;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to:'' }
  ]);

  function handleAddNewScheduleItem() {

    setScheduleItems([
      ...scheduleItems, 
      { week_day: 0, from: '', to:'' }
    ]);
  }

  function handleCreateClass(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('cadastro realizado com sucesso.');
      history.push('/');
    }).catch((err) => {
      alert('Erro ao realizar o cadastro');
    })

  }

  function setScheduleItemValue(position: number, field: string, value: string): void {

    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
      <Container>
        <PageHeader 
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo, é preencher esse
          formulário de inscrição."
        />

        <Main>
          <form onSubmit={handleCreateClass}>
            <Fieldset>
              <legend>Seus dados</legend>
              <Field 
                label="Nome Completo" 
                name="name" value={name} 
                onChange={(event) => setName(event.target.value)} 
              />
              <Field 
                label="Avatar" 
                name="avatar" 
                value={avatar} 
                onChange={(event) => setAvatar(event.target.value)} 
                />
              <Field 
                label="Whatsapp" 
                name="whatsapp" 
                value={whatsapp} 
                onChange={(event) => setWhatsapp(event.target.value)} 
              />
              <Field 
                fieldType="textarea" 
                label="Biografia" 
                name="bio" 
                value={bio} 
                onChange={(event) => setBio(event.target.value)} 
              />
            </Fieldset>

            <Fieldset>
              <legend>Sobre a aula</legend>
              <Field 
                fieldType="select" 
                label="Matéria" 
                name="subject"
                options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'História', label: 'História' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Química', label: 'Química' },
                  { value: 'Português', label: 'Português' }
                ]}
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
              <Field 
                label="Custo da sua aula por hora" 
                name="cost" 
                value={cost}
                onChange={(event) => setCost(event.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <legend>
                Horários disponíveis
                <button type="button" onClick={handleAddNewScheduleItem}>+ Novo horário</button>
              </legend>

              {scheduleItems.map((scheduleItem, index) => (
                <ScheduleItem key={scheduleItem.week_day}>
                  <Field 
                    fieldType="select" 
                    label="Dia da semana" 
                    name="week_day"
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                    onChange={(event) => setScheduleItemValue(index, 'week_day', event.target.value)}
                    value={scheduleItem.week_day}
                  />
                  <Field 
                    type="time" 
                    label="Das" 
                    name="from"
                    value={scheduleItem.from}
                    onChange={(event) => setScheduleItemValue(index, 'from', event.target.value)}
                  />
                  <Field 
                    type="time" 
                    label="Até" 
                    name="to"
                    value={scheduleItem.to}
                    onChange={(event) => setScheduleItemValue(index, 'to', event.target.value)}
                  />
                </ScheduleItem>
              ))}
            </Fieldset>
            <Footer>
            <p>
              <img src={warningIcon} alt="Warning"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </Footer>
          </form>
        </Main>
      </Container>
  )
}

export default TeacherForm;