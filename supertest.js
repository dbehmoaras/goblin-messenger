// const request = require('supertest');
// const fs = require('fs');
// const path = require('path');
// const assert = require('assert');
// const { findUserByCookie } = require('./../server/controllers/cookieController');
// // console.log(findUserByCookie);

// const server = 'http://localhost:3000';

// //test for line 111 in server
// describe('Route integration', () => {
//     describe('/', () => {
//       describe('GET', () => {
//         // Note that we return the evaluation of `request` here! It evaluates to
//         // a promise, so Jest knows not to say this test passes until that
//         // promise resolves. See https://jestjs.io/docs/en/asynchronous
//         it('responds with 200 status and text/html content type', () => {
//           return request(server)
//             .get('/')
//             .expect('Content-Type', /text\/html/)
//             .expect(200);
//         });
//       });
//     });
// })

// //describe('Signup Test', () => {
//     // describe('/signup', () => {
//     //   describe('GET', () => {
//     //     it('responds with 200 status and application/json content type', () => {
//     //       return request(server)
//     //         .get('/signup')
//     //         .expect('Content-Type', /application\/json/)
//     //         .expect(200);
//     //     });
//     //   });
//     // });


// describe('Get request for messages', () => {
//     let cookies;
//     describe('/messages', () => {
//         describe('GET', () => {
//           beforeAll((done) => {
//             //test if cookie.ssid type of string and httpOnly type of boolean or is true
//             cookies = {
//               ssid: 'j%3A%226088a1310deb7aa2a08c5462%22',
//               httpOnly: true
//             }
//             user = {
//               _id: 'j%3A%226088a1310deb7aa2a08c5462%22',
//               messages: 'hi guys'
//             }
//           })
//         it('checks the request to see if the cookie exists in the database', () => {
//           return request(server)
//             .get('/messages')
//             .set('Cookie', ['ssid', cookies.ssid])
//             .expect('Content-Type', /application\/json/)
//             .expect(200);
//                 // .end((err, res) => {
//     //   if (err) {
//     //     return done(err);
//     //   }
//     //   expect(res.locals.user).to.be.equal('user');
//     //   return done();
//         });
//       });
//     });
// }




//   // beforeEach(() => {
//   //   state = {
//   //     totalMarkets: 0,
//   //     totalCards: 0,
//   //     marketList: [],
//   //     newLocation: '',
//   //     synced: true,
//   //   };
//   // });


// // it('responds with the updated market list', () => {
// //     const testMarket = [{ location: 'New York', cards: 5 }];
// //     return request(server)
// //       .post('/markets')
// //       .send(testMarket)
// //       .then((response) => {
// //         expect(response.body).toEqual(testMarket);
// //       });