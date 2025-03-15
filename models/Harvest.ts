import mongoose from 'mongoose';

const HarvestSchema = new mongoose.Schema({
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  caseCount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  pricePerCase: {
    type: Number,
    required: true
  },
  workerPercentage: {
    type: Number,
    default: 35 // Varsayılan işçi yüzdesi
  },
  totalEarning: {
    type: Number,
    required: true
  }
});

export default mongoose.models.Harvest || mongoose.model('Harvest', HarvestSchema); 