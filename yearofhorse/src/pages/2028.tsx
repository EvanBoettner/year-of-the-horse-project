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
import Lateral from "../images3/Lateral.jpg";
import Balance from "../images3/balance.jpg";
import Degree from "../images3/software-engineering-degree-programs.jpg";
import Ease from "../images3/ease.jpg";
import NewCh from "../images3/newCh.jpg";
import Same from "../images3/theSame.jpg";
import Everything from "../images3/everything.jpg";
import Support from "../images3/support.jpg";
import Curry3 from "../images3/curry3.jpg";
import Fortune3 from "../images3/fortune3.jpg";
import Growth from "../images3/growth.jpg";

const Third: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="title">The Year 2028</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Lateral}
            />
            <IonCardHeader>
              <IonCardTitle>
                When you think about the last year what was it about?
              </IonCardTitle>
              <IonCardSubtitle>Question 1</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Last Year was about furthering my education and making lateral
              moves towards success.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Balance}
            />
            <IonCardHeader>
              <IonCardTitle>What were the lessons you learned?</IonCardTitle>
              <IonCardSubtitle>Question 2</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I learned that it isn't easy working fulltime while also being a
              fulltime student but all of my hard work will pay off in the end.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Degree}
            />
            <IonCardHeader>
              <IonCardTitle>What did you earn over the last year?</IonCardTitle>
              <IonCardSubtitle>Question 3</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I earned a degree in software engineering and a promotion within
              my company.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Ease}
            />
            <IonCardHeader>
              <IonCardTitle>What did you lose?</IonCardTitle>
              <IonCardSubtitle>Question 4</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>The ease of my old position.</IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={NewCh}
            />
            <IonCardHeader>
              <IonCardTitle>
                What were some things that you gained?
              </IonCardTitle>
              <IonCardSubtitle>Question 5</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              New challenges and opportunities to grow.
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
              src={Everything}
            />
            <IonCardHeader>
              <IonCardTitle>What would stay the same?</IonCardTitle>
              <IonCardSubtitle>Question 7</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Everything would stay the same I am very happy with my growth and
              I'm starting to achieve more and more of my goals.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Support}
            />
            <IonCardHeader>
              <IonCardTitle>What was your wish for the last year?</IonCardTitle>
              <IonCardSubtitle>Question 8</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              My wish was to further my education and better my financial
              standing to provide better support for my family.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Curry3}
            />
            <IonCardHeader>
              <IonCardTitle>What was your favorite dish or food?</IonCardTitle>
              <IonCardSubtitle>Question 9</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              My favorite food in 2028 was japanese style curry. It is something
              I grew up eating. My mom would make it for me all the time so it
              is a very memorable meal for me.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Fortune3}
            />
            <IonCardHeader>
              <IonCardTitle>
                Make yourself a fortune based off the last year
              </IonCardTitle>
              <IonCardSubtitle>Question 10</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Your hard work will open new doors for you.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Growth}
            />
            <IonCardHeader>
              <IonCardTitle>What would you call the year?</IonCardTitle>
              <IonCardSubtitle>Question 11</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I would call it the year of career advancement.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Third;
