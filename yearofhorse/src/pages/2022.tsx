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
import SelfD from '../images/discov.jpg';
import Learn from '../images/learn.jpg';
import NewC from '../images/newC.jpg';
import Lose from '../images/lose.png';
import Gain from '../images/Gain.jpg';
import Change from '../images/Change.jpg';
import Everything from '../images/Everything.png';
import Career from '../images/Career.jpg';
import Curry from '../images/curry.jpg';
import Fortune from '../images/fortune.jpg';
import Growth from '../images/growth.jpg';

const First: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="title">The Year 2022</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={SelfD}
            />
            <IonCardHeader>
              <IonCardTitle>
                When you think about the last year what was it about?
              </IonCardTitle>
              <IonCardSubtitle>Question 1</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Last year was about self discovery, growth, and new opportunities.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Learn}
            />
            <IonCardHeader>
              <IonCardTitle>What were the lessons you learned?</IonCardTitle>
              <IonCardSubtitle>Question 2</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I learned that I took things for granted I didn't take advantage
              of the situation I had. I also learned how I learn and that I can
              do anything if I try.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={NewC}
            />
            <IonCardHeader>
              <IonCardTitle>
                What did you earn over the last year?
              </IonCardTitle>
              <IonCardSubtitle>Question 3</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I earned a very import thing, new connections and the ability to
              make new connections.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Lose}
            />
            <IonCardHeader>
              <IonCardTitle>What did you lose?</IonCardTitle>
              <IonCardSubtitle>Question 4</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>I lost comfort and some stability.</IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Gain}
            />
            <IonCardHeader>
              <IonCardTitle>
                What were some things that you gained?
              </IonCardTitle>
              <IonCardSubtitle>Question 5</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I gained a new skill set, more confidence in my self, and a much
              stronger desire to succeed.
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
              src={Everything}
            />
            <IonCardHeader>
              <IonCardTitle>What would stay the same?</IonCardTitle>
              <IonCardSubtitle>Question 7</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Everything would stay the same I am very happy with my growth and
              I see a future now.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Career}
            />
            <IonCardHeader>
              <IonCardTitle>What was your wish for the last year?</IonCardTitle>
              <IonCardSubtitle>Question 8</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              My wish was to find a career and actually make something of my
              life. I felt trapped and I didn't want to stay that way.
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
              My favorite food in 2022 was japanese style curry. It is something
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
              src={Fortune}
            />
            <IonCardHeader>
              <IonCardTitle>Make yourself a fortune based off the last year</IonCardTitle>
              <IonCardSubtitle>Question 10</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Trust the process and everything will fall into place.
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
              I would call it the year of growth.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default First;
