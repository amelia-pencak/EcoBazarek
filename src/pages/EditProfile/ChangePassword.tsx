import React, { useState, useContext } from 'react';
import { TextField } from '../../components/TextField';
import { UserContext } from '../../contexts/UserContext';
import { PasswordValidator } from '../../components/PasswoordValidator';
import { changePassword } from '../../api';
import { Button } from '../../components';
import { toast } from 'react-toastify';

const ChangePassword = () => {
     const { login, token } = useContext(UserContext);
     const [oldPassword, setOldPassword] = useState('');
     const [newPassword, setNewPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [isPasswordValid, setIsPasswordValid] = useState(false);
     
     const handlePasswordValidationStatusChange = (valid: boolean) => {
          setIsPasswordValid(valid);
     };

     const resetFields = () => {
          setOldPassword('');
          setNewPassword('');
          setConfirmPassword('');
     };

     const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {

          e.preventDefault();
          if (!login || !token) {
               console.log('Użytkownik nie jest zalogowany lub token jest nieprawidłowy');
               return;
          }
          if (newPassword === confirmPassword && isPasswordValid ) {
               changePassword(token, oldPassword, newPassword)
                    .then(() => {
                         toast('Hasło zostało zaktualizowane', { type: 'success' });
                         resetFields();
                    })
                    .catch((error) => {
                         if (error.response && error.response.status === 400 || error.response.data.error === 'Incorrect old password') {
                              toast('Stare hasło jest nieprawidłowe', { type: 'error' });
                         } else {
                              toast('Nie udało się zaktualizować hasła', { type: 'error' });
                         }
                    });
          } else {
               toast('Hasła nie pasują do siebie lub nowe hasło nie spełnia kryteriów', { type: 'error' });
          }
     };

     

     return (
          <form onSubmit={handleFormSubmit}>
               <div className="mb-8">
                    <TextField
                         className='w-[515px]'
                         label="Stare hasło"
                         required
                         inputProps={{
                              type: "password",
                              value: oldPassword,
                              onChange: (e) => setOldPassword(e.target.value)
                         }
                         }
                    />
               </div>
               <div className="mb-8">
                    <TextField
                         className='w-[515px]'
                         label="Nowe hasło"
                         required
                         inputProps={{
                              type: "password",
                              value: newPassword,
                              onChange: (e) => setNewPassword(e.target.value)
                         }
                         }
                    />

               </div>
               <div className="mb-5">
                    <TextField
                         label="Powtórz nowe hasło"
                         required
                         className='mb-6 w-[515px]'
                         inputProps={{
                              type: "password",
                              value: confirmPassword,
                              onChange: (e) => setConfirmPassword(e.target.value)
                         }
                         }
                    />
                    <PasswordValidator
                         className='text-base'
                         password={confirmPassword}
                         onValidationStatusChange={handlePasswordValidationStatusChange}
                    />
               </div>
               <Button className="w-28" type="submit" disabled={!isPasswordValid || newPassword !== confirmPassword}>
                    Zmień hasło
               </Button>
          </form>
     );
};

export default ChangePassword;
