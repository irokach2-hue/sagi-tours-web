const dict = {
  he:{nav_home:"בית",nav_tours:"סיורים",nav_packages:"חבילות",nav_contact:"צור קשר",
      hero_badge:"סיורים פרטיים וקבוצתיים",hero_title:"The Tour of Our Story",
      hero_lead:"מסע שמחבר בין ירושלים לתל-אביב – בין קודש לחופש, בין עבר לעתיד. סיורים נקודתיים, יומיים וחבילות של שבוע+.",
      btn_availability:"בדיקת זמינות",btn_call:"שיחה מהירה",
      features_title:"למה Sagi Tours",f1:"מדריך מוסמך דו־לשוני",f1d:"עברית ואנגלית, עם עומק היסטורי ותרבותי.",
      f2:"מסלולים מותאמים אישית",f2d:"קצב רגוע או קצב גבוה – אתם בוחרים.",
      f3:"גמישות מלאה",f3d:"מחצי יום ועד שבוע+ כולל לוגיסטיקה.",
      f4:"איסוף ונוחות",f4d:"נקודות מפגש נוחות ותחבורה מסודרת.",
      tours_title:"סיורים מומלצים",t1:"ירושלים: המוכר והנסתר (4–6 ש׳)",t2:"תל-אביב–יפו המודרנית (3–5 ש׳)",t3:"מסע שלושת הדתות (יום מלא)",t4:"מצדה & ים המלח",tours_btn:"בדוק זמינות",
      packages_title:"חבילות מרובות ימים",p1:"3 ימים: ליבה עירונית",p2:"5 ימים: קודש וחוף",p3:"7–8 ימים: מסע ישראל",
      p1d:"ירושלים × תל-אביב – עיקרי הסיפור.",p2d:"ירושלים, יפו, מצדה, ים המלח.",p3d:"גליל/טבריה/צפת, עכו, זיכרון, אילת/נגב.",
      tailor_title:"בנו לי מסלול",tailor_sub:"ספרו לנו עליכם ונחזור תוך 24 שעות.",
      form_name:"שם מלא",form_email:"אימייל",form_phone:"טלפון",form_dates:"תאריכים משוערים",form_interests:"תחומי עניין (היסטוריה/קולינריה/דת/ים וכו')",
      form_send:"שליחה",whatsapp:"וואטסאפ",contact_title:"צור קשר",
      footer:"© 2025 Sagi Tours. כל הזכויות שמורות."},
  en:{nav_home:"Home",nav_tours:"Tours",nav_packages:"Packages",nav_contact:"Contact",
      hero_badge:"Private & Group Tours",hero_title:"The Tour of Our Story",
      hero_lead:"A journey connecting Jerusalem and Tel Aviv – sacred and free, past to future. Half-day, full-day, and week-long packages.",
      btn_availability:"Check Availability",btn_call:"Call Now",
      features_title:"Why Sagi Tours",f1:"Licensed bilingual guide",f1d:"Hebrew & English with deep historical and cultural context.",
      f2:"Tailor-made itineraries",f2d:"Relaxed or fast-paced – your call.",
      f3:"Total flexibility",f3d:"From half-day to week+ including logistics.",
      f4:"Easy pickup & comfort",f4d:"Convenient meeting points & transport.",
      tours_title:"Featured Tours",t1:"Jerusalem: Classic & Hidden (4–6h)",t2:"Tel Aviv–Jaffa Modern Icons (3–5h)",t3:"Three-Faiths Journey (Full day)",t4:"Masada & Dead Sea",tours_btn:"Check dates",
      packages_title:"Multi-Day Packages",p1:"3 Days: Urban Core",p2:"5 Days: Sacred & Sea",p3:"7–8 Days: Israel Journey",
      p1d:"Jerusalem × Tel Aviv – the essentials.",p2d:"Jerusalem, Jaffa, Masada, Dead Sea.",p3d:"Galilee/Tiberias/Safed, Akko, Zichron, Eilat/Negev.",
      tailor_title:"Tailor My Route",tailor_sub:"Tell us about you and we’ll get back within 24 hours.",
      form_name:"Full name",form_email:"Email",form_phone:"Phone",form_dates:"Approx. dates",form_interests:"Interests (history/culinary/religion/sea etc.)",
      form_send:"Send",whatsapp:"WhatsApp",contact_title:"Get in touch",
      footer:"© 2025 Sagi Tours. All rights reserved."}
};
let lang="he";
function setLang(next){
  lang=next;
  const t=dict[lang];
  document.documentElement.dir=(lang==="he"?"rtl":"ltr");
  document.documentElement.classList.toggle("rtl", lang==="he");
  for(const [k,v] of Object.entries(t)){
    document.querySelectorAll(`[data-i='${k}']`).forEach(el=>{
      if(el.tagName==='INPUT'||el.tagName==='TEXTAREA'){el.placeholder=v;} else {el.textContent=v;}
    });
  }
}
window.addEventListener("DOMContentLoaded",()=>{
  setLang(lang);
  document.getElementById("lang-he").addEventListener("click",()=>setLang("he"));
  document.getElementById("lang-en").addEventListener("click",()=>setLang("en"));
  document.getElementById("tailor-form")?.addEventListener("submit",(e)=>{e.preventDefault();alert(lang==="he"?"נשלח! נחזור אליך בקרוב.":"Sent! We will contact you soon.");});
});
