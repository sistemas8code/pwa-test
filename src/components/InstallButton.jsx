import{ useEffect, useState } from 'react';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuario aceptó instalar la PWA');
        } else {
          console.log('Usuario rechazó instalar la PWA');
        }

        setDeferredPrompt(null);
      });
    }
  };

  return (
    <button
      id="installButton"
      style={{ background: deferredPrompt ? 'blue' : 'gray' }}
      onClick={handleInstallClick}
    >
      Instalar PWA
    </button>
  );
};

export default InstallButton;