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

type HomeCopy = {
  title: string;
  description: string;
  kicker: string;
  hero_a: string;
  hero_b: string;
  hero_sub: string;
  chips: [string, string, string];
  cta_primary: string;
  cta_secondary: string;
  card_badge: string;
  sit_h: string;
  sit_sub: string;
  sit: Record<SituationId, { t: string; d: string }>;
  from: string;
  pack_kicker: string;
  pack_h: string;
  pack_p: string;
  pack_worth: string;
  pack_cta: string;
  pack_more: string;
  steps_h: string;
  steps: [{ t: string; d: string }, { t: string; d: string }, { t: string; d: string }];
  prices_h: string;
  prices_sub: string;
  price_59: { t: string; d: string };
  price_99: { t: string; d: string };
  price_all: { t: string; d: string };
  per_doc: string;
  one_time: string;
  see_prices: string;
  sample_h: string;
  sample_points: [string, string, string, string];
  sample_label: string;
  guides_h: string;
  all_guides: string;
  faq_h: string;
  faq: { q: string; a: string }[];
  final_h: string;
  final_p: string;
  final_cta: string;
};

const sv: HomeCopy = {
  title: "Brev och avtal för ensamstående mammor – från 59 kr | Skrivklart",
  description:
    "Avtal om underhållsbidrag, överklagande till Försäkringskassan, avbetalningsplan, brev till skolan och socialtjänsten. Gratis utkast, hela texten från 59 kr. Inget konto.",
  kicker: "För ensamstående mammor – och alla som sköter allt själva",
  hero_a: "Du bär allt.",
  hero_b: "Vi skriver breven.",
  hero_sub:
    "Underhållsbidrag, Försäkringskassan, inkasso, skolan, hyresvärden. Svara på några enkla frågor – få ett färdigt brev på korrekt svenska.",
  chips: ["Gratis utkast", "Från 59 kr", "Inget konto"],
  cta_primary: "Hitta rätt brev",
  cta_secondary: "Förstå ett brev jag fått",
  card_badge: "Klart att skriva under",
  sit_h: "Vad behöver du lösa?",
  sit_sub: "Välj det som stämmer. Du läser utkastet innan du betalar något.",
  sit: {
    underhall: {
      t: "Pappan betalar inte underhåll",
      d: "Ett avtal om underhållsbidrag som går att driva in via Kronofogden.",
    },
    fk: {
      t: "Avslag från Försäkringskassan",
      d: "Överklaga bostadsbidrag, VAB eller underhållsstöd med fakta de missat.",
    },
    skuld: {
      t: "Räkningar du inte hinner betala",
      d: "Be om en avbetalningsplan innan det går till Kronofogden.",
    },
    brev: {
      t: "Ett brev du inte förstår",
      d: "Klistra in det. Få det på vanlig svenska, med datum och nästa steg.",
    },
    umgange: {
      t: "Ni behöver ett schema för barnen",
      d: "Boende, umgänge, lov och hämtning – svart på vitt.",
    },
    skola: {
      t: "Något med skolan eller förskolan",
      d: "Ledighet, stöd, oro eller kränkning. Tydligt till rektorn.",
    },
    soc: {
      t: "Du behöver hjälp från socialtjänsten",
      d: "Ansökan eller komplettering med allt i rätt ordning.",
    },
    bostad: {
      t: "Du söker en lägenhet",
      d: "En hyresansökan som får hyresvärden att ringa tillbaka.",
    },
  },
  from: "från",
  pack_kicker: "Mängdköp",
  pack_h: "Mammapaketet",
  pack_p:
    "Sju dokument för det som oftast dyker upp när man är ensam med barnen. Ett köp, använd dem när du behöver i 60 dagar.",
  pack_worth: "Värt",
  pack_cta: "Köp Mammapaketet",
  pack_more: "Fler paket",
  steps_h: "Så går det till",
  steps: [
    { t: "Välj vad det gäller", d: "Ett kort formulär med enkla frågor. Inget konto, ingen inloggning." },
    { t: "Läs utkastet gratis", d: "Början av texten är klar på under en minut. Ser den rätt ut?" },
    { t: "Lås upp hela texten", d: "Betala med kort. Kopiera, skriv ut eller ladda ner direkt." },
  ],
  prices_h: "Priser som går att betala",
  prices_sub: "Inga prenumerationer. Du betalar bara när texten sitter.",
  price_59: { t: "Kortare brev", d: "Avbetalningsplan, skolan, socialtjänsten, myndighetsbrev, reklamation." },
  price_99: { t: "Avtal & överklaganden", d: "Underhållsbidrag, umgänge, överklagande till FK, CV och personligt brev." },
  price_all: { t: "Allt i 30 dagar", d: "Alla dokument, så många du vill. En betalning." },
  per_doc: "per dokument",
  one_time: "engång",
  see_prices: "Alla priser och paket",
  sample_h: "Inte en mall. En färdig text.",
  sample_points: [
    "Svenska som en människa faktiskt skulle skicka",
    "Luckor i [hakparentes] där fakta saknas – inget påhittat",
    "Skriv om kortare eller formellare med ett klick",
    "Utkastet stannar i din webbläsare",
  ],
  sample_label: "Utdrag, avtal om underhållsbidrag",
  guides_h: "Korta guider",
  all_guides: "Alla guider",
  faq_h: "Vanliga frågor",
  faq: [
    {
      q: "Är det juridisk rådgivning?",
      a: "Nej. Skrivklart skriver utkast. Du läser, ändrar och ansvarar för det du skickar. Vid tvist om vårdnad eller stora summor: prata med en jurist eller familjerätten i din kommun.",
    },
    {
      q: "Vad kostar det?",
      a: "Utkastet är gratis. Hela texten kostar 59 kr för kortare brev och 99 kr för avtal och överklaganden. Mammapaketet med sju dokument kostar 149 kr.",
    },
    {
      q: "Vem ser det jag skriver?",
      a: "Utkastet sparas bara i din webbläsare. Vi sparar inte innehållet i dokumentet. Betalningen går via Stripe.",
    },
    {
      q: "Går ett avtal om underhållsbidrag att driva in?",
      a: "Ett skriftligt avtal om underhållsbidrag som är bevittnat av två personer kan verkställas av Kronofogden om pengarna uteblir. Skrivklarts avtal har rader för två vittnen.",
    },
    {
      q: "Behöver jag konto?",
      a: "Nej. Inget konto och ingen prenumeration. Det du låser upp finns kvar i den här webbläsaren.",
    },
  ],
  final_h: "Ett brev mindre att oroa sig för i kväll.",
  final_p: "Börja med utkastet. Det är gratis och tar en minut.",
  final_cta: "Börja nu",
};

const en: HomeCopy = {
  ...sv,
  kicker: "For single mothers – and anyone handling everything alone",
  hero_a: "You carry it all.",
  hero_b: "We write the letters.",
  hero_sub:
    "Child support, Försäkringskassan, debt collectors, school, your landlord. Answer a few simple questions – get a finished letter in correct Swedish.",
  chips: ["Free draft", "From SEK 59", "No account"],
  cta_primary: "Find the right letter",
  cta_secondary: "Understand a letter I got",
  card_badge: "Ready to sign",
  sit_h: "What do you need to sort out?",
  sit_sub: "Pick what fits. You read the draft before paying anything.",
  sit: {
    underhall: { t: "The father isn't paying support", d: "A child support agreement Kronofogden can enforce." },
    fk: { t: "Rejected by Försäkringskassan", d: "Appeal housing allowance, VAB or maintenance support with the facts they missed." },
    skuld: { t: "Bills you can't pay in time", d: "Ask for a payment plan before it goes to Kronofogden." },
    brev: { t: "A letter you don't understand", d: "Paste it. Get it in plain language, with dates and next steps." },
    umgange: { t: "You need a schedule for the kids", d: "Residence, contact, holidays and pick-ups – in writing." },
    skola: { t: "Something with school or preschool", d: "Leave, support, worries or bullying. Clear to the principal." },
    soc: { t: "You need help from social services", d: "An application or supplement with everything in order." },
    bostad: { t: "You're looking for an apartment", d: "A rental application that gets the landlord to call back." },
  },
  from: "from",
  pack_kicker: "Bundle",
  pack_h: "The Mum Pack",
  pack_p: "Seven documents for what usually comes up when you're alone with the kids. One purchase, use them for 60 days.",
  pack_worth: "Worth",
  pack_cta: "Buy the Mum Pack",
  pack_more: "More bundles",
  steps_h: "How it works",
  steps: [
    { t: "Pick your situation", d: "A short form with simple questions. No account, no login." },
    { t: "Read the draft for free", d: "The start of the text is ready in under a minute. Does it look right?" },
    { t: "Unlock the full text", d: "Pay by card. Copy, print or download right away." },
  ],
  prices_h: "Prices you can actually pay",
  prices_sub: "No subscriptions. You only pay when the text is right.",
  price_59: { t: "Shorter letters", d: "Payment plan, school, social services, government letters, complaints." },
  price_99: { t: "Agreements & appeals", d: "Child support, contact, appeals to FK, CV and cover letter." },
  price_all: { t: "Everything for 30 days", d: "Every document, as many as you like. One payment." },
  per_doc: "per document",
  one_time: "one-time",
  see_prices: "All prices and bundles",
  sample_h: "Not a template. A finished text.",
  sample_points: [
    "Swedish a real person would actually send",
    "Gaps in [brackets] where facts are missing – nothing made up",
    "Rewrite shorter or more formal in one click",
    "Your draft stays in your browser",
  ],
  sample_label: "Excerpt, child support agreement (in Swedish)",
  guides_h: "Short guides (Swedish)",
  all_guides: "All guides",
  faq_h: "Common questions",
  faq: [
    { q: "Is this legal advice?", a: "No. Skrivklart writes drafts. You read, edit and are responsible for what you send. For custody disputes or large sums, talk to a lawyer or your municipality's family law office." },
    { q: "What does it cost?", a: "The draft is free. The full text is SEK 59 for shorter letters and SEK 99 for agreements and appeals. The Mum Pack with seven documents is SEK 149." },
    { q: "Who sees what I write?", a: "Your draft is only saved in your browser. We don't store the document. Payment goes through Stripe." },
    { q: "Can a child support agreement be enforced?", a: "A written child support agreement witnessed by two people can be enforced by Kronofogden if payments stop. Skrivklart's agreement has lines for two witnesses." },
    { q: "Do I need an account?", a: "No. No account and no subscription. What you unlock stays in this browser." },
  ],
  final_h: "One less letter to worry about tonight.",
  final_p: "Start with the draft. It's free and takes a minute.",
  final_cta: "Start now",
};

const ar: HomeCopy = {
  ...sv,
  kicker: "للأمهات العازبات – ولكل من يتولّى كل شيء وحده",
  hero_a: "أنتِ تحملين كل شيء.",
  hero_b: "ونحن نكتب الرسائل.",
  hero_sub:
    "النفقة، صندوق التأمين الاجتماعي، شركات التحصيل، المدرسة، المؤجّر. أجيبي عن بضعة أسئلة بسيطة – واحصلي على رسالة جاهزة بلغة سويدية صحيحة.",
  chips: ["مسودة مجانية", "من 59 كرونة", "بدون حساب"],
  cta_primary: "اعثري على الرسالة المناسبة",
  cta_secondary: "افهمي رسالة وصلتك",
  card_badge: "جاهز للتوقيع",
  sit_h: "ما الذي تحتاجين إلى حلّه؟",
  sit_sub: "اختاري ما يناسبك. تقرئين المسودة قبل أن تدفعي أي شيء.",
  sit: {
    underhall: { t: "الأب لا يدفع النفقة", d: "اتفاق نفقة يمكن لـ Kronofogden تحصيله." },
    fk: { t: "رفض من صندوق التأمين الاجتماعي", d: "اعتراض على بدل السكن أو رعاية الطفل أو دعم النفقة، بالوقائع التي أغفلوها." },
    skuld: { t: "فواتير لا تستطيعين دفعها في وقتها", d: "اطلبي خطة تقسيط قبل أن تصل إلى Kronofogden." },
    brev: { t: "رسالة لا تفهمينها", d: "الصقيها. تحصلين عليها بلغة واضحة مع التواريخ والخطوة التالية." },
    umgange: { t: "تحتاجان إلى جدول للأطفال", d: "السكن والزيارة والعطل والاستلام – مكتوبة بوضوح." },
    skola: { t: "أمر يخص المدرسة أو الروضة", d: "إجازة، دعم، قلق أو تنمّر. بوضوح إلى المدير." },
    soc: { t: "تحتاجين مساعدة من الخدمات الاجتماعية", d: "طلب أو استكمال مع كل شيء مرتّب." },
    bostad: { t: "تبحثين عن شقة", d: "طلب إيجار يجعل المؤجّر يتصل بك." },
  },
  from: "من",
  pack_kicker: "شراء بالجملة",
  pack_h: "باقة الأم",
  pack_p: "سبع وثائق لما يظهر عادةً عندما تكونين وحدك مع الأطفال. شراء واحد، استخدميها خلال 60 يوماً.",
  pack_worth: "قيمتها",
  pack_cta: "اشتري باقة الأم",
  pack_more: "باقات أخرى",
  steps_h: "كيف يعمل",
  steps: [
    { t: "اختاري موضوعك", d: "نموذج قصير بأسئلة بسيطة. بدون حساب." },
    { t: "اقرئي المسودة مجاناً", d: "بداية النص جاهزة في أقل من دقيقة." },
    { t: "افتحي النص كاملاً", d: "ادفعي بالبطاقة. انسخي أو اطبعي أو نزّلي فوراً." },
  ],
  prices_h: "أسعار يمكن دفعها",
  prices_sub: "بدون اشتراكات. تدفعين فقط عندما يكون النص مناسباً.",
  price_59: { t: "رسائل قصيرة", d: "خطة تقسيط، المدرسة، الخدمات الاجتماعية، رسائل الجهات الرسمية." },
  price_99: { t: "اتفاقات واعتراضات", d: "النفقة، الزيارة، الاعتراض لدى FK، السيرة الذاتية ورسالة التقديم." },
  price_all: { t: "كل شيء لمدة 30 يوماً", d: "كل الوثائق، بقدر ما تريدين. دفعة واحدة." },
  per_doc: "للوثيقة",
  one_time: "مرة واحدة",
  see_prices: "كل الأسعار والباقات",
  sample_h: "ليس قالباً. نص جاهز.",
  sample_points: [
    "سويدية يرسلها إنسان فعلاً",
    "فراغات بين [أقواس] حيث تنقص الوقائع – لا شيء مختلق",
    "أعيدي الصياغة أقصر أو أكثر رسمية بنقرة",
    "المسودة تبقى في متصفحك",
  ],
  sample_label: "مقتطف، اتفاق نفقة (بالسويدية)",
  guides_h: "أدلة قصيرة (بالسويدية)",
  all_guides: "كل الأدلة",
  faq_h: "أسئلة شائعة",
  faq: [
    { q: "هل هذه استشارة قانونية؟", a: "لا. سكريفكلارت يكتب مسودات. أنتِ تقرئين وتعدّلين وتتحمّلين ما ترسلينه. في نزاعات الحضانة أو المبالغ الكبيرة: تحدّثي مع محامٍ أو مع قسم شؤون الأسرة في بلديتك." },
    { q: "كم يكلّف؟", a: "المسودة مجانية. النص الكامل 59 كرونة للرسائل القصيرة و99 كرونة للاتفاقات والاعتراضات. باقة الأم بسبع وثائق بـ149 كرونة." },
    { q: "من يرى ما أكتب؟", a: "المسودة تُحفظ في متصفحك فقط. لا نحفظ الوثيقة. الدفع عبر Stripe." },
    { q: "هل يمكن تحصيل اتفاق النفقة؟", a: "اتفاق النفقة المكتوب والموقّع بحضور شاهدين يمكن أن تنفّذه Kronofogden إذا توقفت المدفوعات. اتفاق سكريفكلارت فيه سطران لشاهدين." },
    { q: "هل أحتاج حساباً؟", a: "لا. بدون حساب وبدون اشتراك. ما تفتحينه يبقى في هذا المتصفح." },
  ],
  final_h: "رسالة أقل تقلقين بشأنها الليلة.",
  final_p: "ابدئي بالمسودة. إنها مجانية وتستغرق دقيقة.",
  final_cta: "ابدئي الآن",
};

export const HOME_COPY: Record<Lang, HomeCopy> = { sv, en, ar };
