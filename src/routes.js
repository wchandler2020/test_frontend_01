import React, {useContext} from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdOutlineGroups
} from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/profile/Profile";
import About from "views/admin/about/About";
import DataTables from "views/admin/dataTables";
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import Login from 'layouts/login/Login';
import Mfa from 'layouts/mfa';
import UserProvider, {UserContext } from 'contexts/UserContext';
import {  Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';




const routes = [
  {
    name: "Client Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Meet The Team",
    layout: "/admin",
    icon: <Icon as={MdOutlineGroups} width='20px' height='20px' color='inherit' />,
    path: "/our-team",
    component: DataTables,
  },
  {
    name: "Get To Know Jorie",
    layout: "/admin",
    path: "/about",
    icon: <Icon as={TbBrandGoogleAnalytics} width='20px' height='20px' color='inherit' />,
    component: About,
  }  
];

function PrivateRoute({ children,  ...rest }) {
  const {isAuth} = useContext(UserContext)
  if(!isAuth){
    return <Redirect to="/login" />
  }
  return children
}

function VerifiedRoute({ children,  ...rest }) {
  const {isVerified} = useContext(UserContext)
  if(!isVerified){
   return <Redirect to="/mfa" />
  }
  return children
}


export const RoutesComponent  = () =>{
    return (
    <BrowserRouter>
    	<UserProvider>

      <Switch>
        <Route path={`/login`} component={Login} />
          
       <PrivateRoute>
          <Route path={`/mfa`} component={Mfa} />
          <VerifiedRoute>
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/rtl`} component={RtlLayout} />
            <Redirect from='/' to='/admin' />
            
          </VerifiedRoute>
          
        </PrivateRoute>
      
        
        
      </Switch>
      </UserProvider>

    </BrowserRouter>
    )
}

export default routes;
