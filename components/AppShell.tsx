import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Tabs from './pages/Tabs';
import Home from '@/components/pages/Home';
import HomePasswordConfirm from '@/components/pages/HomePasswordConfirm';

setupIonicReact({});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/" render={() => <Home />} exact={true} />
          <Route path="/confirm-password" render={() => <HomePasswordConfirm />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
