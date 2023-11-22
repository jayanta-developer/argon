/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import CarManagement from "views/examples/CarManagement.js";
import UserManagement from "views/examples/UserManagement.js";
import AddNewUser from "views/examples/AddNewUser.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fas fa-tv",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/user-management",
    name: "User Management",
    icon: "fas fa-users",
    component: <UserManagement />,
    layout: "/admin",
  },
  {
    path: "/car-management",
    name: "Car Management",
    icon: "fas fa-car",
    component: <CarManagement />,
    layout: "/admin",
  },  
];
export default routes;

