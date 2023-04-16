// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const delivery = {
    id: 'delivery',
    title: 'Delivery',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Delivery',
            type: 'item',
            url: '/delivery/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default delivery;
