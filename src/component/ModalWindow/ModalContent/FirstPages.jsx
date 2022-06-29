import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DatePicker, Space, Select } from 'antd';
import { AddCustomerAction } from '../../store/reducer/customer';
import moment from 'moment';
const { Option } = Select;


function FirstPages() {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState ('Принята')
    const [isChecked, setIsChecked] = useState('')
    const [secondPhone, setSecondPhone] = useState('')
    const [address, setAddress] = useState('');
    const [room, setType] = useState('');
    const [roomID, setNumber] = useState('')
    const [distraction, setDescription] = useState('' || 'text')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [category, setCategory] = useState('')



const { Option } = Select;
    const dispatch = useDispatch()
    const date = moment(startDate).format('LL')
    const term = moment(endDate).format('LL')
    const check = (e) => {
        setIsChecked(e.target.checked)
    }
    const handleChange = (value) => {
        setCategory(value);
    };

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
            cost: isChecked ? 'Платная' : "Бесплатно",
            term,
            distraction,
            category
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
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        marginTop: '20px',
                        width: '100%',
                    }}
                    placeholder="Please select"
                    onChange={handleChange}
                >
                    <Option value='Сантехника '>Сантехника</Option>
                    <Option value='Электрика '>Электрика</Option>
                    <Option value='Уборка '>Уборка</Option>
                    <Option value='Отопление '>Отопление</Option>
                    <Option value='Гарантийные_работы '>Гарантийные работы</Option>
                    <Option value='Видеонаблюдение '>Видеонаблюдение</Option>
                    <Option value='Ремонтные_работы '>Ремонтные работы</Option>
                    <Option value='Вентиляция '>Вентиляция</Option>
                    <Option value='Плотнические_работы '>Плотнические работы</Option>
                    <Option value='Ремонтные работы '>Ремонтные работы</Option>
                    <Option value='Дезинфекция_и_дератизация '>Дезинфекция и дератизация</Option>
                    <Option value='Пожарная_безопасность '>Пожарная безопасность</Option>
                    <Option value='Благоустройство '>Благоустройство</Option>
                    <Option value='Домофон '>Домофон</Option>
                    <Option value='Лифтовое_оборудование '>Лифтовое оборудование</Option>
                    <Option value='Охрана '>Охрана</Option>
                    <Option value='Прочее '>Прочее</Option>
                </Select>
            </div>


            <div className='phone'>
                <textarea cols="68"  style={{marginBottom: '40px', marginTop: '20px'}} onChange={e => setDescription(e.target.value) }></textarea>
            </div>

            <div className='phone'>
                <div>
                    <DatePicker onChange={(date) => setEndDate(date)}/>
                </div>
                <div>
                    <input className='check' type="checkbox" onClick={check}/> Платная
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