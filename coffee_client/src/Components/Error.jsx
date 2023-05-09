import error from '../assets/images/404.gif'

const Error = () => {
    return (
        <div>
            <h5 className="text-center p-4 bg-slate-500 font-bold text-4xl text-red-800">Error 404</h5>
            <img src={error} className='mx-auto' alt="404 image" />
        </div>
    );
};

export default Error;