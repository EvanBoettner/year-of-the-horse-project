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
import NewB from "../images2/newB.jpg";
import Patience from "../images2/patience.png";
import Opportunity from "../images2/opportunity.jpg";
import Fogg from "../images2/foggy-forest-4.jpg";
import Devv from "../images2/Development.jpg";
import Change from "../images2/Change.jpg";
import Same from "../images2/Same.jpg";
import Plans from "../images2/Plans.png";
import Curry from "../images2/Curry2.jpg";
import Cookie from "../images2/cookie.jpg";
import Beginning from "../images2/begining.jpg";

const Second: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="title">The Year 2023</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={NewB}
            />
            <IonCardHeader>
              <IonCardTitle>
                When you think about the last year what was it about?
              </IonCardTitle>
              <IonCardSubtitle>Question 1</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Last year was about new beginnings and the start of a long but
              worth while journey.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Patience}
            />
            <IonCardHeader>
              <IonCardTitle>What were the lessons you learned?</IonCardTitle>
              <IonCardSubtitle>Question 2</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I learned that if you are patient yet dillegent you will
              eventually get what you want. Things might not be easy but if you
              keep your head up and your goals in mind you'll be fine.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Opportunity}
            />
            <IonCardHeader>
              <IonCardTitle>What did you earn over the last year?</IonCardTitle>
              <IonCardSubtitle>Question 3</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I earned a new opportunity and it's up to me to take full
              advantage of it.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Fogg}
            />
            <IonCardHeader>
              <IonCardTitle>What did you lose?</IonCardTitle>
              <IonCardSubtitle>Question 4</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I lost a clear direction and dove into uncertainty.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Devv}
            />
            <IonCardHeader>
              <IonCardTitle>
                What were some things that you gained?
              </IonCardTitle>
              <IonCardSubtitle>Question 5</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              An opportunity to start achieving my goals. Stronger coding
              abilities and professional skills.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Change}
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
              Everything would stay the same I am very happy with my growth and
              I know I did the best I could as I always do.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Plans}
            />
            <IonCardHeader>
              <IonCardTitle>What was your wish for the last year?</IonCardTitle>
              <IonCardSubtitle>Question 8</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              My wish was to kickstart my career and grow and develop my skill
              set. To hopefully start giving back even if just a little.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Curry}
            />
            <IonCardHeader>
              <IonCardTitle>What was your favorite dish or food?</IonCardTitle>
              <IonCardSubtitle>Question 9</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Japanese style curry has consistently been in my top 10 favorite
              food list forever and I don't see that changing.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Cookie}
            />
            <IonCardHeader>
              <IonCardTitle>
                Make yourself a fortune based off the last year
              </IonCardTitle>
              <IonCardSubtitle>Question 10</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Do your best and take advantage of all opportunities given to you
              and you'll be alright.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Beginning}
            />
            <IonCardHeader>
              <IonCardTitle>What would you call the year?</IonCardTitle>
              <IonCardSubtitle>Question 11</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>The year of beginnings</IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Second;
