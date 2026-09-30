import type { Lang } from "./i18n";

/** Situations on the home page, each pointing at the document that solves it. */
export const SITUATIONS = [
  { id: "underhall", to: "underhallsavtal", icon: "coins" },
  { id: "fk", to: "overklagande", icon: "landmark" },
  { id: "skuld", to: "avbetalningsplan", icon: "receipt" },
  { id: "brev", to: "myndighetsbrev", icon: "mail" },
  { id: "umgange", to: "umgangesavtal", icon: "calendar" },
  { id: "skola", to: "skola-forskola", icon: "school" },
  { id: "soc", to: "socialtjansten", icon: "hand" },
  { id: "bostad", to: "hyresansokan", icon: "home" },
] as const;

export type SituationId = (typeof SITUATIONS)[number]["id"];

type QA = { q: string; a: string };

type HomeCopy = {
  title: string;
  description: string;
  kicker: string;
  hero_a: string;
  hero_b: string;
  hero_sub: string;
  pick: string;
  sit: Record<SituationId, string>;
  trust: [string, string, string];
  pay_with: string;
  steps: [string, string, string];
  pack_h: string;
  pack_p: string;
  pack_worth: string;
  pack_cta: string;
  more: string;
  faq_h: string;
  faq: QA[];
};

const sv: HomeCopy = {
  title: "Brev och avtal för ensamstående föräldrar – från 59 kr | Skrivklart",
  description:
    "Avtal om underhållsbidrag, överklagande till Försäkringskassan, avbetalningsplan, brev till skolan och socialtjänsten. Gratis utkast, hela texten från 59 kr. Inget konto.",
  kicker: "För dig som sköter allt själv",
  hero_a: "Du bär allt.",
  hero_b: "Vi skriver breven.",
  hero_sub: "Välj vad det gäller, svara på några frågor och få ett färdigt brev. Gratis att läsa.",
  pick: "Vad behöver du hjälp med?",
  sit: {
    underhall: "Den andra föräldern betalar inte underhåll",
    fk: "Avslag från Försäkringskassan",
    skuld: "Räkningar jag inte hinner betala",
    brev: "Ett brev jag inte förstår",
    umgange: "Schema för barnen",
    skola: "Något med skolan eller förskolan",
    soc: "Hjälp från socialtjänsten",
    bostad: "Jag söker lägenhet",
  },
  trust: ["Gratis utkast", "Från 59 kr", "Inget konto"],
  pay_with: "Betala med",
  steps: ["Välj vad det gäller", "Läs utkastet gratis", "Betala bara om det sitter"],
  pack_h: "Familjepaketet",
  pack_p: "Sju dokument för barn, pengar och myndigheter. Använd dem när du behöver i 60 dagar.",
  pack_worth: "värt",
  pack_cta: "Köp paketet",
  more: "Alla dokument och priser",
  faq_h: "Vanliga frågor",
  faq: [
    {
      q: "Vad kostar det?",
      a: "Utkastet är gratis. Hela texten kostar 59 kr för kortare brev och 99 kr för avtal och överklaganden. Familjepaketet med sju dokument kostar 149 kr. Inga prenumerationer.",
    },
    {
      q: "Är det juridisk rådgivning?",
      a: "Nej. Skrivklart skriver utkast som du läser, ändrar och skickar själv. Vid tvist om vårdnad eller stora summor: prata med en jurist eller familjerätten i din kommun.",
    },
    {
      q: "Går ett avtal om underhållsbidrag att driva in?",
      a: "Ja, om det är skriftligt och bevittnat av två personer kan Kronofogden driva in det om pengarna uteblir. Skrivklarts avtal har rader för två vittnen.",
    },
    {
      q: "Vem ser det jag skriver?",
      a: "Ingen. Utkastet sparas bara i din webbläsare, och du behöver inget konto. Betalningen går via Stripe.",
    },
  ],
};

const en: HomeCopy = {
  ...sv,
  kicker: "For people handling everything alone",
  hero_a: "You carry it all.",
  hero_b: "We write the letters.",
  hero_sub: "Pick your situation, answer a few questions, get a finished letter in Swedish. Free to read.",
  pick: "What do you need help with?",
  sit: {
    underhall: "The other parent isn't paying support",
    fk: "Rejected by Försäkringskassan",
    skuld: "Bills I can't pay in time",
    brev: "A letter I don't understand",
    umgange: "A schedule for the kids",
    skola: "Something with school or preschool",
    soc: "Help from social services",
    bostad: "I'm looking for an apartment",
  },
  trust: ["Free draft", "From SEK 59", "No account"],
  pay_with: "Pay with",
  steps: ["Pick your situation", "Read the draft for free", "Only pay if it's right"],
  pack_h: "The Family Pack",
  pack_p: "Seven documents for children, money and authorities. Use them whenever you need for 60 days.",
  pack_worth: "worth",
  pack_cta: "Buy the pack",
  more: "All documents and prices",
  faq_h: "Common questions",
  faq: [
    { q: "What does it cost?", a: "The draft is free. The full text is SEK 59 for shorter letters and SEK 99 for agreements and appeals. The Family Pack with seven documents is SEK 149. No subscriptions." },
    { q: "Is this legal advice?", a: "No. Skrivklart writes drafts that you read, edit and send yourself. For custody disputes or large sums, talk to a lawyer or your municipality's family law office." },
    { q: "Can a child support agreement be enforced?", a: "Yes. If it is written and witnessed by two people, Kronofogden can enforce it if payments stop. Skrivklart's agreement has lines for two witnesses." },
    { q: "Who sees what I write?", a: "No one. The draft is only saved in your browser and you don't need an account. Payment goes through Stripe." },
  ],
};

const ar: HomeCopy = {
  ...sv,
  kicker: "لمن يتولّى كل شيء وحده",
  hero_a: "أنتِ تحملين كل شيء.",
  hero_b: "ونحن نكتب الرسائل.",
  hero_sub: "اختاري موضوعك، أجيبي عن بضعة أسئلة، واحصلي على رسالة جاهزة بالسويدية. القراءة مجانية.",
  pick: "بماذا تحتاجين المساعدة؟",
  sit: {
    underhall: "الوالد الآخر لا يدفع النفقة",
    fk: "رفض من صندوق التأمين الاجتماعي",
    skuld: "فواتير لا أستطيع دفعها في وقتها",
    brev: "رسالة لا أفهمها",
    umgange: "جدول للأطفال",
    skola: "أمر يخص المدرسة أو الروضة",
    soc: "مساعدة من الخدمات الاجتماعية",
    bostad: "أبحث عن شقة",
  },
  trust: ["مسودة مجانية", "من 59 كرونة", "بدون حساب"],
  pay_with: "ادفعي بـ",
  steps: ["اختاري موضوعك", "اقرئي المسودة مجاناً", "ادفعي فقط إن كانت مناسبة"],
  pack_h: "باقة العائلة",
  pack_p: "سبع وثائق للأطفال والمال والجهات الرسمية. استخدميها متى احتجتِ خلال 60 يوماً.",
  pack_worth: "قيمتها",
  pack_cta: "اشتري الباقة",
  more: "كل الوثائق والأسعار",
  faq_h: "أسئلة شائعة",
  faq: [
    { q: "كم يكلّف؟", a: "المسودة مجانية. النص الكامل 59 كرونة للرسائل القصيرة و99 كرونة للاتفاقات والاعتراضات. باقة العائلة بسبع وثائق بـ149 كرونة. بدون اشتراكات." },
    { q: "هل هذه استشارة قانونية؟", a: "لا. سكريفكلارت يكتب مسودات تقرئينها وتعدّلينها وترسلينها بنفسك. في نزاعات الحضانة أو المبالغ الكبيرة: تحدّثي مع محامٍ أو مع قسم شؤون الأسرة في بلديتك." },
    { q: "هل يمكن تحصيل اتفاق النفقة؟", a: "نعم، إذا كان مكتوباً وبحضور شاهدين يمكن لـ Kronofogden تحصيله إذا توقفت المدفوعات. اتفاق سكريفكلارت فيه سطران لشاهدين." },
    { q: "من يرى ما أكتب؟", a: "لا أحد. المسودة تُحفظ في متصفحك فقط ولا تحتاجين حساباً. الدفع عبر Stripe." },
  ],
};

export const HOME_COPY: Record<Lang, HomeCopy> = { sv, en, ar };
