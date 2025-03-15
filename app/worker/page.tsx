import WorkerDashboard from '@/components/WorkerDashboard'

export default function WorkerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Çalışan Paneli
        </h1>
        <WorkerDashboard />
      </div>
    </main>
  )
} 