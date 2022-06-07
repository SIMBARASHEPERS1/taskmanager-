import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonAccordion,
    IonItem,
    IonLabel,
    IonList,
    IonAccordionGroup,
    IonCard,
    IonCardHeader,
    IonCardTitle, IonCardContent, IonIcon
} from '@ionic/react';
// import { TableVirtuoso } from 'react-virtuoso';
import {
    albumsOutline,
    bookmarkOutline,
    bookOutline,
    downloadOutline,
    peopleOutline, personOutline,
} from 'ionicons/icons';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import  './viewTask.css';

const ViewTask: React.FC = () => {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // const accordionGroupRef = useRef(null);
    // const logAccordionValue = () => {
    //     if (accordionGroupRef.current) {
    //         console.log(accordionGroupRef.current.value);
    //     }
    // }
    // const closeAccordion = () => {
    //     if (accordionGroupRef.current) {
    //         accordionGroupRef.current.value = undefined;
    //     }
    // }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <IonButtons slot="start">
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Simz Task</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonContent>
                    {/*-- Custom Icon --*/}
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <IonCard>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <IonCardHeader>
                            <IonIcon icon={albumsOutline} slot="start" />
                            <IonCardTitle>Description</IonCardTitle>
                        </IonCardHeader>

                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                    </IonCard>
                    <IonAccordionGroup>
                        <IonAccordion value="colors" >
                            <IonItem slot="header">
                                <IonIcon icon={peopleOutline} slot="start" />
                                <IonLabel>Team Members</IonLabel>
                            </IonItem>

                            <IonList slot="content">
                                <IonItem>
                                    <IonIcon icon={personOutline} slot="start" />
                                    <IonLabel>Simba Makoni</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonIcon icon={personOutline} slot="start" />
                                    <IonLabel>Simba Makoni</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonAccordion>
                        <IonAccordion value="shapes" >
                            <IonItem slot="header">
                                <IonIcon icon={bookOutline} slot="start" />
                                <IonLabel>Attachments</IonLabel>
                            </IonItem>

                            <IonList slot="content">
                                <IonCard>
                                    <IonItem>
                                        <IonLabel> ion-item in a card</IonLabel>
                                        <IonIcon icon={downloadOutline} slot="end" />
                                    </IonItem>
                                </IonCard>
                            </IonList>
                        </IonAccordion>
                        <IonAccordion value="numbers" >
                            <IonItem slot="header">
                                <IonIcon icon={bookmarkOutline} slot="start" />
                                <IonLabel>Checklist</IonLabel>
                            </IonItem>

                            <IonList slot="content">
                                <IonItem>
                                    <IonLabel>1</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>2</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>3</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonAccordion>
                    </IonAccordionGroup>

                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    {/*<IonButton onClick={() => logAccordionValue()}>Log Value of Accordion Group</IonButton>*/}
                    {/*<IonButton onClick={() => closeAccordion()}>Close All Accordions</IonButton>*/}
                </IonContent>
            </IonContent>
        </IonPage>
    );
};
export default ViewTask;
