import { useRoutes} from 'react-router-dom';
import { routerCustomer } from './RouterCustomer';
import { routerAdmin } from './RouterAdmin';

const AppRouter = () => {
    const role = "SUPER_ADMIN";
    
    const router = role === "SUPER_ADMIN" ? routerAdmin : routerCustomer;
    return (
        useRoutes(router)
    )
}

export default AppRouter;