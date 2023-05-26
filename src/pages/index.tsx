import Head from 'next/head';
import Header from './comps/header';

const Home = () => {

  return(
<>
    <Head>

      <title>Auction Hub</title>

    </Head>

    <Header />
    
    <h2>hi</h2>


</>

  )

}

const display = () => {
  return(
    <>
      <Home />
    </>
  )
}

export default display 