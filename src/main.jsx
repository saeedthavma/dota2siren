import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import ContextProvider from './container/Context.jsx';
import Landpage from './components/landpage/Landpage.jsx';
import Tournament from './components/tournament/Tournament.jsx';
import Signplayer from './components/signplayer/Signplayer.jsx';
import Signteam from './components/signteam/Signteam.jsx';
import CreateTournamet from './components/create_tournament/CreateTournamet.jsx';
import UserPanel from './components/user_panel/UserPanel.jsx';
import SignArea from './components/sign_area/SignArea.jsx';
import PlayerList from './components/player_list/PlayerList.jsx';
import Hosting from './components/hosting/Hosting.jsx';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Landpage />
  },
  {
    path: "/tournament",
    element: <Tournament />
  },
  {
    path: "/signplayer",
    element: <Signplayer />
  },
  {
    path: "/signteam",
    element: <Signteam />
  },
  {
    path: "/create_tournament",
    element: <CreateTournamet />
  },
  {
    path: "/user_panel",
    element: <UserPanel />
  },
  {
    path: "/login",
    element: <SignArea />
  },
  {
    path: "/playerlist",
    element: <PlayerList />
  },
  {
    path: "/Hosting",
    element: <Hosting />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </ContextProvider>,
)
