import Link from 'next/link'
import ContactInfo from './components/contactInfo'
 
export default function NotFound() {
  return (
    <div>
        <div className='my-12 text-center'> 
            <Link className='text-3xl' href="/">მთავარ გვერდზე გადასვლა</Link>
        </div>
      
      <ContactInfo />
    </div>
  )
}