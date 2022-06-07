import {
    IonButton,
    IonCard,
    IonContent, IonFab, IonFabButton,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab2.css';
import {Virtuoso} from "react-virtuoso";
import {add, pin} from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
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

                              </IonCard>
                          </div>
                      );
                  }}
              />
          </IonContent>
          {/* eslint-disable-next-line react/jsx-no-undef */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
