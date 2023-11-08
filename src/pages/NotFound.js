import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img src="/img/stock/404.svg" alt="404" className="w-48 mb-4"/>
        <p className="font-bold mb-10">Requested Resource Not Found</p>
        <Link to="/" className="btn-primary">Go To Home</Link>
      </div>
    </div>
  )
}

export default NotFound