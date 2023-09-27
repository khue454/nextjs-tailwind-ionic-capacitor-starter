import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
} from '@ionic/react';
import {
  bookOutline,
  callOutline,
  chevronForward,
  shieldCheckmarkOutline,
  starOutline,
} from 'ionicons/icons';
import React from 'react';

export default function Home() {
  return (
    <IonPage>
      <IonContent className={'custom'} fullscreen>
        <div className={'mt-20 grid gap-y-20'}>
          <IonGrid className={'px-4 w-full'}>
            <IonRow>
              <IonItemSliding className={'bg-transparent'}>
                <IonItem
                  className={'bg-transparent font-extrabold text-2xl ion-no-padding mb-3'}
                  lines={'none'}
                >
                  <IonLabel color={'light'} className={'m-0'}>
                    Xin chào,
                    <br /> <span className={'uppercase'}>Nguyen Đoan Khue</span>
                  </IonLabel>
                </IonItem>

                <IonItemOptions>
                  <IonItemOption>Favorite</IonItemOption>
                  <IonItemOption color="danger">Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            </IonRow>
            <IonRow>
              <IonButton
                routerLink={'/confirm-password'}
                color={'light'}
                size={'small'}
                shape={'round'}
                className={'font-bold w-20 h-6'}
              >
                Đăng nhập
              </IonButton>
            </IonRow>
          </IonGrid>
          <div className={'flex flex-col gap-y-4'}>
            <IonCard className={'ion-no-margin mx-4'}>
              <IonCardContent className={'px-3 py-2'}>
                <IonGrid>
                  <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol>3</IonCol>
                    <IonCol>4</IonCol>
                    <IonCol>5</IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
              <IonCardContent className={'py-2 bg-gray-300 flex gap-x-3'}>
                <IonIcon icon={starOutline} />
                <label className={'flex self-center'} style={{ lineHeight: '20px' }}>
                  Tính năng của tôi
                </label>
                <IonBadge
                  slot={'end'}
                  color={'danger'}
                  className={'flex font-normal self-center'}
                  style={{ lineHeight: '0.75rem', fontSize: '0.75rem' }}
                >
                  mới
                </IonBadge>
              </IonCardContent>
            </IonCard>
            <IonCard className={'ion-no-margin mx-4'}>
              <IonCardContent className={'py-0'}>
                <IonItem className={'ion-no-padding'}>
                  <IonLabel className={'flex justify-between py-3 font-semibold'}>
                    <label className={'flex self-center'}>
                      <IonIcon icon={bookOutline} className={'mr-3'} style={{ fontSize: 20 }} />
                      <span className={'text-base'}>Hướng dẫn sử dụng</span>
                    </label>
                    <label className={'flex self-center'}>
                      <IonIcon icon={chevronForward} />
                    </label>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
              <IonCardContent className={'py-0'}>
                <IonItem className={'ion-no-padding'}>
                  <IonLabel className={'flex justify-between py-3 font-semibold'}>
                    <label className={'flex self-center'}>
                      <IonIcon
                        icon={shieldCheckmarkOutline}
                        className={'mr-3'}
                        style={{ fontSize: 20 }}
                      />
                      <span className={'text-base'}>Hướng dẫn bảo mật</span>
                    </label>
                    <label className={'flex self-center'}>
                      <IonIcon icon={chevronForward} />
                    </label>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
              <IonCardContent className={'py-0'}>
                <IonItem className={'ion-no-padding'} lines={'none'}>
                  <IonLabel className={'flex justify-between py-3 font-semibold'}>
                    <label className={'flex self-center'}>
                      <IonIcon icon={callOutline} className={'mr-3'} style={{ fontSize: 20 }} />
                      <span className={'text-base'}>Liên hệ</span>
                    </label>
                    <label className={'flex self-center'}>
                      <IonIcon icon={chevronForward} />
                    </label>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
