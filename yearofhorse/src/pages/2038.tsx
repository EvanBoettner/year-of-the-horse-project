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
import Achievement from "../images5/achievement.jpg";
import Focus from "../images5/Focus.webp";
import Promotion from "../images5/Promotion.jpg";
import Free from "../images5/Freetime.webp";
import CPO from "../images5/chief-product-officer_15692.png";
import Nothing from "../images5/nothing.jpg";
import Everything from "../images5/everything.jpg";
import Duran from "../images5/Duran.jpg";
import Final from "../images5/FinalCurry.jpg";
import Fortune5 from "../images5/FortuneCook.jpg";
import Accomp from "../images5/accomplishment.jpg";

const Fifth: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="title">The Year 2038</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Achievement}
            />
            <IonCardHeader>
              <IonCardTitle>
                When you think about the last year what was it about?
              </IonCardTitle>
              <IonCardSubtitle>Question 1</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Last year was about achieving all of my career goals and taking
              care of my family.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Focus}
            />
            <IonCardHeader>
              <IonCardTitle>What were the lessons you learned?</IonCardTitle>
              <IonCardSubtitle>Question 2</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              If you stay focused and motivated you can achieve everything you
              set out to do.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Promotion}
            />
            <IonCardHeader>
              <IonCardTitle>What did you earn over the last year?</IonCardTitle>
              <IonCardSubtitle>Question 3</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I was eventually promoted to Chief Product Officer at a prestigous
              company.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="question1">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Free}
            />
            <IonCardHeader>
              <IonCardTitle>What did you lose?</IonCardTitle>
              <IonCardSubtitle>Question 4</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I lost lots of freetime and time spent with family.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img className="card1IMG" alt="Silhouette of mountains" src={CPO} />
            <IonCardHeader>
              <IonCardTitle>
                What were some things that you gained?
              </IonCardTitle>
              <IonCardSubtitle>Question 5</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              A new job title along with new responsibilities.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Nothing}
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
              Everything would stay the same. From 2022 until now with lots of
              hard work I had a very succesful career.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Duran}
            />
            <IonCardHeader>
              <IonCardTitle>What was your wish for the last year?</IonCardTitle>
              <IonCardSubtitle>Question 8</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Save enough money to buy my mom her Duran Duran statue that I
              promised her years ago.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Final}
            />
            <IonCardHeader>
              <IonCardTitle>What was your favorite dish or food?</IonCardTitle>
              <IonCardSubtitle>Question 9</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              My favorite food in 2038 was japanese style curry. It is something
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
              src={Fortune5}
            />
            <IonCardHeader>
              <IonCardTitle>
                Make yourself a fortune based off the last year
              </IonCardTitle>
              <IonCardSubtitle>Question 10</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Keep believing in yourself and good things will happen.
            </IonCardContent>
          </IonCard>
        </div>
        <div className="questions">
          <IonCard>
            <img
              className="card1IMG"
              alt="Silhouette of mountains"
              src={Accomp}
            />
            <IonCardHeader>
              <IonCardTitle>What would you call the year?</IonCardTitle>
              <IonCardSubtitle>Question 11</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              I would call it the year of accomplishment.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Fifth;
