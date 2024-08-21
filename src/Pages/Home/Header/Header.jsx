import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'
import useActivities from '../../../Hooks/useActivities';

const Header = () => {
  
  
  const{onSubmit,register, handleSubmit} = useActivities()
    return (
        <div>
            <div className="header py-5 min-h-screen flex flex-col items-center space-y-28">
                <Navbar></Navbar>
        <div className="header-content">
          <h1 className="text-black lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-bold my-10">
            I grow by helping people in need.
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="join flex justify-center">
            <input
              className="input input-bordered join-item w-2/5"
              placeholder="Search"
              type="text"
              {...register("search")}
            />
            <button type="submit" className="btn join-item rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white">Search</button>
          </form>
          
        </div>
      
      </div>
        </div>
    );
};

export default Header;