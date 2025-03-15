# Sera Takip Sistemi

Bu uygulama, sera çalışanları ve işverenler için geliştirilmiş bir hasat takip sistemidir.

## Özellikler

- Çalışanlar için hasat kayıt sistemi
- İşverenler için hasat takip paneli
- Otomatik kazanç hesaplama
- Gerçek zamanlı bildirimler
- Responsive tasarım

## Teknolojiler

- Next.js 14
- TypeScript
- Tailwind CSS
- MongoDB
- Mongoose

## Kurulum

1. Gerekli programları yükleyin:
   - [Node.js](https://nodejs.org/tr/download/) (LTS sürümü)
   - [MongoDB](https://www.mongodb.com/try/download/community)

2. Projeyi klonlayın:
```bash
git clone https://github.com/nedimebayrakdar/sera-takip.git
cd sera-takip
```

3. Bağımlılıkları yükleyin:
```bash
npm install
```

4. MongoDB'yi başlatın ve bağlantı URL'sini `.env.local` dosyasında ayarlayın:
```
MONGODB_URI=mongodb://localhost:27017/sera-takip
```

5. Uygulamayı başlatın:
```bash
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışmaya başlayacaktır.

## Kullanım

1. Ana sayfada "Çalışan Girişi" veya "İşveren Girişi" seçeneklerinden birini seçin
2. Çalışan panelinde günlük hasat kayıtlarınızı girin
3. İşveren panelinde tüm hasat kayıtlarını ve çalışan performanslarını görüntüleyin

## Lisans

MIT
