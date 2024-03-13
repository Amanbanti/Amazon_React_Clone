import React from 'react'
import './Login.css'
import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';

function Login(){


        const history =  useNavigate ();

        const [email, setEmail]= useState('');
        const [password, setPassword]= useState('');

        const  signIn=e=>{
            e.preventDefault();

            auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history('/')

            })          
            .catch(
                error =>
                    alert(error.message)
                
            )

        }

        const  register=e=>{
            e.preventDefault();


            auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                    if (auth){
                        history('/')
                    }
            })
            .catch(
                error =>
                    alert(error.message)
                
            )
            //fribase 

        }



    return(

        <div className='login'>
            <Link to='/'>
            <img className='login__log' src='./images/amazon-logo.png'/>
            </Link>

            <div className='login__container' >

                <h1>Sign-in</h1>

                <form >
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={e=> setEmail(e.target.value
                        )}/>
                    <h5>Passaword</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>


                    <button onClick={signIn} type='submit' className='loing__signInButton'>
                        Sign In
                    </button>
 
                 
                </form>

                <p>
                        By Sign-in you agree to the Amazon Conditions of use & Sale.
                        Please see our Privacy Notice , Our Cookies Notice and Our
                        Interset-Based Ads Notice.
                    </p>

                    <button onClick={register} className='loging__registerButton'>
                        Create Your Amazon Account
                    </button>

            </div>
        



        </div>
    )
        
    
}


export default Login;