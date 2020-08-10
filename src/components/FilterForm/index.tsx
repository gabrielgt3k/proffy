import React, { useState, FormEvent } from 'react';
import Field from '../../components/FilterForm/components/Field';
import { Form } from './styles';
import api from '../../services/api';

interface FormProps {
  updateTeachers(teachers: Array<{
    name: string;
    avatar: string;
    subject: string;
    bio: string;
    cost: number;
    whatsapp: string;
  }>): void;
}


const FilterForm: React.FC<FormProps> = ({ updateTeachers }) => {

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time
      }
    });

    updateTeachers(response.data);

  }

  return (
    <Form onSubmit={searchTeachers}>
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
          value={weekDay}
          onChange={(event) => setWeekDay(event.target.value)}
        />
        <Field 
          type="time" 
          label="horário" 
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />

        <button type="submit">Pesquisar</button>
    </Form>
  )
}

export default FilterForm;