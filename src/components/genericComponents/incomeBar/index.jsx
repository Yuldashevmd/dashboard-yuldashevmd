import React from 'react'
import { Container, IconBar } from './style'
import {ReactComponent as MonthSalaryIcon} from '../../../assets/dashboardHeader-icon/salary.svg'
import {ReactComponent as BudgetIcon} from '../../../assets/dashboardHeader-icon/budget.svg'
import {ReactComponent as IncomeIcon} from '../../../assets/dashboardHeader-icon/income.svg'
import ArrowUp from '../../../assets/Header-icons/arrow-up.svg'
import ArrowDown from '../../../assets/Header-icons/arrow-down.svg'
export const IncomeBar = ({data}) => {
  return (
    <Container>
      <IconBar>
        <MonthSalaryIcon/>
        <div className='icon__part'>
          <span>Oylik To'lovlar</span>
          <h2>$ {data?.monthSalary || '198k'}</h2>
          <div className='number__part'>
            <img src={ArrowUp} alt="arrow-up" />
              <p>{data?.growSalary || '37.8'}% Oylik</p>
          </div>
        </div>
      </IconBar>
      <IconBar>
        <BudgetIcon/>
        <div className='icon__part'>
          <span>Budjed</span>
          <h2>$ {data?.monthSalary || '2.4k'}</h2>
          <div className='number__part'>
            <img src={ArrowDown} alt="arrow-up" />
              <p>{data?.growSalary || '2'}% Oylik</p>
          </div>
        </div>
      </IconBar>
      <IconBar>
        <IncomeIcon/>
        <div className='icon__part'>
          <span>Soff Foyda</span>
          <h2>$ {data?.monthSalary || '89k'}</h2>
          <div className='number__part'>
            <img src={ArrowUp} alt="arrow-up" />
              <p>{data?.growSalary || '11'}% Oylik</p>
          </div>
        </div>
      </IconBar>
      
    </Container>
  )
}

export default IncomeBar