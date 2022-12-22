import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSplitPane,
  IonMenu,
  IonRouterOutlet,
  IonMenuToggle,
  IonItem,
  IonIcon,
} from "@ionic/react";
import {
  homeSharp,
  sparklesOutline,
} from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import First from './2022';
import Second from "./2023";
import Third from "./2028";
import Fourth from "./2033";
import Fifth from "./2038";


const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/Home", icon: homeSharp },
    { name: "2022", url: "/app/First", icon: sparklesOutline },
    { name: "2023", url: "/app/Second", icon: sparklesOutline },
    { name: "2028", url: "/app/Third", icon: sparklesOutline },
    { name: "2033", url: "/app/Fourth", icon: sparklesOutline },
    { name: "2038", url: "/app/Fifth", icon: sparklesOutline },
  ];

  return (
    <IonPage>
      <IonSplitPane when="ios" contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="forward">
                  <IonIcon size="large" slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/app/Home" component={Home} />
          <Route exact path="/app/First" component={First} />
          <Route exact path="/app/Second" component={Second} />
          <Route exact path="/app/Third" component={Third} />
          <Route exact path="/app/Fourth" component={Fourth} />
          <Route exact path='/app/Fifth' component={Fifth} />

          <Route exact path="/app">
            <Redirect to="/app/Home" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
