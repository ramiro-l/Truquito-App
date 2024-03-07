import { useState } from 'react';
import SuccessAlert from './successAlert';

type Props = {
  readonly content: string;
  readonly textTitle: string;
  readonly textShare: string;
};

export default function ShareWeb({ content, textTitle, textShare }: Props) {
  const [alertCopy, setAlertCopy] = useState(false);

  const handleShareWeb = async () => {
    if (navigator.share) {
      // Call navigator.share() to share the current URL
      await navigator.share({
        title: textTitle,
        text: textShare,
        url: window.location.href,
      });
    } else {
      // Copy to clipboard
      await navigator.clipboard.writeText(textShare);
      setAlertCopy(true);
      setTimeout(() => setAlertCopy(false), 2000);
    }
  };

  return (
      <button className="uppercase" onClick={handleShareWeb}>{content}</button>
      <div
        className={`${
          alertCopy ? '' : 'hidden'
        } fixed bottom-0 left-5 max-[940px]:left-[35vw] max-[940px]:bottom-20 transition-all ease-in-out duration-150`}
      >
        <SuccessAlert text={'Copiado en portapapeles.'} />
      </div>
    </>
  );
}
