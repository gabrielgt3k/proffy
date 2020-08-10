import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { TeacherItemArticle ,TeacherItemHeader, TeacherItemFooter } from './styles';
import api from '../../services/api';

export interface Teacher {
    id?: number;
    name: string;
    avatar: string;
    subject: string;
    bio: string;
    cost: number;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <TeacherItemArticle>
        <TeacherItemHeader>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
        </div>
        </TeacherItemHeader>

        <p>
            {teacher.bio}
        </p>

        <TeacherItemFooter>
            <p>
            Preço/hora
            <strong>R$ {teacher.cost}</strong>
            </p>

            <a target="_blank" onClick={createNewConnection} href={`http://wa.me/${teacher.whatsapp}`}>
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
            </a>
        </TeacherItemFooter>
    </TeacherItemArticle>
  );
}

export default TeacherItem;