import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DatePicker, Space, Select } from 'antd';
import { message } from 'antd';
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



    const dispatch = useDispatch()


    const date = moment(startDate).format('LL')
    const term = moment(endDate).format('LL')



    const check = (e) => {
        setIsChecked(e.target.checked)
    }
    const handleChange = (value) => {
        setCategory(value);
    };
    const handleChangeType = (value) => {
        setType(value);
    };


    const error = () => {
        message.error('This is an error message');
    };
    const success = () => {
        message.success('This is a success message');
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
        success()
        dispatch(AddCustomerAction(info))
    }

  return (
    <>
        <div>
            <div className='tb-1'>
                <div>
                    <div>Телефон заявителя</div>
                    <input onChange={e => setPhone(e.target.value)}/>
                </div>
                <div className='phone'>
                    <div>Дополнительный телефон</div>
                    <input onChange={e => setSecondPhone(e.target.value)}/>
                </div>
            </div>


            <div className='tb-2'>
                <div>
                    <div>Адрес</div>
                    <input onChange={e => setAddress(e.target.value)}/>
                </div>
                <div>
                    <div>Тип помещения</div>
                    <Select
                        style={{
                            width: 200,
                        }}
                        placeholder="Тип помещения"
                        onChange={handleChangeType}
                    >
                        <Option value="Жилой&#160;дом">Жилой дом</Option>
                        <Option value="Квартира">Квартира</Option>
                        <Option value="Комната">Комната</Option>
                        <Option value="Другое">Другое</Option>
                    </Select>
                </div>
                <div>
                    <div>Номер помещения</div>
                    <input onChange={e => setNumber(e.target.value)}/>
                </div>
            </div>



            <div className='tb-3'>
                <div>Категории работ</div>
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Please select"
                    onChange={handleChange}
                >
                    <Option value='Сантехника '>Сантехника</Option>
                    <Option value='Электрика '>Электрика</Option>
                    <Option value='Уборка '>Уборка</Option>
                    <Option value='Отопление '>Отопление</Option>
                    <Option value='Гарантийные&#160;работы '>Гарантийные работы</Option>
                    <Option value='Видеонаблюдение '>Видеонаблюдение</Option>
                    <Option value='Ремонтные&#160;работы '>Ремонтные работы</Option>
                    <Option value='Вентиляция '>Вентиляция</Option>
                    <Option value='Плотнические&#160;работы '>Плотнические работы</Option>
                    <Option value='Ремонтные&#160;работы '>Ремонтные работы</Option>
                    <Option value='Дезинфекция&#160;и&#160;дератизация '>Дезинфекция и дератизация</Option>
                    <Option value='Пожарная&#160;безопасность '>Пожарная безопасность</Option>
                    <Option value='Благоустройство '>Благоустройство</Option>
                    <Option value='Домофон '>Домофон</Option>
                    <Option value='Лифтовое&#160;оборудование '>Лифтовое оборудование</Option>
                    <Option value='Охрана '>Охрана</Option>
                    <Option value='Прочее '>Прочее</Option>
                </Select>
            </div>


            <div className='tb-4'>
                <textarea cols="100" onChange={e => setDescription(e.target.value) }></textarea>
            </div>

            <div className='tb-5'>
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