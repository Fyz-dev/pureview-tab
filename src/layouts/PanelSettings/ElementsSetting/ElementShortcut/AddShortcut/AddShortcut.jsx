import { useState } from 'react';
import ToggleSwitch from 'src/components/ToggleSwitch/ToggleSwitch';
import styles from './AddShortcut.module.css';
import Shortcuts from 'src/stores/Shortcuts';
import getIconSite from 'src/utils/getIconSite';
import Input from 'src/components/Input/Input';
import { useForm, FormProvider } from 'react-hook-form';
import { urlRulesValidation } from 'src/utils/validations';

const URL = 'url';
const URLICON = 'iconUrl';
const DEFAULTICON = 'vite.svg';

const ButtonDialog = ({ onDone, onClose }) => (
  <div className={styles['container-dialog']}>
    <button
      type="submit"
      onClick={onDone}
      className={`${styles['button-done']} material-symbols-rounded`}
    >
      done
    </button>
    <button
      type="button"
      onClick={onClose}
      className={`${styles['button-close']} material-symbols-rounded`}
    >
      close
    </button>
  </div>
);

const InputRow = ({ nameInput, label }) => (
  <div className={styles['container-row']}>
    <label className={styles.text} style={{ minWidth: '50px' }}>
      {label}
    </label>
    <Input name={nameInput} type="text" validation={urlRulesValidation}></Input>
  </div>
);

const AddShortcut = ({ isHide }) => {
  const methods = useForm();
  const url = methods.watch(URL, '');
  const urlIcon = methods.watch(URLICON, '');

  const [isAutoDetected, setIsAutoDetected] = useState(true);

  const onSubmit = methods.handleSubmit((data) => {
    if (isAutoDetected) Shortcuts.addShortcut(data);
    else Shortcuts.addShortcut(data);
    isHide(true);
  });

  const handleClose = () => {
    isHide(true);
  };

  const getIcon = () => (isAutoDetected ? getIconSite(url) || '' : urlIcon);

  return (
    <FormProvider {...methods}>
      <form
        className={styles['main-container']}
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div className={styles.container}>
          <img
            className={styles.icon}
            src={getIcon()}
            onError={(e) => {
              e.target.src = DEFAULTICON;
            }}
          />
          <div className={styles['container-input']}>
            <InputRow nameInput={URL} label="Site url" />
            {!isAutoDetected && (
              <InputRow nameInput={URLICON} label="Icon url" />
            )}
            <div className={styles['container-row']}>
              <span className={styles.text}>Autodetect icon url</span>
              <ToggleSwitch
                defaultChecked={isAutoDetected}
                onChange={() => setIsAutoDetected(!isAutoDetected)}
              />
            </div>
          </div>
        </div>
        <ButtonDialog onClose={handleClose} onDone={onSubmit}></ButtonDialog>
      </form>
    </FormProvider>
  );
};

export default AddShortcut;
