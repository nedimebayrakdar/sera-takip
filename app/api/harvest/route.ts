import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Harvest from '@/models/Harvest';

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const { caseCount, workerId } = await request.json();
    
    // Güncel kasa fiyatı (gerçek uygulamada bir API'den veya veritabanından alınabilir)
    const currentPricePerCase = 50; // TL
    const workerPercentage = 35; // %
    
    const totalEarning = (currentPricePerCase * caseCount * workerPercentage) / 100;
    
    const harvest = await Harvest.create({
      workerId,
      caseCount,
      pricePerCase: currentPricePerCase,
      workerPercentage,
      totalEarning,
    });
    
    return NextResponse.json({ success: true, data: harvest });
  } catch (error) {
    console.error('Hata:', error);
    return NextResponse.json(
      { success: false, error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    const harvests = await Harvest.find()
      .sort({ date: -1 })
      .limit(100);
    
    return NextResponse.json({ success: true, data: harvests });
  } catch (error) {
    console.error('Hata:', error);
    return NextResponse.json(
      { success: false, error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
} 