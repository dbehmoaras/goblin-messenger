import subject from '../client/state/reducers/mainReducer';



describe('Main Reducer tests', () => {
	let state;

	beforeEach(() => {
		state = {
			user: null,
			login_state: null,
			signup_state: null,
			info: null,
			messages: {},
			view: 'userpage',
			user_info: null
		};
	})

	describe('default state', () => {
    it ('should return the default state when input is undefined', () => {
      expect(subject(undefined, {type: undefined})).toEqual(state);
    });
	});

	describe('unrecognized action types', () => {
    it('should return the original state without duplication', () => {
      const action = {type: 'awrilukjasndasloi'};
      expect(subject(state,action)).toBe(state);
    });
	});

	describe('LOGIN_STATE', () => {

	})
	describe('LOGIN', () => {
		const action = {
      type: 'LOGIN',
      payload: {
				user: {
					_id: '45',
					username: 'yo',
					language: 'spanish'
				},
				messages: {message: 'message1'}
			},
		};

		it('updates the user state', () => {
			const { messages, login_state, user } = subject(state, action);
			expect(user).toEqual(action.payload.user);

		});
		it('updates the messages state', () => {
			const { messages, login_state, user } = subject(state, action);
			expect(messages).toEqual(action.payload.messages);
		});
		it('updates the login state to true', () => {
			const { messages, login_state, user } = subject(state, action);
			expect(login_state).toBe('true');
		});
		it('returns a state object not strictly equal to the original', () => {
			const { initialState } = subject(state, action);
			expect(initialState).not.toBe(state);
		})

	})

	describe('SIGNUP_STATE', () => {
		const action = {
            type: 'SIGNUP_STATE',
            payload: true
        }
        it('updates signup_state to be true', () => {
            const { signup_state } = subject(state, action)
            expect(signup_state).toBe(true);
          });
	})

	describe('SIGNUP', () => {
		const action = {
            type: 'SIGNUP'
        }
        it('sets login_state to true', () => {
            const { login_state } = subject(state, action)
            expect(login_state).toBe(true);
          });
	})
	describe('VIEW', () => {
		const action = {
      type: 'VIEW',
      payload: 'userpage' // not sure if this is correct
    }
    it ('updates the current view to userpage', () => {
      const { view } = subject(state, action);
      expect(view).toEqual(action.payload);
    })
	})
	describe('USER_INFO', () => {
		 const action = {
            type: 'USER_INFO',
            payload: 'wrongPassword'
        }
        it('updates value of user info', () => {
            const { user_info } = subject(state, action);
            expect(user_info).toEqual('wrongPassword')
          });
	})
	describe('UPDATE_MESSAGES', () => {
    const action = {
      type: 'UPDATE_MESSAGES',
      payload: {
        id: '67',
        targetUsername: 'blabby',
        senderUsername: 'coraline',
        language: 'french',
        message: 'I don\'t speak french'
      } // need to figure out what this object looks like
    }

    it ('updates the messages on the UI -> id', () => {
      const { messages } = subject(state, action);
			// console.log(subject(state, action))
      expect(messages.id).toEqual('67');
    })
    it ('updates the messages on the UI -> targetUsername', () => {
      const { messages } = subject(state, action);
      expect(messages.targetUsername).toEqual('blabby');
    })
    it ('updates the messages on the UI -> senderUsername', () => {
      const { messages } = subject(state, action);
      expect(messages.senderUsername).toEqual('coraline');
    })
    it ('updates the messages on the UI -> language', () => {
      const { messages } = subject(state, action);
      expect(messages.language).toEqual('french');
    })
    it ('updates the messages on the UI -> message', () => {
      const { messages } = subject(state, action);
      expect(messages.message).toEqual('I don\'t speak french');
    })
	})
})
