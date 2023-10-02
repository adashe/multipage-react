import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, similique enim, impedit harum corporis adipisci tempora, velit vitae tempore nam illum iure consequuntur officia officiis nobis explicabo eligendi blanditiis minus.</p>
    </div>
  )
}
