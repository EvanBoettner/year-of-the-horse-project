import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import "./Home.css";
import React from "react";
import "../index.css";
import Advance from "../images4/advance.jpg";
import More from "../images4/alwaysMore.webp";
import MBA from "../images4/MBA.png";
import Time from "../images4/time.png";
import Leadership from "../images4/Leadership.jpg";
import Chan from "../images2/Change.jpg";
import Same from "../images2/Same.jpg";
import Dream from "../images4/chase-your-dream.webp";
import Curry4 from "../images4/Japanese-Chicken-Curry4.jpg";
import Fortune4 from "../images4/National-Fortune-Cookie-Day-quotes-jokes-background.jpg";
import Success from "../images4/success.jpg";

const Fourth: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="title">The Year 2033</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Advance}
            />
            <IonCardHeader>
              <IonCardTitle>
                When you think about the last year what was it about?
              </IonCardTitle>
              <IonCardSubtitle>Question 1</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Last year was about career advancement.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={More}
            />
            <IonCardHeader>
              <IonCardTitle>What were the lessons you learned?</IonCardTitle>
              <IonCardSubtitle>Question 2</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              There always more to learn and more room to grow.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img className="card1IMG" alt="Silhouette of mountains" src={MBA} />
            <IonCardHeader>
              <IonCardTitle>What did you earn over the last year?</IonCardTitle>
              <IonCardSubtitle>Question 3</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I earned an MBA in Product Management.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Time}
            />
            <IonCardHeader>
              <IonCardTitle>What did you lose?</IonCardTitle>
              <IonCardSubtitle>Question 4</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I lost time working towards my degree.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Leadership}
            />
            <IonCardHeader>
              <IonCardTitle>
                What were some things that you gained?
              </IonCardTitle>
              <IonCardSubtitle>Question 5</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Leadership and business development.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Chan}
            />
            <IonCardHeader>
              <IonCardTitle>What would you change?</IonCardTitle>
              <IonCardSubtitle>Question 6</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I didn't do everthing right but I wouldn't change anything, I
              believe that certain things need to happen in order for you to
              grow.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Same}
            />
            <IonCardHeader>
              <IonCardTitle>What would stay the same?</IonCardTitle>
              <IonCardSubtitle>Question 7</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Everything would stay the same I am very happy with my growth I
              plan to go much higher in my career and I see my path to the top.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Dream}
            />
            <IonCardHeader>
              <IonCardTitle>What was your wish for the last year?</IonCardTitle>
              <IonCardSubtitle>Question 8</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              My wish was to be able to keep chasing my dreams and goals.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questionss">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Curry4}
            />
            <IonCardHeader>
              <IonCardTitle>What was your favorite dish or food?</IonCardTitle>
              <IonCardSubtitle>Question 9</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              My favorite food in 2033 was japanese style curry. It is something
              I grew up eating. My mom would make it for me all the time so it
              is a very memorable meal for me.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questionss">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Fortune4}
            />
            <IonCardHeader>
              <IonCardTitle>
                Make yourself a fortune based off the last year
              </IonCardTitle>
              <IonCardSubtitle>Question 10</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              You will conquer obstacles to achieve success.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questionss">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Success}
            />
            <IonCardHeader>
              <IonCardTitle>What would you call the year?</IonCardTitle>
              <IonCardSubtitle>Question 11</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I would call it the year of success.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Fourth;
