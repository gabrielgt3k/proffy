import React, { useState } from 'react';
import { Container, Main } from './styles';
import PageHeader from '../../components/PageHeader';
import FilterForm from '../../components/FilterForm';
import TeacherItem, { Teacher } from '../../components/TeacherItem';


const TeacherList: React.FC = () => {

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  function updateTeachers(teachersParam: Array<Teacher>): void {
    setTeachers(teachersParam);
  }


  return (
      <Container>
        <PageHeader 
          title="Estes são os proffys disponíveis."
        >
          <FilterForm updateTeachers={updateTeachers} />
        </PageHeader>

      <Main>
        {(teachers.length > 0) && teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </Main>
      </Container>
  )
}

export default TeacherList;