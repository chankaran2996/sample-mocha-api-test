const chai = require('chai');
// const user = require("index.js"); --> will get depolyed url from perticuler file 
// const chaiHttp = require('chai-http');

// Configure Chai
// chai.use(chaiHttp);
chai.use();

chai.should();
const url = "xyz" //which can get api request later will get from user
describe('Authentication', () => {
    //checking signup
  describe('Signup', () => {
    it('should create a new user', (done) => {
      const user = {
        name: 'test',
        email: 'test@test.in',
        password: 'password'
      };
      chai.request(url)
        .post('/api/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('User created successfully');
          done();
        });
    });
  });
  //checking login 
  describe('Login', () => {
    it('should log in an existing user', (done) => {
      const credentials = {
        email: 'test@test.in',
        password: 'password'
      };
      chai.request(app)
        .post('/api/login')
        .send(credentials)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('token');
        //   both way possible
         // res.body.should.have.property('message').eql('login successfully');
          done();
        });
    });
  });
  
});
