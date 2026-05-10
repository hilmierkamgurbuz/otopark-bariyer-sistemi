# PIC16F84A Tabanlı Akıllı Otopark Bariyer Sistemi

Mikrodenetleyici tabanlı otomasyon sistemi — sensör, motor sürücü ve LED kontrollü araç giriş/çıkış yönetimi.

## Proje Hakkında

Bu proje, **PIC16F84A** mikrodenetleyicisi kullanılarak geliştirilmiş bir otopark bariyer otomasyon sistemidir. Sistem; giriş/çıkış sensörleri, DC motor ve LED göstergeleri aracılığıyla otoparkın araç kapasitesini takip eder ve bariyeri otomatik olarak kontrol eder.

**Öğrenci:** Hilmi Erkam Gürbüz  
**Ders:** Endüstriyel Elektronik Uygulamaları  
**Öğretim Üyesi:** Gökhan Uçkan

## Sistem Özellikleri

- Giriş ve çıkış sensörleriyle otomatik araç algılama
- DC motor + L293D motor sürücü ile bariyer kontrolü
- Limit switch ile bariyer konumu (açık/kapalı) doğrulama
- PIC Assembly ile araç sayacı (INCF / DECF)
- Maksimum kapasite kontrolü (varsayılan: 5 araç)
- Yeşil LED → giriş serbest, Kırmızı LED → otopark dolu

## Donanım Bileşenleri

| # | Bileşen | Görevi | Tip |
|---|---------|--------|-----|
| 1 | PIC16F84A | Ana mikrodenetleyici | İşlemci |
| 2 | L293D | Motor sürücü entegresi | Sürücü |
| 3 | DC Motor | Bariyer kolunu açar/kapatır | Aktüatör |
| 4 | Giriş Sensörü | Girmek isteyen aracı algılar | Sensör |
| 5 | Çıkış Sensörü | Çıkmak isteyen aracı algılar | Sensör |
| 6 | Açık Limit Switch | Bariyerin tam açık konumunu algılar | Sensör |
| 7 | Kapalı Limit Switch | Bariyerin tam kapalı konumunu algılar | Sensör |
| 8 | Yeşil LED | Giriş serbest göstergesi | Gösterge |
| 9 | Kırmızı LED | Otopark dolu göstergesi | Gösterge |

## Port Yapılandırması (PIC16F84A)

| Pin | Yön | Görev |
|-----|-----|-------|
| RA0 | Giriş | Giriş sensörü |
| RA1 | Giriş | Çıkış sensörü |
| RA2 | Giriş | Açık limit switch |
| RA3 | Giriş | Kapalı limit switch |
| RB0 | Çıkış | Motor — ileri (aç) |
| RB1 | Çıkış | Motor — geri (kapat) |
| RB2 | Çıkış | Yeşil LED |
| RB3 | Çıkış | Kırmızı LED |

## Çalışma Akışı

### Araç Girişi
1. Giriş sensörü araç algılar (RA0=1)
2. PIC sayaç < MAX kontrolü yapar
3. Boş yer varsa: Yeşil LED yanar, motor bariyeri açar
4. Açık limit switch tetiklenir (RA2=1), motor durur
5. Araç geçer, bariyer kapanır
6. Sayaç +1 artar (INCF)

### Otopark Dolu
1. Giriş sensörü araç algılar (RA0=1)
2. PIC sayaç = MAX kontrolü yapar
3. Kırmızı LED yanar, bariyer açılmaz

### Araç Çıkışı
1. Çıkış sensörü araç algılar (RA1=1)
2. Motor bariyeri açar, araç çıkar
3. Bariyer kapanır, sayaç -1 azalır (DECF)

## Sunum Dosyası

Proje, HTML/CSS/JS ile hazırlanmış interaktif bir sunum içermektedir.

### Kullanım

```bash
# index.html dosyasını bir tarayıcıda açın
open index.html
```

### Klavye Kısayolları

| Tuş | İşlev |
|-----|-------|
| `→` / `Space` | Sonraki slayt / animasyon adımı |
| `←` | Önceki slayt |
| `↓` | Animasyon adımı ileri |
| `↑` | Animasyon adımı geri |
| `N` | Konuşma notlarını aç/kapat |

## Dosya Yapısı

```
├── index.html        # Ana sunum sayfası
├── styles.css        # Sunum stilleri
├── presentation.js   # Sunum motoru ve animasyon mantığı
├── slides1.js        # Slaytlar 1-5 (Kapak, Amaç, Malzemeler...)
├── slides2.js        # Slaytlar 6-8 (Devre şemaları)
├── slides3.js        # Slaytlar 9-10 (Giriş animasyonu)
├── slides3b.js       # Slaytlar 11-12 (Dolu/Çıkış animasyonu)
├── slides4.js        # Slaytlar 13-14 (Akış diyagramı + Assembly kodu)
└── slides5.js        # Slaytlar 15-16 (Sonuç ve kaynaklar)
```
