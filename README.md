# Change Background On Scroll

Bu loyiha uchta asosiy texnologiyani o'z ichiga oladi: **HTML**, **CSS**, va **JavaScript**. Har bir texnologiya maqsadga muvofiq ravishda loyihaning turli qismlarini boshqaradi va foydalanuvchiga interaktiv va vizual jihatdan boy tajriba taqdim etadi.

### HTML
- `<div class="wrapper">`: Barcha kontentni o'z ichiga olgan asosiy konteyner.
- `<div class="content">`: Har bir tasvirni o'z ichiga olgan alohida konteyner. Har bir tasvir `<img>` tegidan foydalanib sahifaga joylashtirilgan.
- `<script src="script.js"></script>`: JavaScript faylini sahifaga qo'shish orqali interaktivlik taqdim etiladi. JavaScriptning asosiy vazifasi skrolling jarayonida tasvirlarning ko'rinishini boshqarishdir.

### CSS
1. **Layout va Vizual Ko'rinish**:
   - `.wrapper` va `.content` elementlari yordamida sahifaning tuzilishini aniqlash.
   - `position: fixed;` va `z-index` yordamida tasvirlarni qatlamlashtirish. Har bir tasvir sahifada mustahkam joylashgan bo'lib, skroll qilganingizda o'z o'rnini saqlaydi.
   - `transition: all 0.5s;` xususiyati orqali tasvirlarning opasiti o'zgarishini silliq animatsiya bilan amalga oshirish.
2. **Tasvirlarni Stilizatsiya qilish**:
   - Tasvirlar `width: 100%; height: 100%; object-fit: cover;` kabi uslublar yordamida ekranni to'liq egallaydi va sifatli ko'rinish beradi.

### JavaScript
- **Scroll Event Listener**: JavaScript kodida `window.addEventListener("scroll", ...)` yordamida foydalanuvchining skroll harakati kuzatiladi. Skroll qilingan vaqtida sahifada joylashgan har bir tasvirning opasiti o'zgartiriladi.
- **Opacity o'zgartirish**: Har bir tasvir uchun `img.style.opacity` xususiyati orqali opasiti (ko'rinishlik) boshqariladi. Skroll yuksalganida, tasvirlar asta-sekin o'chib boradi va bu foydalanuvchiga tasvirlarning zanjirvari o'zgarishini taqdim etadi.
