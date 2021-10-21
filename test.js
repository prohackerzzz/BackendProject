const con = require('./connection');
const serve = require('./server')
const chai  = require('chai');
const chaiHttp = require('chai-http');

chai.should()

chai.use(chaiHttp)

describe('/GET translation', () => {
    
    it('it should GET the translations', (done) => {
      chai.request(serve)
          .get('/en/hindi')
          .send({text:"How are you?"})
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');//It will return our response as object
            done();
          });
    });
});


describe('/GET translation', () => {
    
    it('it should GET the translations', (done) => {
      chai.request(serve)
          .get('/en/hii')//wrong url 
          .send({text:"How are you?"})
          .end((err, res) => {
                res.should.have.status(400);// we will get bad request status
                res.body.should.be.an('object');
            done();
          });
    });
});
