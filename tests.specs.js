const request = require('supertest');
const assert = require('assert');

const BASE_URL = 'http://domnetcoreapiswagger.us-west-2.elasticbeanstalk.com/api/';

describe('CodingCaveman NetCore Api', () => {

    it('returns array of values GET', function(done){
        const response = request(BASE_URL).get('Values')
        .end(function(err, response){
            assert.equal(response.status, 200)
            console.log(response.body)
            var responseBody = ["value1","value2"]
           assert.equal(responseBody.toString(),response.body)
            done()
        })
    });

    it('posts a string and receives a string response POST', function(done){
         const response = request(BASE_URL).post('Values')
        .set('Content-Type', 'application/json')
        .send("test")
        .end(function(err, response){
            assert.equal(response.status, 200)
            console.log(response.text)
            assert.equal('Leo is the best!', response.text)
            done()
        })
    });

    it('gets a string response sending an Id GET', function(done){
        const response = request(BASE_URL).get('Values/3')
        .end(function(err, response){
            assert.equal(response.status,200)
            console.log(response.text)
            assert.equal('leo is awesome!',response.text)
            done()
        })
    })

})