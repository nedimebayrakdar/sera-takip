'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function WorkerDashboard() {
  const [caseCount, setCaseCount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/harvest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          caseCount: parseInt(caseCount),
          workerId: '123', // Gerçek uygulamada oturum açmış kullanıcının ID'si gelecek
        }),
      });

      if (!response.ok) {
        throw new Error('Kayıt başarısız oldu');
      }

      toast.success('Hasat kaydı başarıyla eklendi!');
      setCaseCount('');
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
      console.error('Hata:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="caseCount" className="block text-sm font-medium text-gray-700">
            Toplanan Kasa Sayısı
          </label>
          <input
            type="number"
            id="caseCount"
            value={caseCount}
            onChange={(e) => setCaseCount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
            min="1"
            placeholder="Örn: 10"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Kaydediliyor...' : 'Kaydet'}
        </button>
      </form>

      <div className="mt-6 p-4 bg-green-50 rounded-md">
        <h3 className="text-lg font-medium text-green-800 mb-2">Bilgi</h3>
        <p className="text-sm text-green-600">
          Topladığınız her kasa için kazancınız, güncel kasa fiyatının %35'i kadardır.
        </p>
      </div>
    </div>
  );
} 