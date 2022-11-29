import React from 'react'
import { Container, IconBar } from './style'
import ArrowUp from '../../../assets/Header-icons/arrow-up.svg'
import ArrowDown from '../../../assets/Header-icons/arrow-down.svg'
import {ReactComponent as AllUserIcon} from '../../../assets/Header-icons/usersAll.svg'
import {ReactComponent as GraduatedUserIcon} from '../../../assets/Header-icons/userGraduated.svg'
import {ReactComponent as LeaveUser} from '../../../assets/Header-icons/leaveUser.svg'
import {ReactComponent as ActiveUserIcon} from '../../../assets/Header-icons/userActive.svg'
export const StatusBar = ({data}) => {
  return (
    <Container>
    <IconBar>
      <AllUserIcon/>
      <div className='icon__part'>
        <span>Hamma o'quvchilar</span>
        <h2> {data?.monthSalary || '125'}ta</h2>
        <div className='number__part'>
          <img src={ArrowUp} alt="arrow-up" />
            <p>{data?.growSalary || '16'}% Oylik</p>
        </div>
      </div>
    </IconBar>
    <IconBar>
      <GraduatedUserIcon/>
      <div className='icon__part'>
        <span>Bitirgan o'quvchilar</span>
        <h2>{data?.monthSalary || '61'}ta</h2>
      </div>
    </IconBar>
    <IconBar>
      <LeaveUser/>
      <div className='icon__part'>
        <span>Ketgan O'quvchilar</span>
        <h2> {data?.monthSalary || '10'}ta</h2>
        <div className='number__part'>
          <img src={ArrowDown} alt="arrow-up" />
            <p>{data?.growSalary || '1'}% Oylik</p>
        </div>
      </div>
    </IconBar>
    <IconBar>
      <ActiveUserIcon/>
      <div className='icon__part'>
        <span>Faol o'quvchilar</span>
        <h2>{data?.monthSalary || '54'}ta</h2>
      </div>
    </IconBar>
    
  </Container>
  )
}

export default StatusBar