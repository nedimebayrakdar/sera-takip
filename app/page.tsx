import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          Sera Takip Sistemi
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/worker" 
                className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Çalışan Girişi</h2>
            <p className="text-gray-600">
              Günlük hasat kayıtlarınızı girin ve kazancınızı takip edin.
            </p>
          </Link>
          
          <Link href="/employer"
                className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">İşveren Girişi</h2>
            <p className="text-gray-600">
              Hasat kayıtlarını görüntüleyin ve çalışan performansını takip edin.
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}
