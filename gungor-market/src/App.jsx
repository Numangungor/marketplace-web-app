import { useState, useEffect, useRef } from 'react';
import {
  Phone, MapPin, Clock, Menu, X, ChevronUp, ChevronRight,
  ShoppingBasket, Milk, Apple, Coffee, Croissant,
  Snowflake, Package, Flame, Dog, Wheat,
  Heart, Star, Truck, Award,
  Users, ThumbsUp, ArrowRight, CheckCircle, Shield,
} from 'lucide-react';

const NAV = [
  { href: '#anasayfa', label: 'Ana Sayfa' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#urunler', label: 'Ürünler' },
  { href: '#iletisim', label: 'İletişim' },
];

const CATEGORIES = [
  { icon: Apple, name: 'Meyve & Sebze', desc: 'Her gün taze gelen mevsim ürünleri', color: '#22c55e' },
  { icon: Milk, name: 'Süt Ürünleri', desc: 'Peynir, yoğurt, süt ve daha fazlası', color: '#3b82f6' },
  { icon: Croissant, name: 'Fırın Ürünleri', desc: 'Her gün taze ekmek çeşitleri', color: '#f59e0b' },
  { icon: Coffee, name: 'İçecekler', desc: 'Su, meyve suyu, çay, kahve', color: '#f97316' },
  { icon: Snowflake, name: 'Dondurulmuş Gıda', desc: 'Dondurulmuş sebze, hazır yemek', color: '#06b6d4' },
  { icon: ShoppingBasket, name: 'Temel Gıda', desc: 'Bakliyat, makarna, pirinç, yağ', color: '#eab308' },
  { icon: Package, name: 'Temizlik & Bakım', desc: 'Deterjan, sabun, hijyen ürünleri', color: '#8b5cf6' },
  { icon: Dog, name: 'Kedi & Köpek Mama', desc: 'Kedi ve köpek mama çeşitleri', color: '#ec4899' },
  { icon: Wheat, name: 'Yem Çeşitleri', desc: 'Kanatlı ve büyükbaş hayvan yemi', color: '#84cc16' },
  { icon: Flame, name: 'Tüp & Enerji', desc: 'Mutfak tüpü, piknik tüpü', color: '#ef4444' },
];

function useFadeIn(t = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: t });
    o.observe(el);
    return () => o.disconnect();
  }, [t]);
  return [ref, v];
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_2px_rgba(0,0,0,0.06)]' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-[68px]">
        <a href="#anasayfa" className="flex items-center gap-2.5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[17px] font-black transition-all duration-500 ${scrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-700'}`}>G</div>
          <div className="leading-none">
            <span className={`text-[17px] font-extrabold tracking-tight block transition-colors duration-500 ${scrolled ? 'text-gray-900' : 'text-white'}`}>Güngör</span>
            <span className={`text-[9px] font-bold uppercase tracking-[.25em] block mt-px transition-colors duration-500 ${scrolled ? 'text-brand-600' : 'text-white/50'}`}>Market</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(l => (
            <a key={l.href} href={l.href} className={`px-4 py-2 text-[13px] font-semibold rounded-lg transition-colors ${scrolled ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/60' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>{l.label}</a>
          ))}
        </nav>
        <a href="tel:02164357053" className={`hidden lg:flex items-center gap-2 text-[13px] font-bold px-5 py-2.5 rounded-xl transition-all duration-500 ${scrolled ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white text-brand-700 hover:bg-white/90'}`}>
          <Phone size={14} /> 0216 435 70 53
        </a>
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-5 py-4 space-y-1">
            {NAV.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition">
                {l.label} <ChevronRight size={16} className="text-gray-300" />
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100">
              <a href="tel:02164357053" className="flex items-center justify-center gap-2 bg-brand-600 text-white font-bold text-[14px] px-5 py-3.5 rounded-xl">
                <Phone size={16} /> 0216 435 70 53
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="anasayfa" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#081a0b]" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-emerald-900/90" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative w-full max-w-[1200px] mx-auto px-5 py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 bg-white/[.06] backdrop-blur border border-white/[.08] rounded-full px-5 py-2.5 mb-10">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-[12px] font-semibold text-white/60 uppercase tracking-widest">Ömerli Çekmeköy</span>
            </div>

            <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-black text-white leading-[1.05] tracking-tight">
              Tazelik ve Kalite,
              <br />
              <span className="bg-gradient-to-r from-brand-300 to-emerald-300 bg-clip-text text-transparent">Her Gün Yanınızda.</span>
            </h1>

            <p className="mt-7 text-[16px] text-white/40 leading-[1.75] max-w-[460px]">
              Geniş ürün yelpazesi, uygun fiyatlar ve 30 yılı aşkın güvenle Ömerli'nin marketi. Gıdadan temizliğe, mamadan tüpe kadar her şey burada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a href="#urunler" className="group inline-flex items-center justify-center gap-2.5 bg-white text-brand-800 font-bold px-8 py-4 rounded-2xl text-[15px] hover:bg-brand-50 transition-all shadow-2xl shadow-black/20">
                Ürünleri Keşfet <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#iletisim" className="inline-flex items-center justify-center gap-2.5 bg-white/[.07] border border-white/[.1] text-white font-semibold px-8 py-4 rounded-2xl text-[15px] hover:bg-white/[.12] transition-all backdrop-blur-sm">
                <MapPin size={17} /> Bize Ulaşın
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-12">
              {[
                { icon: Clock, t: 'Her gün 06:30 – 22:30' },
                { icon: MapPin, t: 'Ömerli, Çekmeköy' },
                { icon: Phone, t: '0216 435 70 53' },
              ].map((x, i) => (
                <span key={i} className="flex items-center gap-2 text-[13px] text-white/30">
                  <x.icon size={14} className="text-brand-500/50" /> {x.t}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="w-full max-w-[340px] ml-auto pl-4 pt-4 pb-4">
              <div className="relative">
                <div className="bg-white/[.05] backdrop-blur-xl border border-white/[.07] rounded-[28px] p-9">
                  <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-600/30 mb-7">
                    <span className="text-[26px] font-black text-white">G</span>
                  </div>
                  <h3 className="text-white text-[20px] font-bold tracking-tight">Güngör Market</h3>
                  <p className="text-white/30 text-[13px] leading-relaxed mt-2 mb-7">
                    30 yılı aşkın süredir Ömerli halkının güvenini kazanan, kaliteli hizmet anlayışıyla fark yaratan marketiniz.
                  </p>
                  <div className="space-y-3">
                    {['Taze Ürünler', 'Uygun Fiyatlar', 'Geniş Ürün Yelpazesi', '10 Farklı Kategori'].map((t, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={15} className="text-brand-400/80 shrink-0" />
                        <span className="text-white/40 text-[13px]">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 translate-x-2 -translate-y-3 bg-white rounded-2xl px-4 py-2.5 shadow-xl z-10">
                  <span className="text-brand-700 font-black text-[20px] block leading-none">30+</span>
                  <span className="text-gray-400 text-[10px] font-bold mt-0.5 block">Yıllık Tecrübe</span>
                </div>
                <div className="absolute bottom-0 left-0 -translate-x-2 translate-y-3 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center">
                    <Heart size={16} className="text-brand-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-black text-[14px] block leading-none">5.000+</span>
                    <span className="text-gray-400 text-[10px] font-semibold mt-0.5 block">Mutlu Müşteri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function Stats() {
  const data = [
    { icon: Users, val: '5.000+', label: 'Mutlu Müşteri' },
    { icon: ShoppingBasket, val: '2.000+', label: 'Ürün Çeşidi' },
    { icon: Award, val: '30+', label: 'Yıllık Deneyim' },
    { icon: ThumbsUp, val: '7/7', label: 'Gün Hizmet' },
  ];
  const [ref, vis] = useFadeIn();
  return (
    <section ref={ref} className="w-full bg-white">
      <div className={`max-w-[1200px] mx-auto px-5 py-14 md:py-18 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {data.map((s, i) => (
          <div key={i} className="text-center">
            <div className="w-13 h-13 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <s.icon size={22} className="text-brand-600" />
            </div>
            <div className="text-[28px] md:text-[32px] font-black text-gray-900 tracking-tight leading-none">{s.val}</div>
            <div className="text-[12px] text-gray-400 font-medium mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const [ref, vis] = useFadeIn();
  return (
    <section id="hakkimizda" ref={ref} className="w-full bg-[#f8f9fa]">
      <div className={`max-w-[1200px] mx-auto px-5 py-18 md:py-24 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-600 to-brand-800 relative">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-22 h-22 bg-white/10 border border-white/10 rounded-[20px] flex items-center justify-center mx-auto mb-4 backdrop-blur" style={{width:88,height:88}}>
                    <span className="text-[40px] font-black text-white">G</span>
                  </div>
                  <p className="text-white font-bold text-[20px]">Güngör Market</p>
                  <p className="text-white/40 text-[12px] mt-1 font-medium">Est. 1996 · Ömerli, Çekmeköy</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-brand-600 font-bold text-[12px] uppercase tracking-[.2em]">Hakkımızda</span>
            <h2 className="text-[30px] md:text-[38px] font-black text-gray-900 leading-[1.1] tracking-tight mt-3 mb-6">
              Güngör Market Ailesi<br />
              <span className="text-brand-600">Olarak Yanınızdayız</span>
            </h2>
            <p className="text-[14px] text-gray-500 leading-[1.8] mb-4">
              Güngör Market olarak 30 yılı aşkın süredir Ömerli Çekmeköy bölgesinde faaliyet gösteriyoruz. Kuruluşumuzdan bu yana tek hedefimiz: en taze, en kaliteli ürünleri en uygun fiyatlarla sunmak.
            </p>
            <p className="text-[14px] text-gray-500 leading-[1.8] mb-8">
              Gıdadan temizlik ürünlerine, evcil hayvan mamalarından tüp ve yem çeşitlerine kadar geniş ürün yelpazemiz ile Ömerli halkının tek adresiyiz.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Heart, title: 'Müşteri Odaklı', desc: 'İhtiyaçlarınız her zaman ön planda.' },
                { icon: Star, title: 'Kaliteli Ürünler', desc: 'Güvenilir markaların en iyi ürünleri.' },
                { icon: Truck, title: 'Günlük Tazelik', desc: 'Ürünler her sabah taze olarak raflarda.' },
                { icon: Shield, title: 'Güvenilir Hizmet', desc: '30 yılı aşkın süredir yanınızdayız.' },
              ].map((v, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl px-4 py-3.5 hover:shadow-md hover:border-brand-100 transition-all duration-300">
                  <v.icon size={18} className="text-brand-600 mb-2" />
                  <h4 className="text-[13px] font-bold text-gray-900">{v.title}</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const [ref, vis] = useFadeIn();
  return (
    <section id="urunler" ref={ref} className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-18 md:py-24">
        <div className={`text-center mb-12 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-brand-600 font-bold text-[12px] uppercase tracking-[.2em]">Ürünlerimiz</span>
          <h2 className="text-[30px] md:text-[38px] font-black text-gray-900 tracking-tight mt-3">Ürün Kategorilerimiz</h2>
          <p className="text-gray-400 text-[14px] mt-3 max-w-[480px] mx-auto leading-relaxed">
            Taze gıdalardan evcil hayvan ürünlerine, tüpten temizlik malzemelerine kadar ihtiyacınız olan her şey tek çatı altında.
          </p>
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 transition-all duration-700 delay-150 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {CATEGORIES.map((c, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: c.color + '14' }}>
                <c.icon size={20} style={{ color: c.color }} />
              </div>
              <h3 className="text-[13px] font-bold text-gray-900 mb-1">{c.name}</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const [ref, vis] = useFadeIn();
  return (
    <section ref={ref} className="w-full bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto px-5 py-18 md:py-24">
        <div className={`bg-gradient-to-br from-brand-700 via-brand-800 to-emerald-900 rounded-3xl overflow-hidden relative transition-all duration-700 ${vis ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'}`}>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative px-7 md:px-12 py-12 md:py-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-[28px] md:text-[34px] font-black text-white leading-[1.1] tracking-tight mb-4">Neden Güngör Market?</h2>
                <p className="text-white/40 text-[14px] leading-relaxed mb-7">Yıllardır aynı kalite, aynı güven, aynı güler yüz. Ömerli'de alışverişin en doğru adresi.</p>
                <a href="tel:02164357053" className="inline-flex items-center gap-2 bg-white text-brand-800 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition text-[14px] shadow-lg">
                  <Phone size={16} /> Hemen Arayın
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: '2.000+', t: 'Ürün çeşidi' },
                  { n: '30+', t: 'Yıllık deneyim' },
                  { n: '7/7', t: 'Gün açık' },
                  { n: '%100', t: 'Memnuniyet' },
                ].map((x, i) => (
                  <div key={i} className="bg-white/[.05] border border-white/[.06] backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-white font-black text-[22px] leading-none">{x.n}</div>
                    <div className="text-white/35 text-[11px] font-semibold mt-1">{x.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [ref, vis] = useFadeIn();
  return (
    <section id="iletisim" ref={ref} className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-5 py-18 md:py-24">
        <div className={`text-center mb-12 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-brand-600 font-bold text-[12px] uppercase tracking-[.2em]">İletişim</span>
          <h2 className="text-[30px] md:text-[38px] font-black text-gray-900 tracking-tight mt-3">Bize Ulaşın</h2>
          <p className="text-gray-400 text-[14px] mt-3 max-w-[460px] mx-auto leading-relaxed">Sorularınız için bizi arayabilir ya da mağazamıza gelebilirsiniz.</p>
        </div>
        <div className={`grid lg:grid-cols-5 gap-5 transition-all duration-700 delay-150 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: MapPin, title: 'Adres', line1: 'Ömerli Mahallesi, Ömerli Caddesi No:64', line2: 'Ömerli, Çekmeköy / İstanbul' },
              { icon: Phone, title: 'Telefon', line1: '0216 435 70 53', href: 'tel:02164357053' },
              { icon: Clock, title: 'Çalışma Saatleri', line1: 'Pazartesi – Pazar: 06:30 – 22:30', line2: 'Haftanın 7 günü açığız' },
            ].map((c, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-xl p-4 flex items-start gap-3 hover:bg-brand-50/40 transition-colors">
                <div className="w-10 h-10 bg-brand-100/70 rounded-lg flex items-center justify-center shrink-0">
                  <c.icon size={18} className="text-brand-700" />
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-gray-900 mb-0.5">{c.title}</h4>
                  {c.href ? <a href={c.href} className="text-brand-700 font-bold text-[16px] hover:underline">{c.line1}</a> : <p className="text-gray-500 text-[12px] leading-relaxed">{c.line1}</p>}
                  {c.line2 && <p className="text-brand-600/50 text-[11px] font-semibold mt-0.5">{c.line2}</p>}
                </div>
              </div>
            ))}
            <a href="https://maps.google.com/?q=Ömerli+Mahallesi+Ömerli+Caddesi+No:64+Çekmeköy+İstanbul" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-brand-600 text-white font-bold text-[13px] px-5 py-3.5 rounded-xl hover:bg-brand-700 transition shadow-lg shadow-brand-600/15 w-full">
              <MapPin size={16} /> Google Maps'te Aç
            </a>
          </div>
          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-gray-100">
            <iframe title="Güngör Market Konum" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5!2d29.332!3d41.085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1str!2str!4v1" width="100%" height="100%" style={{ border: 0, minHeight: 380 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#080d09] text-gray-500">
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center font-black text-white text-[14px]">G</div>
              <div className="leading-none">
                <span className="text-white font-bold block text-[15px]">Güngör</span>
                <span className="text-brand-500 text-[9px] font-bold uppercase tracking-[.2em] block mt-px">Market</span>
              </div>
            </div>
            <p className="text-[12px] leading-[1.8]">Ömerli Çekmeköy'ün güvenilir marketi. 30 yılı aşkın deneyimle, en taze ürünleri en uygun fiyatlarla sunuyoruz.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-[13px] mb-4">Hızlı Bağlantılar</h4>
            <div className="space-y-2">
              {NAV.map(l => <a key={l.href} href={l.href} className="block text-[12px] hover:text-brand-400 transition-colors">{l.label}</a>)}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-[13px] mb-4">İletişim</h4>
            <div className="space-y-2.5 text-[12px]">
              <div className="flex items-start gap-2"><MapPin size={13} className="text-brand-500 shrink-0 mt-0.5" /><span>Ömerli Mah. Ömerli Cad. No:64, Çekmeköy/İstanbul</span></div>
              <div className="flex items-center gap-2"><Phone size={13} className="text-brand-500 shrink-0" /><a href="tel:02164357053" className="hover:text-brand-400 transition-colors">0216 435 70 53</a></div>
              <div className="flex items-center gap-2"><Clock size={13} className="text-brand-500 shrink-0" /><span>Her gün 06:30 – 22:30</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[.05] mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px]">&copy; 2026 Güngör Market. Tüm hakları saklıdır.</p>
          <p className="text-[10px] text-gray-600">Ömerli, Çekmeköy / İstanbul</p>
        </div>
      </div>
    </footer>
  );
}


function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 z-40 w-10 h-10 bg-brand-600 text-white rounded-xl shadow-xl hover:bg-brand-700 transition-all flex items-center justify-center">
      <ChevronUp size={18} />
    </button>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Categories />
      <WhyUs />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}
