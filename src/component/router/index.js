
import Applications from '../pages/Applications'
import Notifications from '../pages/Notifications'

import Analytics  from '../pages/Analytics'
import Residents  from '../pages/Residents'
import Staff  from '../pages/Staff'
import AtHome  from '../pages/AtHome'
import UK from '../pages/UK'

export const RouterDom = [
    {path: '/', element: <Applications />, exact: true}, //Заявки
    {path: '/notifications', element: <Notifications  />, exact: true}, //Уведомления
    {path: '/Analytics', element: <Analytics  />, exact: true}, //Аналитика
    {path: '/Residents', element: <Residents  />, exact: true}, //Жители
    {path: '/Staff', element: <Staff  />, exact: true}, //Сотрудники   
    {path: '/AtHome', element: <AtHome  />, exact: true}, //Дома   
    {path: '/UK', element: <UK  />, exact: true}, //УК   
]