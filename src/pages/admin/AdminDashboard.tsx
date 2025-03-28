import { Outlet } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Административная панель</h1>
      <Outlet />
    </div>
  );
} 