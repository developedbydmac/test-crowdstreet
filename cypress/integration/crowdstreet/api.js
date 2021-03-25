/// <reference types="Cypress" />

describe('Testing API Endpoints Using Cypress', () => {

    it('Test GET Request', () => {
          cy.request('http://localhost:3000/api/posts/1')
               .then((response) => {
                      expect(response.body).to.have.property('code', 200);
          })
    })

    it('Test POST Request', () => {
          cy.request({
               method: 'POST',
               url: 'http://localhost:3000/api/posts',
               body: {
                   'id' : 2,
                   'title':'Automation'
               }
          }).then((response) => { 
                  expect(response.body).has.property('title','Automation'); 
          })
    })

    it('Test PUT Request', () => {
          cy.request({
                  method: 'PUT',
                  url: 'http://localhost:3000/api/posts/2',
                  body: { 
                     'id': 2,
                     'title' : 'Test Automation'
                  }
          }).then((response) => { 
                  expect(response.body).has.property('title', 'Test Automation'); 
          })          
    })        

    it('Test DELETE Request', () => {
          cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/api/post/2',
             })
             .then((response) => {
            expect(response.body).to.be.empty;
          })	
    })
 
})

//  class EasyHTTP {
//     // Make an HTTP GET Request 
//     async get(url) {
//       const response = await fetch(url);
//       const resData = await response.json();
//       return resData;
//     }
  
//     // Make an HTTP POST Request
//     async post(url, data) {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
  
//       const resData = await response.json();
//       return resData;
     
//     }
  
//      // Make an HTTP PUT Request
//      async put(url, data) {
//       const response = await fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
      
//       const resData = await response.json();
//       return resData;
//     }
  
//     // Make an HTTP DELETE Request
//     async delete(url) {
//       const response = await fetch(url, {
//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json'
//         }
//       });
  
//       const resData = await 'Resource Deleted...';
//       return resData;
//     }
  
//    }


