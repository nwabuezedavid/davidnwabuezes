 

const Header = () => {
  return (
    <section className="flex items-center justify-center relative"> 
    <div className="absolute w-full left-0 h-full">
        <p className="border border-cyan-300 h-10 w-10 absolute top-2 animate-spin right-4.5 "></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin right-4.5 "></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-9.5 max-md:top-[50%]"></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-[50%] max-md:top-[30%]"></p>
     
        <p className="border border-cyan-300 h-10 w-10 absolute top-2 animate-spin left-9.5  max-md:hidden  "></p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce left-[40%] bottom-0 absolute max-md:hidden ">.</p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute left-[30%]  max-md:hidden"></p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute top-[60%] left-[70%]  max-md:top-[50%]"></p>
        <div className="absolute w-full flex justify-between items-center w  h-full">
        <p className=" bg-cyan-300 h-20 w-20 max-md:hidden " style={{clipPath:"polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)"}}></p>
        
        <p className=" bg-cyan-300 h-20 w-20   max-sm:hidden " style={{clipPath:" polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"}}></p>
        </div>
        </div> 
        <main className="md:w-[60vw] max-md:w-full max-md:flex-col md:flex-row  capitalize flex playwrite-light w-[55vh] gap-[10%] items-center justify-center">
            <div className="w-[70%] max-md:w-[90%] flex flex-col gap-2 p-5 max-sm:text-xs ">
            <h1 className="">hello!</h1>
            <h4 className="text-4xl w ">I am  <strong className="text-[#66FCF1] drop-shadow-[0_0_8px_#66FCF1]">
  Nwabueze David
</strong>  </h4>
            <h4 className="text-4xl">Full-stack Developer </h4>
            <p className="text-gray-300">I help businesses turn ideas into powerful digital products. As a full-stack developer, I build fast, scalable, and secure web applications using modern tools like Next.js and Django. </p>
           
            <ol className=" text-xs list-none flex flex-wrap gap-2   text-gray-200 text-lg font-light">

  <li className="hover:text-white transition border border-white p-2 pl-3 rounded-full">Let’s turn your vision into a real product.</li>
  <li className="hover:text-white transition border border-white p-2 pl-3   rounded-full  ">Don’t just imagine it  ,  build it with me.</li>
  <li className="hover:text-white transition border border-white p-2 pl-3 rounded-full  ">I build systems that scale. Let’s create yours.</li>
</ol>
 <div className="flex  gap-3">

         <button className="group relative overflow-hidden bg-[#45A29E] text-white mainfon uppercase h-[42px] text-xs italic rounded-full cursor-pointer px-6 font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_#66FCF1]">
  
  {/* Text */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
    Work With Me
  </span>

  {/* Animated background slide */}
  <span className="absolute inset-0 bg-[#66FCF1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

</button>
               <button className="group relative border-[#45A29E] border mainfon uppercase p-1 h-[40px] text-xs italic rounded-full cursor-pointer w-fit px-5 font-bold overflow-hidden transition-all duration-300 hover:border-[#66FCF1] hover:-translate-y-1 hover:shadow-[0_0_20px_#66FCF1]">
  <span className="relative z-10">View My Work</span>

  {/* glowing background */}
  <span className="absolute inset-0 bg-[#66FCF1]/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
</button>
            </div>
</div>
<div className="w-[40%]">
    <img src="/me.png" alt=""  className="flex w-full h-full  flex rounded-full"/>
</div>
        </main>
    </section>
  )
}

export default Header