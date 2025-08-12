import NotFoundGraphics from '../assets/svg/NotFound.svg';

export default function NotFound() {
    return (
        <>
            <div className="404page flex flex-col justify-center h-[80vh] items-center">
                <span className=" text-3xl font-extrabold -5">
                    <h1 className=' text-3xl p-20'>Page not Found</h1>

                    <img src={NotFoundGraphics} alt="" />
                </span>
                <p className='text-2xl p-8'>
                    We're sorry, we couldn't find the page you requested.
                </p>

            </div>
        </>
    )
}
