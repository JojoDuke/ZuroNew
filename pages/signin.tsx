import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import zuroLogo from '../public/zuro_logo.png'
import signin from '../public/signin signup/sign-in.png'
import google from '../public/signin signup/google.svg'
import facebook from '../public/signin signup/facebook.svg'
import or from '../public/signin signup/or.svg'
import envelop from '../public/signin signup/envelop.svg'
import lock from '../public/signin signup/lock.svg'

const SignIn = () => {
    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Zuro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-full flex-1 flex-col text-center bg-black">

    {/* Navbar */}
      <nav className="flex flex-row items-center justify-between px-20 pt-5 bg-green">
        <Image
            src={zuroLogo}
            alt="zuroLogo"
            width="70px"
            height="20px"
        />
        </nav>

        {/* section */}
       <section className="text-white mx-[auto] w-[80%] mt-10">
            {/* hero container */}
            <div className="flex items-center justify-between">
                <div className="w-[35%]">

                    {/* heading */}
                    <div className="mb-16 text-left">
                        <h2 className="text-[50px] font-bold">Log In</h2>
                        <p>Join the Zuro community and be able to enjoy all the benefits of the best Insurance Lead generation system.</p>
                    </div>

                    {/* buttons */}
                    <div className="flex flex-col gap-3">
                        {/* google button */}
                        <div>
                            <button className="flex justify-center gap-2 w-[100%] h-[64] p-[10px] rounded hover:bg-[#4A4754] duration-300 ease-in-out" style={{border: "solid 1px #4A4754"}}>
                                <Image 
                                    src={google}
                                    width="30px"
                                    height="30px"
                                />
                                Continue with Google
                            </button>
                        </div>

                        {/* facebook button */}
                        <div>
                            <button className="flex justify-center gap-2 w-[100%] h-[64] p-[10px] rounded hover:bg-[#4A4754] duration-300 ease-in-out" style={{border: "solid 1px #4A4754"}}>
                                <Image 
                                    src={facebook}
                                    width="30px"
                                    height="30px"
                                />
                                Continue with Facebook
                            </button>
                        </div>

                        <Image 
                            src={or} 
                            width="100%"
                        />

                        {/* form */}
                        <form action="" onSubmit={e => e.preventDefault()}>
                            {/* email */}
                            <div className="flex gap-2 bg-[#181818] p-[10px] mb-5 rounded" style={{border: "solid 1px #4A4754"}}>
                                <Image
                                    src={envelop}
                                />
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder="Enter email address"
                                    className=" w-[100%] outline-none"
                                    style={{background: "none"}}
                                />
                            </div>
                            {/* password */}
                            <div className="flex gap-2 bg-[#181818] p-[10px] mb-5 rounded" style={{border: "solid 1px #4A4754"}}>
                                <Image
                                    src={lock}
                                />
                                <input 
                                    type="password" 
                                    id="password"
                                    placeholder="Password"
                                    className=" w-[100%] outline-none"
                                    style={{background: "none"}}
                                />
                            </div>
                            {/* checkbox */}
                            <div className="flex gap-2 mb-5">
                                
                                <input 
                                    type="checkbox" 
                                    id="checkbox"
                                />
                                <label htmlFor="checkbox">Stay logged in</label>
                            </div>
                            {/* log in button */}
                            <Link href='page4'>
                                <button className="bg-[#9750EF] w-[100%] p-[10px] rounded mb-5 hover:bg-[#cda7fc] duration-300 ease-in-out">Log In</button>
                            </Link>
                            <p className="text-[#9750EF]">I forgot my password</p>
                        </form>
                    </div>
                </div>

                <div className="w-[50%]">
                    <Image 
                        src={signin}
                        alt=""
                        width="943px"
                        height="943px"
                    />
                </div>
            </div>

            {/* don't have an account */}
            <div className="flex my-5 gap-1">
                <p className="text-[#333] text-left">Don't have an account?</p>
                <Link href="/signup" className="text-[#bebaba]">Sign Up</Link>
            </div>
        </section>

        </main>
        </div>
    )
}

export default SignIn