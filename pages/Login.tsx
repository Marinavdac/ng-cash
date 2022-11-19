import Image from 'next/image'
import Logo from '../public/logo_ng.png'



const Login = () => {
  return (
    <>
    <form className="bg-black min-h-screen flex items-center flex-col p-20 pt-40 gap-2">
      <Image
        src={Logo}
    className="w-16"
        alt="Logo NG"/>
    <input className="w-48 content-center border-2 text-center" type="email" placeholder="E-mail"/>
      <input className="w-48 border-2 text-center" type="password" placeholder="Password" />
      <button className="bg-white w-48 p-1" type="submit">Login</button>
    </form>
      </>
  )
}

export default Login;