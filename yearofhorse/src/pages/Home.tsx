import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import "./Home.css";
import React from "react";
import '../index.css';
import success from '../images/successisnotstraight-part2.jpg';

const Home: React.FC = () => {
  return (
    <IonPage className="background">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="title">Year of the horse</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="homeIMG">
          <img className="succ" src={success} alt='success' />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
