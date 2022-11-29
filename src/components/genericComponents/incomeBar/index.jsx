import React from 'react'
import { Container, IconBar } from './style'
import {ReactComponent as MonthSalaryIcon} from '../../../assets/dashboardHeader-icon/salary.svg'
import ArrowUp from '../../../assets/Header-icons/arrow-up.svg'
export const IncomeBar = ({data}) => {
  return (
    <Container>
      <IconBar>
        <MonthSalaryIcon/>
        <div className='icon__part'>
          <span>Oylik To'lovlar</span>
          <h2>$ {data?.monthSalary || '198k'}</h2>
          <div>
            <img src={ArrowUp} alt="arrow-up" />
              <p>{data?.growSalary || '37.8'}% Oylik</p>
          </div>
        </div>
      </IconBar>
      
    </Container>
  )
}

export default IncomeBar