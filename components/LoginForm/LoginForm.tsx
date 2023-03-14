import { useAuthStore } from "@/hooks";
import { Grid, Card, Text, Spacer, Button, FormElement } from "@nextui-org/react"
import { ChangeEvent, useState } from "react";
import { InputFormNoSSR } from "../ui/InputForm";

interface ILoginData{
  email:string;
  password:string;
}

export const LoginForm = () => {

  const {startLogin}= useAuthStore();

  const initform:ILoginData={
    email:'correo@gmail.com',
    password:'123456'
  }
  const [loginData, setLoginData] = useState<ILoginData>(initform);
  // const [resp, setResp] = useState('');

  const onHandleLogin = async()=>{
    startLogin(loginData);
  }

  const onChangeEmail =(e: ChangeEvent<FormElement>)=>{
    // console.log(e.target.value);
    setLoginData({email:e.target.value,password:loginData.password})
  } 

  const onChanePass =(e: ChangeEvent<FormElement>)=>{
    // console.log(e.target.value);
    setLoginData({email:loginData.email,password:e.target.value})
  } 
  

  return (
    <Grid.Container justify="center" >
      <Grid xs={6} md={4} direction='column'>
              <Card css={{padding:50}} isHoverable>
                <Text h2 css={{color:'White'}}> Login </Text>
                <Spacer y={2.5} />
                <InputFormNoSSR id="email" placeholder="Email" initialValue={initform.email} pass={false} onChangeField={onChangeEmail}/>
                <Spacer y={2.5} />
                <InputFormNoSSR id="password" placeholder="Password" initialValue={initform.password} pass={true} onChangeField={onChanePass}/>
                <Spacer y={2.5} />
                <Button auto color="gradient" onPress={onHandleLogin}>Login</Button>
              </Card>
              {/* <Card.Body>
                <Text h4>{resp}</Text>
              </Card.Body> */}
          </Grid>
    </Grid.Container>
  )
}
