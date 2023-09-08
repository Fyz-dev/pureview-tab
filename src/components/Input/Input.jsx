import { useFormContext } from 'react-hook-form';
import styles from './Input.module.css';
import { isFormInvalid } from 'src/utils/validations';
import { findInputError } from 'src/utils/findInputError';
import { useEffect } from 'react';

const Input = ({ name, type, placeholder, validation, className }) => {
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  useEffect(() => {
    return () => {
      unregister(name);
    };
  }, [name, unregister]);

  return (
    <div className={styles.container}>
      <input
        type={type}
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
        {...register(name, validation)}
      ></input>
      {isInvalid && ( //TODO
        <div> {inputError.error.message}</div>
      )}
    </div>
  );
};

export default Input;
