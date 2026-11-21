# Md. Nayeem Hasan Pramanik — Academic Website

Live address (after setup): **https://nayeem-econ.github.io**

## ফাইলগুলো কী

| ফাইল | কাজ |
|---|---|
| `data.js` | **সব লেখা এখানে।** পেপার, নিউজ, শিক্ষা, স্কিল—সব আপডেট এই একটা ফাইলে |
| `index.html`, `style.css`, `main.js` | ওয়েবসাইটের ডিজাইন ও কোড (সাধারণত হাত দিতে হবে না) |
| `cv.html` | data.js থেকে বানানো প্রিন্টযোগ্য CV |
| `assets/img/profile.jpg` | প্রোফাইল ছবি |
| `assets/cv/Nayeem_Pramanik_CV.pdf` | "Download CV" বাটনের PDF |
| `assets/papers/` | পেপারের PDF |

## প্রথমবার লাইভ করা (একবারই)

1. github.com-এ `nayeem-econ` অ্যাকাউন্টে লগইন করুন → উপরে ডানে **+** → **New repository**।
2. Repository name হুবহু লিখুন: `nayeem-econ.github.io` → **Public** রাখুন → **Create repository**।
3. নতুন repo-তে **uploading an existing file** লিংকে ক্লিক করুন।
4. zip খুলে ভেতরের **সব ফাইল ও ফোল্ডার** (index.html, data.js, assets ফোল্ডার ইত্যাদি) টেনে এনে ছেড়ে দিন। zip ফাইলটা নিজে নয়, ভেতরের জিনিসগুলো।
5. নিচে **Commit changes** চাপুন।
6. **Settings → Pages**-এ গিয়ে দেখুন: Source = "Deploy from a branch", Branch = `main` / `(root)` → **Save**।
7. ১–৩ মিনিট পর https://nayeem-econ.github.io খুললেই সাইট দেখা যাবে।

## পরে আপডেট করা (মোবাইল থেকেও হয়)

**নতুন পেপার/নিউজ যোগ করতে:**
1. repo-তে `data.js` খুলুন → পেন্সিল (✏️ Edit) আইকন।
2. যে লিস্টে যোগ করবেন (যেমন `news:` বা `publications:`), সেখানে আগের একটা `{ ... },` ব্লক কপি করে লিস্টের **একদম উপরে** পেস্ট করুন, লেখা বদলান।
3. **Commit changes** → ১–২ মিনিটে সাইট আপডেট।

নিয়ম: লেখা থাকবে `"..."` কোটেশনের ভেতরে, প্রতিটা `{ }` ব্লকের পরে কমা `,` থাকবে।

**ছবি/PDF যোগ করতে:** `assets/img/` বা `assets/papers/` ফোল্ডারে ঢুকে **Add file → Upload files**। তারপর data.js-এ সেই ফাইলের পথ লিখুন, যেমন `pdf: "assets/papers/new-paper.pdf"`।

**গ্যালারিতে ছবি:** `assets/img/gallery/` ফোল্ডারে ছবি আপলোড করে data.js-এর `gallery:` লিস্টে এভাবে লিখুন (category অনুযায়ী ফিল্টার বাটন নিজে থেকেই তৈরি হবে):
`{ src: "assets/img/gallery/jamalpur-1.jpg", title: "MIXTAPE survey", caption: "Household interview in Melandaha, Jamalpur", category: "Fieldwork" },`

**ফিল্ডওয়ার্ক কার্ডের ছবি:** data.js-এর `fieldwork` অংশে `photos: ["assets/img/gallery/jamalpur-1.jpg"]` লিখলে কার্ডের উপরের নকশার জায়গায় ছবিটা বসবে।

**নতুন সার্টিফিকেট:** সার্টিফিকেটের ছবি (JPG) `assets/img/certificates/` ফোল্ডারে আপলোড করুন। তারপর data.js-এর `training:` লিস্টের উপরে এভাবে লিখুন:
`{ date: "Jan 2027", title: "Training-er nam", org: "Ayojok protishthan", type: "Training", text: "Ek line-er bornona.", cert: "assets/img/certificates/new-cert.jpg" },`
`cert:` দিলে কার্ডে ছবি আর "View certificate" বাটন নিজে থেকেই আসবে।

**Scopus / Web of Science লিংক:** data.js-এর `links:` অংশে `{ label: "Scopus", url: "" }`-এর `""`-এর ভেতরে লিংক পেস্ট করুন। লিংক দিলেই বাটন দেখা যাবে।

**Under review পেপার:** data.js-এর `manuscripts: [` লাইনের নিচে লিখুন:
`{ title: "Paper title", authors: "Pramanik, M. N. H., & Islam, A. H. M. S.", journal: "Journal name", status: "Under review", year: "2026" },`

**রেফারেন্সের ছবি:** ছবি `assets/img/references/` ফোল্ডারে আপলোড করে `references:` অংশে সেই ব্যক্তির `photo: ""`-এর ভেতরে পথ লিখুন, যেমন `photo: "assets/img/references/saiful-islam.jpg"`।

**Stats (৬, ৪, ২, ৩ সংখ্যাগুলো):** data.js-এর `stats:` অংশে সংখ্যা বদলে দিন।

**CV PDF নতুন করতে:** data.js আপডেটের পর সাইটের `/cv.html` খুলে ব্রাউজারে Print → Save as PDF (A4) → ফাইলের নাম `Nayeem_Pramanik_CV.pdf` রেখে `assets/cv/`-এ আপলোড করে পুরনোটা বদলে দিন।

কিছু ভুল হলে ভয় নেই: repo-র **History** থেকে আগের ভার্সনে ফিরে যাওয়া যায়।
