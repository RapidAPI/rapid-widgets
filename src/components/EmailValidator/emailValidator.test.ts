// import axios from 'axios';

// import { createTestApi } from '../utils'
// import { DEFAULT_STATE, validateEmailApiFactory } from './emailValidator.api'

// jest.mock('axios');

// const RAPID_KEY = 'RAPID_KEY'
// const EMAIL = 'email@domain.com'

// describe('validate email api', () => {

//   it('fetches successfully data from API and returns invalid', async () => {
//     const testValidateEmail = createTestApi(validateEmailApiFactory, DEFAULT_STATE);
//     const data = {
//       data: {
//         status: 'invalid'
//       } 
//     };
//     axios.get.mockImplementationOnce(() => Promise.resolve(data));

//     await testValidateEmail.api.validateEmailAndSetToState(RAPID_KEY, EMAIL)

//     expect(testValidateEmail.api.isValid).toEqual(false)
//     expect(testValidateEmail.api.isLoading).toEqual(false)
//   })

//   it('fetches successfully data from API and returns valid', async () => {
//     const testValidateEmail = createTestApi(validateEmailApiFactory, DEFAULT_STATE);
//     const data = {
//       data: {
//         status: 'valid'
//       } 
//     };
//     axios.get.mockImplementationOnce(() => Promise.resolve(data));

//     await testValidateEmail.api.validateEmailAndSetToState(RAPID_KEY, EMAIL)

//     expect(testValidateEmail.api.isValid).toEqual(true)
//     expect(testValidateEmail.api.isLoading).toEqual(false)
//   })

//   it('fetches erroneously data from an API', async () => {
//     const testValidateEmail = createTestApi(validateEmailApiFactory, DEFAULT_STATE);
//     const errorMessage = 'Network Error';
//     axios.get.mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage)),
//     );

//     await testValidateEmail.api.validateEmailAndSetToState(RAPID_KEY, EMAIL)

//     expect(testValidateEmail.api.isValid).toEqual(false)
//     expect(testValidateEmail.api.isLoading).toEqual(false)
//   });

// })