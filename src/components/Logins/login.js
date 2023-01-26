import React, { useState } from 'react';
import './login.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import { useUserAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <MDBContainer className=" gradient-form my-5">

      <MDBRow>

        <MDBCol col='6' className="mb-4 pt-4">
          <div className="d-flex flex-column mx-3">

            <div className="text-center">
              <img src="dplogo.png"
                style={{ width: '250px' }} alt="logo" />
              <h4 className="mt-3 mb-5 pb-1">We are providing best news</h4>
              <p>Please login to your account</p>
              {error && <Alert variant='danger'>{error}</Alert>}
            </div>
            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass='mb-4'
                label='Email address'
                id='form1'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='form2'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="d-flex justify-content-between  mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' defaultChecked />
                <a className="text-muted" href="!#">Forgot password?</a>
              </div>

              <div className="text-center pt-1 mb-3 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>Sign in</MDBBtn>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center  mb-2">
                <p className="mb-0">Don't have an account?</p>
                <Link to='/signup'>
                  <MDBBtn outline className='mx-2' color='danger'>
                    CREATE NEW
                  </MDBBtn>
                </Link>

              </div>

              {/* <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div> */}
              <hr className="my-4" />


              <MDBBtn className="mb-4 w-100" style={{ backgroundColor: '#dd4b39' }}>
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" style={{ backgroundColor: '#171515' }}>
                <MDBIcon fab icon="github" className="mx-2" />
                Sign in with github
              </MDBBtn>
            </form>
          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">If people in the media cannot decide whether they are in the business of reporting news or manufacturing propaganda,
                it is all the more important that the public understand that difference,
                and choose their news sources accordingly.
                -Thomas Sowell
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;