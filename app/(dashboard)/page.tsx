import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="text-lg font-medium">Total Jobs</h3>
          <p className="mt-2 text-3xl font-bold">123</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium">In Progress</h3>
          <p className="mt-2 text-3xl font-bold">45</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium">Completed</h3>
          <p className="mt-2 text-3xl font-bold">78</p>
        </Card>
      </div>
    </div>
  );
} 