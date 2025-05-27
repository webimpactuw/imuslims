import '../styles/global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'iMuslims',
    description: 'Website created with Nextjs and React'
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="./logos/circle-logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Aboreto&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Gotu&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>
            <body>
                <div id="root">
                    <Header/>
                    {children}
                    <Footer />
                </div>
            </body>
        </html>)
  }