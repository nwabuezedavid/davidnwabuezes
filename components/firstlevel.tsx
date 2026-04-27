import React from 'react'

const FirstLevel = () => {
  return (
    <section className='flex w-full h-fit playwrite-light items-center justify-center relative  '>
         <div className="absolute -z-10 w-full left-0 h-full">
        <p className="border border-cyan-300 h-10 w-10 absolute top-2 animate-spin right-4.5 "></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-9.5 max-md:top-[50%]"></p>
        <p className="border border-cyan-300 h-10 w-10 absolute bottom-2 animate-spin left-[50%] max-md:top-[30%]"></p>
     
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce left-[40%] bottom-0 absolute max-md:hidden ">.</p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute left-[30%]  max-md:hidden"></p>
        <p className="border border-cyan-300 h-10 w-10 rounded-full animate-bounce absolute top-[60%] left-[70%]  max-md:top-[50%]"></p>
        
        </div>
        <main className='h-[400px] max-md:h-fit w-[90%] flex max-md:flex-col  '>
                <center      className='btntx1 text-5xl md:hidden p-3 max-md:text-[30px]'>I Build Systems That Scale</center>

            <img src="/ms.png" alt="" className=' max-md:w-full  w-1/2 rounded-b-full' />
            <div className='flex flex-col h-full w-1/2 max-md:w-full  p-4'>
                <center      className='btntx1 text-5xl max-md:hidden'>I Build Systems That Scale</center>
                <p className='flex  mt-4 text-gray-300 playwrite-light'>I design and develop powerful, production-ready web applications built for real-world performance. Every system I create is engineered with scalability, security, and long-term growth in mind — so your product doesn’t just work today, it continues to perform as your users grow.</p>
               
               <p  className='flex  mt-4 text-gray-300 playwrite-light'>From idea to deployment, I focus on clean architecture, efficient backend logic, and intuitive user experiences. Whether you're launching a new platform or improving an existing one, I build solutions that are reliable, maintainable, and ready for the future.</p>
               
               <p  className='flex  mt-4 text-gray-300 playwrite-light'>Let’s turn your idea into a product that not only works  but stands out.</p>
               <button className="group mt-3 relative overflow-hidden bg-[#45A29E] text-white mainfon uppercase h-[42px ] w-[200px] p-3 text-xs italic rounded-full cursor-pointer px-6 font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_#66FCF1]">
  
  {/* Text */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">

      <a href="#projects">
         View My Work
 
</a>
  </span>

  {/* Animated background slide */}
  <span className="absolute inset-0 bg-[#66FCF1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

</button>
            </div>
        </main>
    </section>
  )
}

export default FirstLevel