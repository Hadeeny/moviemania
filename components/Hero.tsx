const Hero = () => {
    return (
        <section className='w-10/12 h-screen mx-auto py-24 flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full md:w-1/2 flex flex-col'>
                <h1 className='text-[2.5rem] text-center mb-2 md:text-left font-bold'>Free cv maker<br/>Create your CV Online</h1>
                <p className='text-center md:text-left my-2 font-semibold text-gray-700 text-lg'>Create your cv for free in just 5 minutes</p>
                <button className='bg-blue-500 my-2 text-white rounded-lg w-44 mx-auto md:mx-0 py-2'>Create your CV now</button>
                <p className='text-center md:text-left'>No registration required</p>
            </div>
            <div className='hidden md:block w-1/2'></div>
        </section>
    )
}

export default Hero
