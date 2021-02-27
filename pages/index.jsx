import classes from '../styles/Home.module.css';
import Home from '../containers/Home/Home';
import Footer from '../components/Footer';
import { formatGistData } from '../util/util';

const App = ({ gistData, errorInfo }) => {
  return (
    <div className={classes.App}>
      <div className={classes.MainBody}>
        <Home gistList={gistData} apiError={errorInfo} />
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const req = await fetch('https://api.github.com/users/fabpot/gists');
    const data = await req.json();
    const gistData = await formatGistData(data);

    return {
      props: {
        gistData,
      },
    };
  } catch (error) {
    return {
      props: {
        gistData: [],
        errorInfo: error.message,
      },
    };
  }
};

export default App;
