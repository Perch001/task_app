import React, {useState} from 'react'
import { SearchOutlined, FileExcelOutlined} from '@ant-design/icons';
import { DatePicker } from 'antd';
import { Button, Modal } from 'antd';
import ModalWindow from '../ModalWindow/ModalWindow';



const { RangePicker } = DatePicker;
function NavButtons() {
    // const onChange = (date, dateString) => {
    //     console.log(date, dateString);
    //   };


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

  return (
    <>
    <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={false} width={700}>
        <ModalWindow/>
      </Modal>
        <div className='NavButtons'>
          <button className='btn' onClick={showModal}> + Создать</button>
          <div className='text'>от/до</div>
          <RangePicker />
          <button className='search'>
              <SearchOutlined className='icon'/>
          </button>
          <button className='remove'>Сбросить фильтр</button>
          <button className='btn'> <FileExcelOutlined /> Экспорт</button>
        </div>
    </>
  )
}

export default NavButtons