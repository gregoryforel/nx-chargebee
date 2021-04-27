import { ChargeBee } from 'chargebee-typescript';

import styles from './app.module.less';

const chargebee = new ChargeBee();
chargebee.configure({
  site: 'schedio-test',
  api_key: '***',
});

export function App() {
  chargebee.subscription
    .retrieve('***')
    .request((error: any, result: any) =>
      console.log('chargebee', error, result)
    );

  return <div className={styles.app}>My app</div>;
}

export default App;
