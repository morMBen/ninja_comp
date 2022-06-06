import { ButtonType } from '../../UI/buttons/StopWatchButton.UI.types';

export const stopWatchButtonToHebrew = (str: ButtonType) => {
  switch (str) {
    case 'start':
      return 'התחל';
    case 'pause':
      return 'עצור';
    case 'off':
      return 'ללא';
    case 'reset':
      return 'אפס';
    case 'buzzer':
      return 'בזר';
    case 'split':
      return 'שמור';
    case 'end':
      return 'סיים';
  }
  return 'nada';
};
