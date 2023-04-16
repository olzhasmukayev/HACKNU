import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import delivery from 'menu-items/delivery';
import AuthContext from 'context/AuthProvider';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    return isAuthenticated ? children : <Link to="/login" />;
};

// ==============================|| MAIN ROUTING ||============================== //


const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'delivery',
            children: [
                {
                    element: <delivery />
                }
            ]
        }
    ]
};

export default MainRoutes;
