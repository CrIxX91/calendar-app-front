import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '@/themes';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store';


export default function App({ Component, pageProps }: AppProps) {
  // const id = useId();

  return (
    <Provider store={store}> 
      <NextUIProvider theme={darkTheme} >
        <Component {...pageProps}  />
      </NextUIProvider>
    </Provider>
  )
}

