import styles from'./App.module.css';
//import { Card } from './Components/atoms/card';
import { Scrollbar } from './Components/molecules/scrollbar';

function App() {

  return (
    <div className={styles.App}>
      <Scrollbar/>
    </div>
  );
}

export default App;
