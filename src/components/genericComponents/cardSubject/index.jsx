import React from 'react'
import { Card, DatePart, Form, SubjectPart, TeacherPart } from './style'

export const CardSubject = ({data}) => {
  return (
    <Card props={data?.subject || false}>
        <DatePart>
            <p className='date'>December 20, 2022</p>
            <p>:</p>
        </DatePart>
        <SubjectPart>
            <h2>{data?.group || 'Frontend 010'}</h2>
            <p>O'quvchilar soni : {data?.pupil || '6'}</p>
            <Form>
                <label htmlFor="range">O'rtacha o'z</label>
                <input type="range" defaultValue={70}/>
                <p>70%</p>
            </Form>
        </SubjectPart>
        <TeacherPart>
            <p>O'qituvchi</p>
            <button>+</button>
        </TeacherPart>
    </Card>
  )
}
export default CardSubject
