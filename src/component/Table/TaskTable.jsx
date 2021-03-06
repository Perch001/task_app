import React from 'react'
import {useSelector} from 'react-redux'

import { Table } from 'antd';


function TaskTable() {
  const columns = [
    {
        "title": "ID",
        "dataIndex": "id",
        "key": "id",
        sorter: (a, b) => a.id - b.id
    },
    {
        "title": "Статус",
        "dataIndex": "status",
        "key": "status"
    },
    {
        "title": "Адрес",
        "dataIndex": "address",
        "key": "address"
    },
    {
        "title": "Помещение",
        "dataIndex": "room",
        "key": "room"
    },
    {
        "title": "Номер помещ.",
        "dataIndex": "roomID",
        "key": "roomID"
    },
    {
        "title": "Тел. заявителя",
        "dataIndex": "phone",
        "key": "phone"
    },
    {
        "title": "Описание",
        "dataIndex": "distraction",
        "key": "distraction"
    },
    {
        "title": "Дата создания",
        "dataIndex": "date",
        "key": "date"
    },
    {
        "title": "Срок исполнения",
        "dataIndex": "term",
        "key": "term"
    },
    {
        "title": "Категория работ",
        "dataIndex": "category",
        "key": "category"
    },
    {
        "title": "Исполнитель",
        "dataIndex": "executor",
        "key": "executor"
    },
    {
        "title": "Стоимость",
        "dataIndex": "cost",
        "key": "cost"
    },
    {
        "title": "Оценка",
        "dataIndex": "evaluation",
        "key": "evaluation"
    },
    

]
  const customer = useSelector(state => state.customer)
  return (
    <>
        <Table dataSource={customer} columns={columns} />
    </>
  )
}

export default TaskTable