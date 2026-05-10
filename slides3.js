const slidesHTML_3 = `
<!-- SLAYT 7: ÇALIŞMA MANTIĞI -->
<div class="slide slide-content" data-notes="Sistem üç temel senaryoda çalışır. Normal girişte sensör algılar, PIC doluluk kontrol eder, müsaitse bariyer açılır. Dolu senaryoda kırmızı LED yanar. Çıkışta sayaç azaltılır.">
  <div class="slide-number">SLAYT 07</div>
  <h2 class="slide-title">Sistemin Çalışma Mantığı</h2>
  <p class="slide-subtitle">Üç temel senaryo</p>
  <div class="three-col" style="flex:1;align-items:stretch;">
    <div class="scenario-box scenario-green">
      <h3>🟢 Normal Giriş</h3>
      <ol>
        <li>Araç giriş sensörünü tetikler</li>
        <li>PIC doluluk kontrolü yapar</li>
        <li>Boş yer var → Yeşil LED yanar</li>
        <li>Motor çalışır, bariyer açılır</li>
        <li>Açık limit switch → motor durur</li>
        <li>Araç geçer, bariyer kapanır</li>
        <li>Kapalı limit switch → motor durur</li>
        <li>Araç sayacı +1 (INCF)</li>
      </ol>
    </div>
    <div class="scenario-box scenario-red">
      <h3>🔴 Otopark Dolu</h3>
      <ol>
        <li>Araç giriş sensörünü tetikler</li>
        <li>PIC doluluk kontrolü yapar</li>
        <li>Sayaç = MAX (5) → DOLU!</li>
        <li>Kırmızı LED yanar</li>
        <li>Motor sinyali gönderilMEZ</li>
        <li>Bariyer kapalı kalır</li>
        <li>Araç giriş yapamaz</li>
      </ol>
    </div>
    <div class="scenario-box scenario-blue">
      <h3>🔵 Araç Çıkışı</h3>
      <ol>
        <li>Araç çıkış sensörünü tetikler</li>
        <li>PIC çıkış izni verir</li>
        <li>Motor çalışır, bariyer açılır</li>
        <li>Açık limit switch → motor durur</li>
        <li>Araç çıkar, bariyer kapanır</li>
        <li>Kapalı limit switch → motor durur</li>
        <li>Araç sayacı −1 (DECF)</li>
        <li>Sistem beklemeye döner</li>
      </ol>
    </div>
  </div>
`;
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('presentation').insertAdjacentHTML('beforeend', slidesHTML_3);
});
