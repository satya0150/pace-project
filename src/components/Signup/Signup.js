import React, { useState } from 'react';
import '../Logins/login.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from 'react-bootstrap';

function Signup() {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
       e.preventDefault();
       setError("");
       try{
        await signUp(email, password);
        navigate("/");
       }catch(err){
        setError(err.message);
       } 
    }
    return (
        <MDBContainer className=" gradient-form my-5">

            <MDBRow>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">If you want to be a rock star or just be famous,
                                then run down the street naked, you'll make the news or something.
                                But if you want music to be your livelihood, then play, play,
                                play and play! And eventually you'll get to where you want to be.
                                -Eddie Van Halen
                            </p>
                        </div>

                    </div>

                </MDBCol>

                <MDBCol col='6' className="mb-4 pt-4">
                    <div className="d-flex flex-column mx-3">

                        <div className="text-center">
                            <img src="dplogo.png"
                                style={{ width: '250px' }} alt="logo" />
                            <h4 className="mt-3 mb-5 pb-1">We are providing best news</h4>
                            <p>Please create your account</p>
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


                            <div className="text-center pt-1 mb-3 pb-1">
                                <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>Create</MDBBtn>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center  mb-2">
                                <p className="mb-0">Already a member?</p>
                                <Link to='/'>
                                    <MDBBtn outline className='mx-2' color='danger'>
                                        Login
                                    </MDBBtn>
                                </Link>
                            </div>

                            {/* <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div> */}
                            <hr className="my-4" />


                            <MDBBtn className="mb-4 w-100" style={{ backgroundColor: '#dd4b39' }}>
                                <MDBIcon fab icon="google" className="mx-2" />
                                Sign Up with google
                            </MDBBtn>

                            <MDBBtn className="mb-4 w-100" style={{ backgroundColor: '#171515' }}>
                                <MDBIcon fab icon="github" className="mx-2" />
                                Sign Up with github
                            </MDBBtn>
                        </form>
                    </div>

                </MDBCol>



            </MDBRow>

        </MDBContainer>
    );
}

export default Signup;