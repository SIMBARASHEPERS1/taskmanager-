import {IonContent, IonFooter, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar} from '@ionic/react';
import './Tab3.css';
import {useState} from "react";

const Tab3: React.FC = () => {
    const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/*<IonTitle>Tab 3</IonTitle>*/}
            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}
                          placeholder="filter notifications" animated
            ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
        <IonFooter>
            <IonToolbar>
                Search Text: {searchText ?? '(none)'}
            </IonToolbar>
        </IonFooter>
    </IonPage>
  );
};

export default Tab3;
