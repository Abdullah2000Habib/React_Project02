import React from 'react';
import { DescriptionRegister, DescriptionRegisterTow, FormWrapper, Here, RegisterButton, RegisterContainer, RegisterInput, RegisterSpan, RegisterWrapper } from './style';

export default function Register() {
  return (

    <>

    <RegisterWrapper>

    <div className='container'>

      <RegisterContainer>


      <div style={{width:"60%"}}>

        <RegisterSpan>Register</RegisterSpan>
        <Here>Here</Here>
        <DescriptionRegister>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus</DescriptionRegister>

            <DescriptionRegisterTow> ipsum dolor sit amet consectetur adipisicing elit. Doloribu ipsum dolor sit amet consectetur adipisicing elit. Doloribu ipsum dolor sit amet consectetur adipisicing elit. Doloribu</DescriptionRegisterTow>

      </div>

      <FormWrapper  style={{width:"35%"}}>


        <RegisterInput type="text" placeholder='First Name'/>
        <RegisterInput type="text" placeholder='Last Name'/>
        <RegisterInput type="number" placeholder=' Phone Number'/>
        <RegisterInput type="email" placeholder=' Email Address'/>
        <RegisterButton >Register</RegisterButton>


      </FormWrapper>

      </RegisterContainer>
    </div>

      
    </RegisterWrapper>
    
    </>
    
  )
}
