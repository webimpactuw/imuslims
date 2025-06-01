import Home from '../home/page.jsx'

export function generateStaticParams() {
    return [{ slug: [''] }]
  }
   
  export default function Page() {
    return <Home />
  }