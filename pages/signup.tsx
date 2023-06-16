import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import zuroLogo from '../public/zuro_logo.png'
import signup from '../public/signin signup/sign-up.png'
import google from '../public/signin signup/google.svg'
import facebook from '../public/signin signup/facebook.svg'
import or from '../public/signin signup/or.svg'
import envelop from '../public/signin signup/envelop.svg'

const SignUp = () => {
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
       <section className="my-10 text-white mx-[auto] w-[80%]">
            {/* hero container */}
            <div className="flex items-center justify-between mb-2">
                <div className="w-[35%]">

                    {/* heading */}
                    <div className="mb-28 text-left">
                        <h2 className="text-[50px] font-bold">Don't miss out!</h2>
                        <p>Join the Zuro community and be able to enjoy all the benefits of the best Insurance Lead generation system.</p>
                    </div>

                    {/* buttons */}
                    <div className="flex flex-col gap-3">
                        <div>
                            <button className="flex justify-center gap-2 w-[100%] h-[64] p-[10px] rounded hover:bg-[#4A4754] duration-300 ease-in-out" style={{border: "solid 1px #4A4754"}}>
                                <Image 
                                    src={google}
                                    width="30px"
                                    height="30px"
                                />
                                Sign up with Google
                            </button>
                        </div>
                        <div>
                            <button className="flex justify-center gap-2 w-[100%] h-[64] p-[10px] rounded hover:bg-[#4A4754] duration-300 ease-in-out" style={{border: "solid 1px #4A4754"}}>
                                <Image 
                                    src={facebook}
                                    width="30px"
                                    height="30px"
                                />
                                Sign up with Google
                            </button>
                        </div>

                        <Image 
                            src={or} 
                            width="100%"
                        />

                        {/* form */}
                        <form action="" onSubmit={e => e.preventDefault()}>
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

                            <button className="bg-[#9750EF] w-[100%] p-[10px] rounded hover:bg-[#cda7fc] duration-300 ease-in-out">Sign up with Email</button>
                        </form>
                    </div>
                </div>

                <div className="w-[50%]">
                    <Image 
                        src={signup}
                        alt=""
                        width="943px"
                        height="943px"
                    />
                </div>
            </div>
        {/* already have an account */}
        <p className="text-white text-left">Already have an account? <Link href="/signin">Login</Link></p>
        </section>

        </main>
        </div>
    )
}

export default SignUp