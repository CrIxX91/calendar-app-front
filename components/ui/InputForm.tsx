import dynamic from 'next/dynamic'
import { FormElement, Input, useInput } from '@nextui-org/react';
import { ChangeEvent, FC } from 'react';

interface Props{
    id:string;
    placeholder:string;
    initialValue:string;
    pass:boolean;
    onChangeField?:(e: ChangeEvent<FormElement>)=>void;
}

const InputForm:FC<Props> = ({id,placeholder,initialValue,pass,onChangeField}) => {

// const { value, reset, bindings } = useInput("");
  return (
    <>
    {
        !pass? <Input id={id} clearable bordered labelPlaceholder={placeholder} initialValue={initialValue} onChange={onChangeField}/>
        :<Input.Password id={id} clearable bordered labelPlaceholder={placeholder} initialValue={initialValue}  onChange={onChangeField}/>
    }
    </>

  )
}

export const InputFormNoSSR = dynamic(() => Promise.resolve(InputForm), {
    ssr: false
  })
  
// export default () => <InputFormNoSSR />


