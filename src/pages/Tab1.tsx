import {
    IonButton,
    IonCard,
    IonContent, IonFab, IonFabButton, IonFooter,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonPage, IonSearchbar,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {add, pin} from 'ionicons/icons';
import { Virtuoso } from 'react-virtuoso';
import './Tab1.css';
import './ViewTask';
import {useState} from "react";


// interface SearchbarCustomEvent extends CustomEvent {
//     detail: SearchbarChangeEventDetail;
//     target: HTMLIonSearchbarElement;
// }
// interface SearchbarChangeEventDetail {
//     value?: string;
// }

const Tab1: React.FC = () => {
    const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TaskManagement</IonTitle>
            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}
                          placeholder="filter tasks" animated
            ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonContent>
              <Virtuoso
                  style={{ height: '100%' }}
                  totalCount={100}
                  itemContent={(index) => {
                      // @ts-ignore
                      // @ts-ignore
                      // @ts-ignore
                      return (
                      // @ts-ignore
                          <div style={{ height: '60px' }}>
                              {/* eslint-disable-next-line react/jsx-no-undef */}
                              <IonCard>
                                  <IonItem>
                                      <IonIcon icon={pin} slot="start" />
                                      <IonLabel> {index + 1} ion-item in a card, icon left, button right</IonLabel>
                                      <IonButton
                                          routerLink="./view-task" routerDirection="forward"
                                          fill="outline" slot="end">View</IonButton>
                                  </IonItem>
                              </IonCard>
                          </div>
                      );
                  }}
              />
          </IonContent>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <IonFabButton>
                  <IonIcon icon={add} />
              </IonFabButton>
          </IonFab>
      </IonContent>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <IonFooter>
            <IonToolbar>
                Search Text: {searchText ?? '(none)'}
            </IonToolbar>
        </IonFooter>
    </IonPage>
  );
};

export default Tab1;
