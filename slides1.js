// ===== SLIDES 1-5 =====
const slidesHTML_1 = `

<!-- SLAYT 1: KAPAK -->
<div class="slide slide-cover" data-notes="Merhaba hocam ve arkadaşlar. Ben [İsim]. Bugün sizlere PIC16F84A mikrodenetleyicisi kullanarak geliştirdiğim Akıllı Otopark Bariyer Sistemi projesini sunacağım. Bu proje, derste öğrendiğimiz mikrodenetleyici, motor sürücü, sensör ve LED konularını bir araya getiren gerçek bir otomasyon uygulamasıdır.">
  <div class="cover-grid"></div>
  <div class="cover-glow" style="top:-100px;right:-100px;"></div>
  <div class="cover-glow" style="bottom:-150px;left:-100px;opacity:0.5;"></div>
  <h1 class="cover-title">PIC16F84A Tabanlı<br>Akıllı Otopark Bariyer Sistemi</h1>
  <p class="cover-desc">Mikrodenetleyici Tabanlı Otomasyon Sistemi — Sensör, Motor Sürücü ve LED Kontrollü Araç Giriş/Çıkış Yönetimi</p>
  <div class="cover-info">
    <div class="cover-info-item"><span>Öğrenci</span>Hilmi Erkam Gürbüz</div>
    <div class="cover-info-item"><span>Ders</span>Endüstriyel Elektronik Uygulamaları</div>
    <div class="cover-info-item"><span>Öğretim Üyesi</span>Gökhan Uçkan</div>
  </div>
  <svg style="position:absolute;bottom:30px;left:50%;transform:translateX(-50%);opacity:0.15;" width="600" height="60" viewBox="0 0 600 60">
    <rect x="0" y="25" width="600" height="4" rx="2" fill="#fff"/>
    <rect x="280" y="5" width="40" height="50" rx="4" fill="none" stroke="#fff" stroke-width="1.5"/>
    <text x="300" y="35" text-anchor="middle" fill="#fff" font-size="8" font-family="JetBrains Mono">PIC</text>
    <circle cx="100" cy="27" r="6" fill="none" stroke="#fff" stroke-width="1"/>
    <circle cx="500" cy="27" r="6" fill="none" stroke="#fff" stroke-width="1"/>
    <rect x="440" y="10" width="30" height="34" rx="2" fill="none" stroke="#fff" stroke-width="1"/>
    <line x1="160" y1="27" x2="280" y2="27" stroke="#fff" stroke-width="0.5" stroke-dasharray="4 3"/>
    <line x1="320" y1="27" x2="440" y2="27" stroke="#fff" stroke-width="0.5" stroke-dasharray="4 3"/>
  </svg>
</div>

<!-- SLAYT 2: PROJENİN AMACI -->
<div class="slide slide-content" data-notes="Projenin temel amacı, otopark giriş ve çıkışını tamamen otomatik hale getirmektir. Sistem, sensör verilerine göre bariyeri açıp kapatır, araç sayısını takip eder ve LED'lerle kullanıcıya durum bilgisi verir. Tüm kontrol PIC16F84A üzerinden Assembly diliyle gerçekleştirilir.">
  <div class="slide-number">SLAYT 02</div>
  <h2 class="slide-title">Projenin Amacı</h2>
  <p class="slide-subtitle">Sistemin hedeflediği temel işlevler</p>
  <div class="three-col" style="flex:1;align-items:stretch;">
    <div class="card" style="border-top:3px solid var(--blue);">
      <h3>🚗 Araç Giriş/Çıkış</h3>
      <ul>
        <li>Giriş ve çıkış sensörleriyle araç algılama</li>
        <li>Bariyeri otomatik açıp kapatma</li>
        <li>Limit switch ile konum kontrolü</li>
      </ul>
    </div>
    <div class="card" style="border-top:3px solid var(--green);">
      <h3>🔢 Doluluk Takibi</h3>
      <ul>
        <li>PIC içinde araç sayacı tutma (INCF/DECF)</li>
        <li>Giriş → sayaç +1</li>
        <li>Çıkış → sayaç −1</li>
        <li>MAX kapasite kontrolü</li>
      </ul>
    </div>
    <div class="card" style="border-top:3px solid var(--red);">
      <h3>💡 Durum Göstergesi</h3>
      <ul>
        <li>Yeşil LED → Giriş serbest</li>
        <li>Kırmızı LED → Otopark dolu</li>
        <li>Anlık durum bildirimi</li>
        <li>Güvenli geçiş kontrolü</li>
      </ul>
    </div>
  </div>
</div>

<!-- SLAYT 3: KULLANILAN MALZEMELER -->
<div class="slide slide-content" data-notes="Projede kullanılan temel bileşenler burada listelenmiştir. PIC16F84A ana kontrol birimi olarak görev yapar. L293D motor sürücü entegresi, PIC'in düşük akım çıkışlarıyla DC motoru sürmemizi sağlar. Sensörler ve limit switch'ler giriş bilgisi sağlarken, LED'ler çıkış olarak sistem durumunu gösterir.">
  <div class="slide-number">SLAYT 03</div>
  <h2 class="slide-title">Kullanılan Malzemeler</h2>
  <p class="slide-subtitle">Sistemde kullanılan donanım bileşenleri ve görevleri</p>
  <div style="flex:1;overflow:auto;">
    <table class="tech-table">
      <thead>
        <tr><th style="width:40px;">#</th><th>Bileşen</th><th>Görevi</th><th>Tipi</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><strong>PIC16F84A</strong></td><td>Ana mikrodenetleyici — tüm sistemi kontrol eder</td><td><span class="tag tag-blue">İşlemci</span></td></tr>
        <tr><td>2</td><td><strong>L293D</strong></td><td>Motor sürücü entegresi — DC motora yön ve güç verir</td><td><span class="tag tag-blue">Sürücü</span></td></tr>
        <tr><td>3</td><td><strong>DC Motor</strong></td><td>Bariyer kolunu açar ve kapatır</td><td><span class="tag tag-green">Aktüatör</span></td></tr>
        <tr><td>4</td><td><strong>Giriş Sensörü</strong></td><td>Otoparka girmek isteyen aracı algılar</td><td><span class="tag tag-red">Sensör</span></td></tr>
        <tr><td>5</td><td><strong>Çıkış Sensörü</strong></td><td>Otoparktan çıkmak isteyen aracı algılar</td><td><span class="tag tag-red">Sensör</span></td></tr>
        <tr><td>6</td><td><strong>Açık Limit Switch</strong></td><td>Bariyerin tam açık konumunu algılar</td><td><span class="tag tag-red">Sensör</span></td></tr>
        <tr><td>7</td><td><strong>Kapalı Limit Switch</strong></td><td>Bariyerin tam kapalı konumunu algılar</td><td><span class="tag tag-red">Sensör</span></td></tr>
        <tr><td>8</td><td><strong>Yeşil LED</strong></td><td>Giriş serbest — otopark müsait</td><td><span class="tag tag-green">Gösterge</span></td></tr>
        <tr><td>9</td><td><strong>Kırmızı LED</strong></td><td>Giriş yasak — otopark dolu</td><td><span class="tag tag-red">Gösterge</span></td></tr>
        <tr><td>10</td><td><strong>Dirençler</strong></td><td>LED akım sınırlama ve pull-up/pull-down</td><td><span class="tag tag-blue">Pasif</span></td></tr>
        <tr><td>11</td><td><strong>Güç Kaynağı</strong></td><td>+5V DC besleme</td><td><span class="tag tag-blue">Güç</span></td></tr>
        <tr><td>12</td><td><strong>Bariyer Kolu</strong></td><td>Fiziksel bariyer mekanizması</td><td><span class="tag tag-green">Mekanik</span></td></tr>
      </tbody>
    </table>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('presentation').insertAdjacentHTML('beforeend', slidesHTML_1);
});
