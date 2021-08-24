import { useTranslation } from 'next-i18next';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PopUp from '../common/PopUp';
import PagePen from '../svg/PagePen';
import Button from '../common/Button';
import { AppContext } from '../../src/context/state';

const NextStepPopUp = () => (
  // const [isDone, setIsDone] = useState(false);

  <div>
    <PopUp defaultOpen>
      <PopupContent />
    </PopUp>
  </div>
);
export default NextStepPopUp;

const PopupContent = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const { profile } = useContext(AppContext);
  const onClick = () => {
    e.preventDefault();

    const windowOpen = window.open(data.vendor_token);
    setTimeout(() => {
      windowOpen.postMessage('Maya', data.vendor_token);
    }, 6000);
    window.addEventListener(
      'message',
      (event) => {
        if (event.data) {
          router.push('/user?refetchuser=true&testDone=autoBiography');
        }
      },
      false
    );
  };
  return (
    <div className="flex flex-col items-center justify-center py-4 px-16 text-center">
      <PagePen />
      <h2 className="text-center text-3xl font-bold ">
        מעבר אל השלב
        <br />
        ״מה מעניין אותי״
      </h2>
      <div className="my-4">
        {t('בשלב זה תועבר אל שאלון הקריירה')}
        <br />
        שיסייע לך לזהות את תחומי העניין
        <br />
        התעסוקתיים שלך
      </div>
      <a onClick={onClick} href={profile?.vendor_token}>
        <Button className="h-[50px] w-[240px]" status="secondary" name={t('התחל')} />
      </a>
      <button className="h-[50px] w-[240px]" type="button">
        {t('סגור')}
      </button>
    </div>
  );
};
