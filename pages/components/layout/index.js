import Head from 'next/head';
const Layout = (props) => (
    <div>
        <Head>
            <title>listing -page</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>
        </Head>
          {props.children}
    </div>
)
export default Layout;