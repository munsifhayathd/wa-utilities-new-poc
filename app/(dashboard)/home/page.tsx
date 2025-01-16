import { Card } from '@/components/ui/card';
import { JobStatusChart } from './components/JobStatusChart';
import { useJobStatus } from './viewmodels/useJobStatus';

export default function HomePage() {
  const { data: jobStatusData } = useJobStatus();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-medium">Job Status Distribution</h3>
          <JobStatusChart data={jobStatusData} />
        </Card>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-medium">Total Jobs</h3>
            <p className="mt-2 text-3xl font-bold">
              {jobStatusData.completed + jobStatusData.inProgress + jobStatusData.allocated}
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-medium">In Progress</h3>
            <p className="mt-2 text-3xl font-bold">{jobStatusData.inProgress}</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-medium">Completed</h3>
            <p className="mt-2 text-3xl font-bold">{jobStatusData.completed}</p>
          </Card>
        </div>
      </div>
    </div>
  );
} 