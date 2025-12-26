 gsap.registerPlugin(ScrollTrigger);

        const translations = {
            'TR': {
                'nav1': 'BAŞLANGIÇ',
                'nav2': 'HİZMETLER',
                'nav3': 'HAKKIMIZDA',
                'nav4': 'İLETİŞİM',
                'nav-title': 'NAVİGASYON',
                'social-title': 'SOSYAL MEDYA',
                'hero-sub': 'ATÖLYE SANATI',
                'hero-title': 'DEMİRİN <br> SANATI',
                'hero-desc': 'Ham çeliği yüksek ısı ve hassas işçilikle yoğurarak, mekanlarınıza ömürlük bir karakter kazandırıyoruz.',
                'btn-quote': 'TEKLİF AL',
                'serv-header': 'Neler Yapıyoruz?',
                // Yeni Kartlar TR
                's1-t': 'SANDALYE',
                's1-d': 'Profesyonel Ve Modern Sandalyeler.',
                's2-t': 'PREFABRİK YAPI',
                's2-d': 'Özel tasarım prefabrik deneyimi.',
                's3-t': 'TENTE',
                's3-d': 'Hızlı kurulum, dayanıklı ve ekonomik tente çözümleri.',
                's4-t': 'DEMİR KORKULUK',
                's4-d': 'Modern Ve İç Dizayna Uygun Korkuluklar.',
                's5-t': 'DEMİR ÇİT',
                's5-d': 'Güvenli, modern ve özel ölçü çit üretimi.',
                's6-t': 'ELEKTROT KAYNAĞI',
                's6-d': 'Güvenli, modern ve özel teknolojiler.',
                // Diğerleri
                'about-header': 'Atölye Ruhu',
                'stat1': 'DENEYİM YILI',
                'stat2': 'TAMAMLANAN PROJE',
                'stat3': 'SAHADA GEÇEN SAAT',
                'story-title': 'Demirin Sanata Dönüşen Yolculuğu',
                'story-p1': 'Geleneksel el işçiliğinin ruhunu modern teknolojiyle birleştiriyoruz. Dayanıklılığı zarafetle harmanlıyoruz.',
                'btn-open': '+',
                'cont-header': 'Bizimle İletişime Geçin',
                'c1': 'ADRESİMİZ',
                'c1-v': 'SAKARYA ADAPAZARI',
                'c2': 'TELEFON',
                'c3': 'E-POSTA',
                'f1': 'Ad Soyad',
                'f2': 'E-Posta',
                'f4': 'Mesajınız',
                'btn-send': 'GÖNDER',
                'footer': 'TÜM HAKLARI SAKLIDIR.',
                'hours-title': 'MESAİ SAATLERİ',
                'days': 'Pazartesi - Cumartesi:',
                'sunday': 'Pazar:',
                'closed': 'Kapalı'
            },
            'EN': {
                'nav1': 'HOME',
                'nav2': 'SERVICES',
                'nav3': 'ABOUT US',
                'nav4': 'CONTACT',
                'nav-title': 'NAVIGATION',
                'social-title': 'SOCIAL MEDIA',
                'hero-sub': 'WORKSHOP ART',
                'hero-title': 'THE ART <br> OF IRON',
                'hero-desc': 'We mold raw steel with precision craftsmanship to bring life-long character to your spaces.',
                'btn-quote': 'GET QUOTE',
                'serv-header': 'What We Do?',
                // Yeni Kartlar EN
                's1-t': 'CHAIRS',
                's1-d': 'Professional and Modern Chairs.',
                's2-t': 'PREFABRICATED STRUCTURES',
                's2-d': 'Custom design prefab experience.',
                's3-t': 'AWNING',
                's3-d': 'Fast installation, durable and economical awning solutions.',
                's4-t': 'IRON RAILINGS',
                's4-d': 'Modern railings suitable for interior design.',
                's5-t': 'IRON FENCES',
                's5-d': 'Secure, modern and custom size fence production.',
                's6-t': 'ELECTRODE WELDING',
                's6-d': 'Safe, modern and special technologies.',
                // Diğerleri
                'about-header': 'Workshop Spirit',
                'stat1': 'YEARS OF EXPERIENCE',
                'stat2': 'COMPLETED PROJECTS',
                'stat3': 'HOURS SPENT ON THE FIELD',
                'story-title': 'Journey of Iron Into Art',
                'story-p1': 'We blend traditional craftsmanship with modern technology. Durability meets elegance.',
                'btn-open': '+',
                'cont-header': 'Contact Us',
                'c1': 'OUR ADDRESS',
                'c1-v': 'SAKARYA ADAPAZARI',
                'c2': 'PHONE',
                'c3': 'E-MAIL',
                'f1': 'Full Name',
                'f2': 'E-Mail',
                'f4': 'Your Message',
                'btn-send': 'SEND',
                'footer': 'ALL RIGHTS RESERVED.',
                'hours-title': 'WORKING HOURS',
                'days': 'Monday - Saturday:',
                'sunday': 'Sunday:',
                'closed': 'Closed'
            }
        };

        function changeLang(btn, lang) {
            document.querySelectorAll('.lang-switch span').forEach(s => s.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        // Cursor Movement
        document.addEventListener('mousemove', (e) => {
            gsap.to('#cursor', { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to('#cursor-follower', { x: e.clientX - 15, y: e.clientY - 15, duration: 0.1 });
            document.documentElement.style.setProperty('--x', e.clientX + 'px');
            document.documentElement.style.setProperty('--y', e.clientY + 'px');
        });

        // Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    if (entry.target.querySelector('.stat-number')) {
                        animateStats();
                    }
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        function animateStats() {
            document.querySelectorAll('.stat-number').forEach(num => {
                const target = +num.getAttribute('data-target');
                const count = +num.innerText;
                if (count === 0) {
                    gsap.to(num, {
                        innerText: target,
                        duration: 2,
                        snap: { innerText: 1 }
                    });
                }
            });
        }

        function openLightbox(src) {
            const lb = document.getElementById('lightbox');
            const img = document.getElementById('lightbox-img');
            img.src = src;
            lb.style.display = 'flex';
            gsap.to(lb, { opacity: 1, duration: 0.5 });
        }

        function closeLightbox() {
            const lb = document.getElementById('lightbox');
            gsap.to(lb, {
                opacity: 0, duration: 0.3, onComplete: () => {
                    lb.style.display = 'none';
                }
            });
        }




        document.querySelector(".contact-form").addEventListener("submit", async function (e) {
            e.preventDefault(); // Sayfa yönlendirmesini engelle

            const form = e.target;
            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                showSuccessMessage();
                form.reset(); // Formu temizle
            } else {
                alert("Gönderim sırasında bir hata oluştu!");
            }
        });

        function showSuccessMessage() {
            let success = document.createElement("div");
            success.textContent = "Mesajınız başarıyla gönderildi ✔";
            success.style.color = "#28a745";
            success.style.fontSize = "18px";
            success.style.marginTop = "15px";
            success.style.fontWeight = "600";
            success.style.animation = "fadeIn 0.5s ease";

            document.querySelector(".contact-form").appendChild(success);

            // 5 saniye sonra mesaj kaybolsun
            setTimeout(() => {
                success.remove();
            }, 5000);
        }