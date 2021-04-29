//import testing modules
import React from 'react';
import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';



//import react components from the filetree
import { Provider } from 'react-redux';
import store from './../client/state/store.js';
import App from './../client/App.js';
import MessageBox from './../client/components/MessageBox.js'
import MainContainer from './../client/components/containers/MainContainer.js'
import MessageContainer from './../client/components/containers/MessageContainer.js'
// console.log(App)

jest.mock('./../client/logo.png')

console.log('***** STORE *****',store);
// console.log('***** STORE *****',store.dispatch({
//             type: 'SIGNUP_STATE',
//             payload: true
//         }));
// console.log('***** STORE *****',store.subscribe);

// const mockState = store.getState().message;
// console.log(mockState)
/*
  message: {
    user: null,
    login_state: null,
    signup_state: null,
    info: null,
    messages: {},
    view: 'userpage',
    user_info: null
  }

*/

describe('App', () => {
    beforeEach(() => {

    })
    test('renders MessageBox component', () => {
      render(<MessageBox message={{input: 'string'}}/>);
      // screen.debug();
    });
  });


describe('App', () => {
  beforeEach(() => {

  })
  test('checking that App renders" ', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // screen.debug();
    const button = screen.getByText('Login');
    expect(screen.getAllByText('Login')).toBeInTheDocument;
  });

});

// describe('MainContainer message container routing tests', () => {
//   beforeEach(() => {
//     store.dispatch({
//                     type: 'LOGIN_STATE',
//                     payload: true
//     })
//   })
//   test(('the MainContainer message routing is rendering'), () => {
//     //if login state is true the messageContainer should render

//     const { queryByTestId } = render(
//       <MainContainer store={store}/>
//     )
//     // screen.debug();
//     expect(queryByTestId('message-container-user-test').toBeTruthy)

//   });
// })


describe('MainContainer tests', () => {
  beforeEach(() => {
    store.dispatch({
                    type: 'SIGNUP_STATE',
                    payload: true
                  });
  })
    test(('the MainContainer is rendering -- written by Abigail Gjurich '), () => {
      //if login state is true the messageContainer should render

    const { queryByTestId } = render(
      <MainContainer store={store}/>
    )
    // screen.debug();
    // console.log('*****CONTAINER*****',container);
    expect(queryByTestId('signup-test').toBeTruthy)


  });
});

describe('MessageContainer tests', () => {
  beforeAll(() => {
    store.dispatch({
      type: 'UPDATE_MESSAGES',
      payload: {
        id: '67',
        targetUsername: 'blabby',
        senderUsername: 'coraline',
        language: 'french',
        message: 'I don\'t speak french',
        // received: 'RECEIVED',
      }
    })
  })
  test(('run screen.debug()'), () => {
    render(<MessageContainer store={store} messages = {store.getState().messages}/>)
    screen.debug();
  })
})