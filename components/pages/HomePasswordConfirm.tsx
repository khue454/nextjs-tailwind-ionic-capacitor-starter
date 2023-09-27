import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonPage,
  IonRow,
  IonToolbar,
} from '@ionic/react';
import { arrowBackSharp } from 'ionicons/icons';
import { createRef, useEffect } from 'react';

export default function HomePasswordConfirm() {
  const ref1 = createRef<HTMLIonInputElement>();
  const ref2 = createRef<HTMLIonInputElement>();
  const ref3 = createRef<HTMLIonInputElement>();
  const ref4 = createRef<HTMLIonInputElement>();
  const ref5 = createRef<HTMLIonInputElement>();
  const ref6 = createRef<HTMLIonInputElement>();

  useEffect(() => {
    if (ref1.current) {
      ref1.current.focus();
      ref1.current.setFocus();
    }
  }, [ref1.current]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'transparent'} className={'ion-no-border'}>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/"
              text={''}
              icon={arrowBackSharp}
              className={'text-sm px-2'}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className={'overflow-hidden'}>
        <IonGrid>
          <IonRow>
            <IonCol className={'relative'}>
              <IonInput
                ref={ref1}
                className={'border text-center'}
                maxlength={1}
                onIonInput={({ target: { value } }) => {
                  if (!!value) {
                    (ref2.current as any).value = '';
                    ref2.current?.setFocus();
                  }
                }}
              />
            </IonCol>
            <IonCol>
              <IonInput
                className={'border text-center'}
                maxlength={1}
                ref={ref2}
                onIonInput={({ target: { value } }) => {
                  if (!!value) {
                    (ref3.current as any).value = '';
                    ref3.current?.setFocus();
                  }
                }}
              />
            </IonCol>
            <IonCol>
              <IonInput
                className={'border text-center'}
                maxlength={1}
                ref={ref3}
                onIonInput={({ target: { value } }) => {
                  if (!!value) {
                    (ref4.current as any).value = '';
                    ref4.current?.setFocus();
                  }
                }}
              />
            </IonCol>
            <IonCol>
              <IonInput
                className={'border text-center'}
                maxlength={1}
                ref={ref4}
                onIonInput={({ target: { value } }) => {
                  if (!!value) {
                    (ref5.current as any).value = '';
                    ref5.current?.setFocus();
                  }
                }}
              />
            </IonCol>
            <IonCol>
              <IonInput
                className={'border text-center'}
                maxlength={1}
                ref={ref5}
                onIonInput={({ target: { value } }) => {
                  if (!!value) {
                    (ref6.current as any).value = '';
                    ref6.current?.setFocus();
                  }
                }}
              />
            </IonCol>
            <IonCol>
              <IonInput className={'border text-center'} maxlength={1} ref={ref6} />
            </IonCol>
          </IonRow>
          <IonRow></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
