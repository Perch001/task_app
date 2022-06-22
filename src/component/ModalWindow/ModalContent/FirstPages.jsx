import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DatePicker, Space } from 'antd';
import { AddCustomerAction } from '../../store/reducer/customer';
import moment from 'moment';



function FirstPages() {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState ('active')
    const [isChecked, setIsChecked] = useState('')
    const [secondPhone, setSecondPhone] = useState('')
    const [address, setAddress] = useState('');
    const [room, setType] = useState('');
    const [roomID, setNumber] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())




    const dispatch = useDispatch()
    const date = moment(startDate).format('LL')
    const term = moment(endDate).format('LL')
    const check = (e) => {
        setIsChecked(e.target.checked)
    }

    const AddInfo = () => {
        const info = {
            id: Date.now(),
            phone,
            status,
            secondPhone,
            address,
            room,
            roomID,
            date,
            cost: isChecked ? 'Free' : "???",
            term
        }
        dispatch(AddCustomerAction(info))
    }

  return (
    <>
        <div>
            <div className='phone'>
                <div>
                    <div>Phone</div>
                    <input onChange={e => setPhone(e.target.value)}/>
                </div>
                <div>
                    <div>Phone</div>
                    <input onChange={e => setSecondPhone(e.target.value)}/>
                </div>
            </div>


            <div className='phone'>
                <div>
                    <div>Address</div>
                    <input onChange={e => setAddress(e.target.value)}/>
                </div>
                <div>
                    <div>Type</div>
                    <input onChange={e => setType(e.target.value)}/>
                </div>
                <div>
                    <div>Number</div>
                    <input onChange={e => setNumber(e.target.value)}/>
                </div>
            </div>


            <div className='phone'>
                <div>
                    <DatePicker onChange={(date) => setEndDate(date)}/>
                </div>
                <div>
                    <input className='check' type="checkbox" onClick={check}/> Free
                </div>
            </div>
        </div>
        <div>
            <button onClick={() => AddInfo()}>Create</button>
        </div>
    </>
  )
}

export default FirstPages