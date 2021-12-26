import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()


  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found ...</h2>
    </div>
  );
}
 
export default NotFound;