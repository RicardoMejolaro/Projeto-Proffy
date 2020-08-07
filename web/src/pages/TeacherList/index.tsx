import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';


function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

   const response = await api.get('proffy/classes', {
      params: {
        subject,
        week_day: Number(week_day),
        time,
      }
    });

    if (response.data != "") {
      setTeachers(response.data);
    } else {
      alert('Não foi encontrado nenhum professor com os dados informados :(!')
    }
    
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name="subject" 
            label="Matéria:"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Inglês', label: 'Inglês' }
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da semana:"
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-Feira' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' }
            ]}
          />
          <Input 
            type="time" 
            name="time" 
            label="Hora:"
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
          />

          <button 
            type="submit">
              Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        { teachers.map((teachers: Teacher) => {
          return <TeacherItem key={teachers.id} teacher={teachers} />
        })}
        
      </main>
    </div>
  )
}

export default TeacherList;