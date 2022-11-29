import Dashboard from "../components/dashboardSidebar";
import Key from "../assets/Dashboard-icons/key-square.svg";
import Squere from "../assets/Dashboard-icons/3d-square.svg";
import UserSquere from "../assets/Dashboard-icons/user-square.svg";
import WalletMoney from "../assets/Dashboard-icons/wallet-money.svg";

export const dashList = [{
        id: 1,
        title: "Dashboard",
        path: "/",
        component: < Dashboard / > ,
        icon: "",
    },
    {
        id: 2,
        title: "Guruhlar",
        path: "/guruhlar",
        component: < Generic / > ,
        icon: "",
    },
    {
        id: 3,
        title: "Dars jadvali",
        path: "/dars-jadvali",
        component: < Generic / > ,
        icon: "",
    },
    {
        id: 4,
        title: "Sozlamalar",
        path: "/sozlamalar",
        component: < Generic / > ,
        icon: "",
    },
    {
        id: 5,
        title: "Yordam",
        path: "/yordam",
        component: < Generic / > ,
        icon: "",
    },
];