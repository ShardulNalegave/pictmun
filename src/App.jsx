import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Outlet />
    </div>
  );
}