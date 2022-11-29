import KeyIcon from "../assets/Dashboard-icons/key-square.svg";
import Squere from "../assets/Dashboard-icons/3d-square.svg";
import UserSquere from "../assets/Dashboard-icons/user-square.svg";
import WalletMoney from "../assets/Dashboard-icons/wallet-money.svg";
import Help from "../assets/Dashboard-icons/message-question.svg";
import GenericPage from "../genericPage";
import DashboardPage from "../components/dashboardPage";


export const dashList = [
  {
    id: 1,
    title: "Dashboard",
    path:'/dashboard',
    component: <DashboardPage />,
    icon: KeyIcon,
  },
  {
    id: 2,
    title: "Guruhlar",
    path: "/guruhlar",
    component: <GenericPage />,
    icon: Squere,
  },
  {
    id: 3,
    title: "Dars jadvali",
    path: "/dars-jadvali",
    component: <GenericPage />,
    icon: UserSquere,
  },
  {
    id: 4,
    title: "Sozlamalar",
    path: "/sozlamalar",
    component: <GenericPage />,
    icon: WalletMoney,
  },
  {
    id: 5,
    title: "Yordam",
    path: "/yordam",
    component: <GenericPage />,
    icon: Help,
  },
];
