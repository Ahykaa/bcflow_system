import '@/app/globals.css';
import RootLayout from '@/app/layout';
import Theme from '@/app/theme';
import ToastProvider from '@/components/templates/ToastProvider';
import { store } from '@/hooks/store';
import { Provider } from 'react-redux';

export const metadata = {
  title: 'BC Flow ',
  description: 'BC Flow System Request',
};

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <RootLayout>
        <Theme>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </Theme>
      </RootLayout>
    </Provider>
  );
};

export default App;
