import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DatePicker, Space } from 'antd';
import { AddCustomerAction } from '../../store/reducer/customer';



function FirstPages() {
    const [phone, setPhone] = useState('');
    const [secondPhone, setSecondPhone] = useState('')
    const [address, setAddress] = useState('');
    const [room, setType] = useState('');
    const [roomID, setNumber] = useState('')
    const [date, setDate] = useState('')

    console.log(date)

    const dispatch = useDispatch()

    

    const AddInfo = () => {
        const info = {
            id: Date.now(),
            phone,
            secondPhone,
            address,
            room,
            roomID
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