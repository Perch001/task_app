import React from 'react'
import { Tabs } from 'antd';
import FirstPages from './ModalContent/FirstPages';
import SecondPages from './ModalContent/SecondPages';
const { TabPane } = Tabs;


function ModalWindow() {
  return (
    <>
        <Tabs defaultActiveKey="1">
            <TabPane tab="Заявка от жителя" key="1">
                <FirstPages/>
            </TabPane>
            <TabPane tab="Внутренняя заявка" key="2" className='first'>
                <SecondPages/>
            </TabPane>
        </Tabs>
    </>
  )
}

export default ModalWindow