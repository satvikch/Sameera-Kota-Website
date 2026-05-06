// Live content for the Dr. Sameera K practice website.
// Source of truth for names, address, phone, email: https://drsameerakota.com
// Any field marked with a `{{…}}` placeholder below was not listed on the
// current live site and needs to be confirmed with Dr. Sameera K before launch.
// See CONTENT_AUDIT.md for the tiered risk list.

export const site = {
  doctor: {
    // The live site self-brands as "Dr. Sameera K". Use that everywhere patient-facing.
    name: 'Dr. Sameera K',
    firstName: 'Sameera',
    title: 'General, Laparoscopic & Laser Surgeon',
    qualifications: ['MBBS', 'MS (General Surgery)', 'FMAS', 'FISCP'],
    specialisations: [
      'Laparoscopic surgery',
      'Laser proctology',
      'Minimally invasive general surgery',
    ],
    // Not listed on live site — needs confirmation.
    experienceYears: '{{YEARS_OF_EXPERIENCE}}',
    regNumber: '{{TSMC-REGISTRATION-NUMBER}}',
    philosophy:
      'My work begins with listening. Before any surgical plan is offered, we take the time to understand what you are actually facing, explain it without jargon, and walk through the least invasive option that gives a durable result.',
    bio: [
      'Dr. Sameera K is a consultant general, laparoscopic and laser surgeon practising at Susheela Hospital, Kothapet, Hyderabad. She holds an MBBS, an MS in General Surgery, and fellowships in Minimal Access Surgery (FMAS) and the Indian Society for Colorectal Proctology (FISCP).',
      'Her practice is organised around minimally invasive care for the everyday surgical problems adults in Hyderabad are most likely to face — hernia, gallstones, appendicitis, piles, fissures and fistula, breast lumps, thyroid nodules, diabetic foot complications, and soft-tissue abscesses.',
      'Many patients come specifically because they prefer a female surgeon for sensitive or intimate concerns; she treats that as a privilege, not a selling point. Consultations are unhurried and private. You leave with a clear, written plan.',
    ],
    // Not on the live site — commission a professional portrait before launch.
    photo: '{{DOCTOR_PORTRAIT_URL}}',
    photoAlt: 'Portrait of Dr. Sameera K, general and laparoscopic surgeon',
    education: [
      // Institution names and years not listed on live site — confirm with Dr. Kota.
      { year: '{{YEAR}}', description: 'MBBS' },
      { year: '{{YEAR}}', description: 'MS in General Surgery' },
      { year: '{{YEAR}}', description: 'Fellowship in Minimal Access Surgery (FMAS)' },
      { year: '{{YEAR}}', description: 'Fellowship of the Indian Society for Colorectal Proctology (FISCP)' },
    ],
    memberships: [
      'Fellow, Association of Minimal Access Surgeons of India (FMAS)',
      'Fellow, Indian Society for Colorectal Proctology (FISCP)',
      // Add any local Telangana chapter memberships before launch.
    ],
    practice: {
      clinicName: 'Susheela Hospital',
      addressLine1: '11-12-147, Road No. 3',
      addressLine2: 'SRK Puram, Kothapet',
      city: 'Hyderabad',
      state: 'Telangana',
      // Pincode not listed on live site — confirm with clinic.
      pincode: '{{PINCODE}}',
      // Real numbers from the live site. Only one number is published; we re-use it for
      // WhatsApp and emergency until a separate line is confirmed.
      phone: '+918125205698',
      phoneDisplay: '+91 81252 05698',
      whatsapp: '918125205698',
      whatsappDisplay: '+91 81252 05698',
      emergencyPhone: '+918125205698',
      emergencyPhoneDisplay: '+91 81252 05698',
      email: 'drsameerakota@gmail.com',
      // Live site did not list consulting hours. These are placeholders —
      // please confirm with the clinic and update before launch.
      hoursGrouped: [
        { days: 'Mon – Sat', time: '{{OPEN}} – {{CLOSE}}' },
        { days: 'Sunday', time: 'By appointment' },
      ],
      mapEmbedUrl:
        'https://www.google.com/maps?q=Susheela+Hospital+SRK+Puram+Kothapet+Hyderabad&output=embed',
      mapDirectionsUrl: 'https://maps.app.goo.gl/kDN6jZzNM1M8Lqwf6',
      socials: {
        instagram: 'https://www.instagram.com/drsameera.genralsurgeon/',
        facebook: 'https://www.facebook.com/profile.php?id=61575129399475',
      },
    },
  },

  heroRotatingWords: [
    'hernia',
    'gallstones',
    'appendicitis',
    'piles, fissures & fistula',
    'thyroid nodules',
    'breast lumps',
  ],

  trustMetrics: [
    { icon: 'HeartHandshake', value: 'Female-led', label: 'Consultation & care', note: 'Many patients prefer this for sensitive concerns' },
    { icon: 'Stethoscope', value: 'FMAS · FISCP', label: 'Fellowship trained', note: 'In minimal access surgery & colorectal proctology' },
    { icon: 'Zap', value: 'Laparoscopic & laser', label: 'Minimally invasive', note: 'Smaller incisions, faster recovery' },
    { icon: 'MapPin', value: 'Kothapet', label: 'Susheela Hospital', note: 'SRK Puram, Hyderabad' },
  ],

  whyChooseUs: [
    {
      number: '01',
      title: 'A proper consultation first',
      description:
        'Every decision starts with a full clinical examination and only the tests we actually need. If your problem can be handled without surgery, we say so clearly — and tell you what to do instead.',
      variant: 'featured',
    },
    {
      number: '02',
      title: 'Minimally invasive when we can',
      description:
        'Laparoscopic technique for abdominal problems, diode laser for proctology, tiny incisions where open surgery would once have meant a long scar. Shorter hospital stays, less pain, quicker return to normal life.',
      variant: 'dark',
    },
    {
      number: '03',
      title: 'A calm, private setting for sensitive concerns',
      description:
        'Piles, fissures, fistulas, breast lumps, thyroid nodules — these often get delayed out of embarrassment. A female surgeon is available for every stage of the examination and treatment.',
      variant: 'light',
    },
    {
      number: '04',
      title: 'Honest answers about recovery',
      description:
        'Before you consent, you will know exactly what to expect — how long you will be in hospital, how many days of rest at home, when you can return to work. No surprises after surgery.',
      variant: 'accent',
    },
  ],

  processSteps: [
    {
      number: '01',
      title: 'Consultation',
      shortDesc: 'A proper conversation, a careful examination, and an honest opinion on whether surgery is the right path.',
      icon: 'MessageSquare',
      detail: {
        what: 'A 30–40 minute consultation at Susheela Hospital. Please bring any previous reports, scans, and a list of current medications.',
        expect: 'A history, a clinical examination, and a plain-language explanation of what we think is going on and what the options are.',
        outcome: 'Either a non-surgical management plan, or a proposed surgical plan with the reasons, risks and alternatives clearly explained.',
      },
    },
    {
      number: '02',
      title: 'Tests, if needed',
      shortDesc: 'Targeted imaging and blood work — only what is necessary to plan the surgery safely.',
      icon: 'ScanSearch',
      detail: {
        what: 'Ultrasound, endoscopy, MRI or blood investigations, only when they will change the plan. We reuse recent reports where we safely can.',
        expect: 'Coordinated appointments at partnered diagnostic centres to keep your time off work to a minimum.',
        outcome: 'A confirmed diagnosis, a grade or stage where relevant, and a written pre-operative plan.',
      },
    },
    {
      number: '03',
      title: 'Preparing for surgery',
      shortDesc: 'Anaesthesia review, medical fitness, fasting and medication guidance — all in writing.',
      icon: 'ClipboardList',
      detail: {
        what: 'Anaesthesia clearance, optimisation of blood sugar or blood pressure if needed, and a written pre-op checklist.',
        expect: 'A phone call the day before surgery to confirm fasting, medications to pause, and your reporting time at the hospital.',
        outcome: 'You arrive on the day of surgery knowing exactly what to bring, when to stop eating, and who to call for any last-minute question.',
      },
    },
    {
      number: '04',
      title: 'Surgery day',
      shortDesc: 'Minimally invasive where appropriate, under full anaesthesia with continuous monitoring.',
      icon: 'Activity',
      detail: {
        what: 'Most procedures take 30–90 minutes in theatre, using laparoscopic or diode-laser technique as planned.',
        expect: 'Your family is updated at key points during the procedure. Recovery is in a dedicated post-op bay.',
        outcome: 'Most patients are walking and eating the same evening. A written discharge plan is handed to you before you leave.',
      },
    },
    {
      number: '05',
      title: 'Recovery & follow-up',
      shortDesc: 'A first review in 7–10 days, then targeted follow-up through the healing window.',
      icon: 'HeartPulse',
      detail: {
        what: 'Structured follow-up visits to check wound healing, bowel or bladder function, and return to normal activity.',
        expect: 'WhatsApp access for sensible post-op questions. Clear red-flag symptoms that mean you should come in sooner.',
        outcome: 'Written discharge from care once the result is stable — usually four to six weeks after surgery.',
      },
    },
  ],

  procedures: [
    {
      slug: 'laser-proctology',
      title: 'Laser treatment for piles, fissures & fistula',
      category: 'Proctology',
      icon: 'Zap',
      imageUrl: '{{PROCEDURE_IMAGE_LASER_PROCTOLOGY}}',
      imageAlt: 'Diode-laser proctology — an illustrative reference image',
      summary:
        'Diode-laser treatment for haemorrhoids, anal fissures and fistula — designed around the two things patients ask for most: less pain, and getting back to normal life quickly.',
      bullets: [
        'No incisions or stitches for most piles procedures',
        'Day-care surgery, usually discharged within 6–8 hours',
        'Return to desk work in 3–5 days',
      ],
      disclaimer:
        'Most suitable for Grade 2 and Grade 3 piles and selected fistulas. More advanced disease may need a different approach — we decide after examining you.',
      candidates:
        'Adults with piles that are bleeding or painful, chronic fissures that are not healing, or low and mid fistula-in-ano. Not offered for thrombosed grade 4 piles or for patients with uncontrolled bleeding disorders.',
      procedureOverview:
        'The procedure is done under short general or spinal anaesthesia. A thin laser fibre delivers targeted energy that shrinks haemorrhoidal tissue, seals fissure edges or closes the fistula tract — without cutting open the sensitive skin around the anus.',
      downtime: 'Minor discomfort and spotting for 2–4 days. Most patients return to desk work within a week.',
      detailed: {
        overview: [
          'Piles, fissures and fistulas are the three most-delayed surgical problems in India — most patients arrive months after their symptoms start. Laser proctology was developed specifically because conventional open surgery had two unpopular features: significant post-operative pain, and a long recovery.',
          'The diode laser delivers precisely targeted heat through a thin fibre. For piles, the energy shrinks the haemorrhoidal vascular tissue from the inside, preserving the sensitive anal lining. For fistulas, the tract is destroyed from within, keeping the external skin intact. For fissures, the laser helps relax the internal sphincter and allows healing.',
        ],
        howItWorks:
          'Under anaesthesia, a thin laser fibre is passed into the target tissue. Energy is delivered in short, controlled pulses at a wavelength that seals blood vessels and destroys diseased tissue without cutting healthy skin. Because no incisions are made on the anal margin, post-operative pain is typically mild and manageable with simple oral painkillers.',
        benefits: [
          'Less post-operative pain than conventional open surgery',
          'No external wounds for most cases — no dressings, no packing',
          'Short hospital stay, usually day-care',
          'Quicker return to work, travel and normal activity',
          'Low risk of post-op continence problems when done on the right cases',
        ],
        honestRisks:
          'Temporary mild bleeding and discomfort for 2–4 days is expected. Uncommonly: recurrence (more likely in Grade 4 disease), transient sphincter irritation, or the need to switch to conventional surgery if the anatomy at operation is unsuitable. These are discussed at the consent stage, in writing.',
        sessionInfo: {
          duration: '30–45 minutes in theatre',
          stay: 'Day care — usually discharged within 6–8 hours',
          recoveryAtHome: '48–72 hours of rest',
          returnToWork: '3–5 days for desk work, longer for physical roles',
          resultsVisibleIn: 'Bleeding and pain settle within 2 weeks; full tissue healing by 4–6 weeks',
        },
        preCare: [
          'Investigations and anaesthesia clearance completed one week before',
          'Fast from midnight on the day of surgery',
          'Pause blood thinners only if advised — never stop them on your own',
          'Arrange someone to take you home after discharge',
        ],
        postCare: [
          'A high-fibre diet and plenty of fluids to keep stools soft',
          'Sitz baths twice daily for the first week',
          'Oral painkillers as prescribed — strong ones are rarely needed',
          'Avoid heavy lifting and intense exercise for 10–14 days',
          'A follow-up review at 7–10 days, then again at 4 weeks',
        ],
        faqs: [
          {
            question: 'Is laser piles surgery really painless?',
            answer:
              "It is significantly less painful than traditional surgery, but it is not painless. Expect mild discomfort for 2–4 days that is controlled with simple oral painkillers. Anyone promising zero pain is overselling.",
          },
          {
            question: 'Will piles come back after laser treatment?',
            answer:
              'Recurrence is uncommon but possible — more so in Grade 4 disease, or if dietary and bowel habits that caused the piles do not change. We set clear expectations at the consultation.',
          },
          {
            question: 'Can I travel home the same day?',
            answer:
              'Yes, for most laser proctology procedures. We usually keep you for observation for 6–8 hours post-surgery before discharge, and advise someone to accompany you home.',
          },
        ],
      },
    },
    {
      slug: 'hernia-repair',
      title: 'Laparoscopic hernia repair',
      category: 'Laparoscopy',
      icon: 'Shield',
      imageUrl: '{{PROCEDURE_IMAGE_HERNIA}}',
      imageAlt: 'Laparoscopic hernia repair — an illustrative reference image',
      summary:
        'Keyhole repair of inguinal, umbilical, incisional and ventral hernias, reinforced with a mesh placed through small incisions — designed for structural strength and a quick return to activity.',
      bullets: [
        'Three small incisions, each under 1 cm',
        'Mesh reinforcement for long-term strength',
        'Return to light activity in 5–7 days',
      ],
      disclaimer:
        'The exact technique (TEP, TAPP, IPOM, eTEP) is chosen based on hernia size, location and any previous abdominal surgery. We explain the choice at consultation.',
      candidates:
        'Adults with a reducible or symptomatic hernia suitable for mesh repair. Emergency or strangulated presentations may need a different approach.',
      procedureOverview:
        'Under general anaesthesia, three small working ports are placed. The hernia defect is identified, the contents returned into the abdomen, and a shaped polypropylene mesh is positioned and fixed to reinforce the weak area.',
      downtime:
        'Most patients are walking the same evening, driving in 3–5 days, and back to office work within a week. Heavy lifting waits 4–6 weeks.',
      detailed: {
        overview: [
          'A hernia is a weakness in the abdominal wall through which internal tissue pushes out, causing a visible lump. It is one of the commonest surgical problems in Indian adults, particularly in men over 45 and in women after pregnancy or previous abdominal surgery.',
          'Laparoscopic repair reaches the defect from the inside, which means the main weight-bearing muscles of the abdominal wall are never cut open. Patients recover faster and have less long-term groin or incisional pain than with open repair in most published series.',
        ],
        howItWorks:
          "Three small ports (each under 1 cm) are placed. A tailored polypropylene mesh is positioned to cover the hernia defect and a margin of surrounding healthy tissue, and fixed with tacks, sutures or tissue glue depending on anatomy. The mesh is gradually incorporated by the body's own tissue, forming a durable reinforcement.",
        benefits: [
          'Small incisions, minimal scarring',
          'Less post-operative pain than open repair',
          'Earlier return to driving, work and exercise',
          'Lower rate of chronic groin pain in published series for inguinal repair',
          'Bilateral hernias can often be repaired in a single operation',
        ],
        honestRisks:
          'Temporary bruising and groin or abdominal wall discomfort for 7–10 days. Uncommonly: seroma (a fluid collection), urinary retention, mesh-related pain, or recurrence (around 1–3% in published series). Everything is explained clearly at consent.',
        sessionInfo: {
          duration: '45–75 minutes in theatre',
          stay: 'Same-day or next-morning discharge',
          recoveryAtHome: '5–7 days of rest',
          returnToWork: '5–7 days for desk work, 4–6 weeks before heavy lifting',
          resultsVisibleIn: 'Full abdominal wall strength by 6 weeks',
        },
        preCare: [
          'Anaesthesia and cardiac clearance, if indicated',
          'Fast from midnight on the day of surgery',
          'Stop smoking for at least 2 weeks before surgery, if possible',
          'Optimise blood sugar and blood-pressure control beforehand',
        ],
        postCare: [
          'Walk frequently from day one, but avoid straining',
          'Keep the port sites clean and dry for 5 days',
          'Gentle laxatives for the first week to avoid straining',
          'Avoid lifting more than 5 kg for 4 weeks, or more than 10 kg for 6 weeks',
          'Review at 7 days and 6 weeks',
        ],
        faqs: [
          {
            question: 'Is it safe to leave a mesh inside the body?',
            answer:
              'Polypropylene meshes have been used for hernia repair for over 30 years, with a strong safety record. The body incorporates the mesh into the abdominal wall. Mesh-related complications exist but are uncommon and are discussed in detail at consent.',
          },
          {
            question: 'Can both sides be repaired at once if I have bilateral hernias?',
            answer:
              'Yes — a bilateral laparoscopic repair is usually done in a single sitting, with the same recovery time as a one-sided repair.',
          },
          {
            question: 'When can I go back to the gym?',
            answer:
              'Light cardio at 2 weeks, moderate resistance work at 4 weeks, heavy lifting at 6 weeks — provided the wound is healing normally at each check-up.',
          },
        ],
      },
    },
    {
      slug: 'gallbladder',
      title: 'Gallbladder surgery for gallstones',
      category: 'Laparoscopy',
      icon: 'Activity',
      imageUrl: '{{PROCEDURE_IMAGE_GALLBLADDER}}',
      imageAlt: 'Laparoscopic gallbladder surgery — an illustrative reference image',
      summary:
        'Removal of a diseased gallbladder through four keyhole incisions — the standard treatment for symptomatic gallstones and gallbladder inflammation.',
      bullets: [
        'Four incisions, each under 1 cm',
        'Usually discharged within 24–48 hours',
        'Normal diet within 3–5 days',
      ],
      disclaimer:
        'Suitable for symptomatic gallstone disease, biliary colic, and selected cases of acute cholecystitis. Complex cases occasionally need an open conversion — rare, and always discussed beforehand.',
      candidates:
        'Adults with symptomatic gallstones, recurrent biliary colic, or chronic gallbladder inflammation. Silent, asymptomatic gallstones do not automatically need surgery — we review each case individually.',
      procedureOverview:
        'Under general anaesthesia, four small ports are placed. The gallbladder is carefully separated from the liver bed, the cystic duct and artery are clipped and divided, and the organ is removed through the umbilical port.',
      downtime:
        'Most patients are home the next day, on a normal diet within 3–5 days, and back to office work within a week.',
      detailed: {
        overview: [
          'Gallstone disease is one of the commonest reasons Indian adults present to a surgeon — particularly after age 40, after rapid weight loss, or during pregnancy. Most stones are silent. When they cause pain, inflammation or complications, removal is the definitive treatment.',
          'Laparoscopic cholecystectomy is the worldwide standard. It has a very high safety record in experienced hands, a short hospital stay, and a recovery profile that lets most patients resume normal life within a week.',
        ],
        howItWorks:
          'A small camera and instruments are introduced through four keyhole incisions. The cystic duct and cystic artery are carefully identified and divided, the gallbladder is separated from the liver surface, and the whole organ is retrieved through the umbilical port.',
        benefits: [
          'Definitive cure for symptomatic gallstone disease',
          'Small scars, most of which fade within six months',
          'Short hospital stay — usually one night',
          'Most patients eat a normal diet within a few days',
          'Dietary counselling is included, particularly for patients worried about life without a gallbladder',
        ],
        honestRisks:
          'Common: temporary shoulder-tip discomfort for 24–48 hours (from the gas used during surgery), and mild bruising. Uncommon: bile leak, retained stone in the common bile duct, or bile duct injury (under 0.3% in experienced hands). All risks are laid out in writing at consent.',
        sessionInfo: {
          duration: '45–75 minutes in theatre',
          stay: 'One night in hospital is usual; same-day discharge for selected cases',
          recoveryAtHome: '5–7 days of rest',
          returnToWork: '5–7 days for desk work, 10–14 days for active roles',
          resultsVisibleIn: 'Pain relief is immediate for most; scars mature over 6 months',
        },
        preCare: [
          'Ultrasound and blood work within the last 3 months',
          'Anaesthesia review for patients with cardiac or respiratory conditions',
          'Fast from midnight the night before surgery',
          'Arrange someone to take you home at discharge',
        ],
        postCare: [
          'A light, low-fat diet for the first 3–5 days — then a gradual return to normal',
          'Gentle walking from day one; avoid heavy lifting for 2 weeks',
          'Keep port sites clean and dry for 5 days',
          'Review at 7–10 days and again at 4 weeks',
        ],
        faqs: [
          {
            question: 'Can I live a normal life without a gallbladder?',
            answer:
              'Yes. The gallbladder stores bile but is not essential for digestion — the liver keeps producing bile, which now flows directly into the intestine. Most people notice no long-term change. A few find that rich or fatty meals are less well tolerated for a few weeks.',
          },
          {
            question: 'Do all gallstones need surgery?',
            answer:
              'No. Silent gallstones found incidentally on a scan usually do not need intervention. Stones that cause pain, inflammation, jaundice, or pancreatitis do. We review the clinical picture, not just the scan.',
          },
          {
            question: 'How long before I can eat normally?',
            answer:
              'Most patients resume a normal diet within 3–5 days. A low-fat approach for the first week helps the digestive system adjust.',
          },
        ],
      },
    },
    {
      slug: 'appendicectomy',
      title: 'Appendix removal',
      category: 'Emergency',
      icon: 'Stethoscope',
      imageUrl: '{{PROCEDURE_IMAGE_APPENDIX}}',
      imageAlt: 'Laparoscopic appendix removal — an illustrative reference image',
      summary:
        'Rapid, minimally invasive removal of an inflamed appendix — an emergency procedure where early treatment makes a big difference to the recovery.',
      bullets: [
        'Three small incisions',
        'Usual hospital stay of 24–36 hours',
        'Better cosmetic result than open surgery',
      ],
      disclaimer:
        'Sudden right-lower abdominal pain with nausea or fever needs urgent surgical review. Delayed presentations may need a different operative plan.',
      candidates:
        'Adults and adolescents with clinically suspected or imaging-confirmed acute appendicitis. Complicated appendicitis (abscess, rupture) may need a staged approach.',
      procedureOverview:
        'Under general anaesthesia, usually within a few hours of diagnosis. Three small ports are placed, the appendix is identified, its base is secured, and the organ is removed.',
      downtime:
        'Most patients are discharged the next day, on a normal diet within 24–48 hours, and back to school or desk work within a week.',
      detailed: {
        overview: [
          'Acute appendicitis is the commonest surgical emergency. The classical picture — vague central abdominal pain that shifts to the right lower abdomen, loss of appetite, nausea — is present in roughly half of cases; imaging helps confirm the diagnosis when the picture is atypical.',
          'Early laparoscopic appendicectomy shortens hospital stay, reduces wound infection, and gets patients — particularly children and adolescents — back to school faster than the open approach.',
        ],
        howItWorks:
          'Three small ports are placed. The appendix is identified at the base of the caecum, its mesentery (with the appendicular artery) is secured, the base is ligated, and the organ is retrieved through a port, inside a protective bag.',
        benefits: [
          'Smaller scars and better cosmetic outcome than open surgery',
          'Lower rate of wound infection',
          'Faster return to school, work and activity',
          'Ability to examine the rest of the abdomen if the appendix turns out to be normal at operation',
        ],
        honestRisks:
          'Expected: 24–48 hours of gas-related shoulder discomfort and mild port-site pain. Uncommonly: wound infection, intra-abdominal collection (more common in ruptured appendicitis), or a need to switch to open surgery in difficult anatomy.',
        sessionInfo: {
          duration: '30–60 minutes in theatre',
          stay: '24–36 hours in hospital',
          recoveryAtHome: '5–7 days of relative rest',
          returnToWork: '5–7 days for desk work, 10–14 days for physical roles',
          resultsVisibleIn: 'Immediate relief of the appendicitis pain; scars mature over 6 months',
        },
        preCare: [
          'Emergency admission — investigations and anaesthesia review are usually done the same day',
          'Fasting from the time of admission',
          'Start of intravenous fluids and antibiotics as advised',
        ],
        postCare: [
          'Gentle diet starting with liquids within 6 hours of surgery',
          'Walking from the first evening',
          'Keep port sites clean and dry for 5 days',
          'Review at 7 days and a final visit at 4 weeks',
        ],
        faqs: [
          {
            question: 'How quickly does appendicitis need surgery?',
            answer:
              'Usually within the first 24 hours of diagnosis to minimise the risk of rupture. Highly selected early cases can sometimes be treated with antibiotics, but surgery remains the definitive treatment for most.',
          },
          {
            question: 'Will there be a visible scar?',
            answer:
              'Three small port scars, each under 1 cm, usually at the umbilicus and low abdomen. They fade significantly over 6–12 months.',
          },
          {
            question: 'When can my child go back to school?',
            answer:
              'Usually within a week. Physical education and contact sports wait for 3–4 weeks.',
          },
        ],
      },
    },
    {
      slug: 'thyroid-breast',
      title: 'Thyroid & breast surgery',
      category: "Women's Surgery",
      icon: 'HeartHandshake',
      imageUrl: '{{PROCEDURE_IMAGE_THYROID_BREAST}}',
      imageAlt: 'Thyroid and breast surgery — an illustrative reference image',
      summary:
        'Careful, cosmetically-considerate surgery for thyroid nodules, goitres, breast lumps and suspicious breast lesions — with female-led consultation through every stage.',
      bullets: [
        'Incisions planned along natural skin lines',
        'Overnight stay for most procedures',
        'Multidisciplinary approach for any confirmed malignancy',
      ],
      disclaimer:
        'A new lump deserves prompt assessment — not alarm, but not delay either. Most turn out to be benign; early clarity is the kindest outcome.',
      candidates:
        'Adults with a solitary thyroid nodule, a multinodular goitre, a discrete breast lump, or a breast concern flagged on imaging. For confirmed malignancy, we coordinate with oncology, radiology and pathology colleagues.',
      procedureOverview:
        'Thyroid procedures are done through a carefully planned neck-crease incision; breast procedures use incisions positioned along natural skin lines or around the areola. Both under general anaesthesia.',
      downtime:
        'Most patients stay one night. Return to office work takes 7–10 days; physical work may need longer depending on the procedure.',
      detailed: {
        overview: [
          'Thyroid and breast concerns are among the most anxiety-producing things a patient is asked to deal with. The surgical approach is straightforward; what makes the pathway bearable is the communication — what was found, what it means, what the next step is, and what it is not.',
          'Both types of surgery need incisions that are visible. Careful incision planning, tension-free closure, and meticulous skin handling make a real difference to how the final scar looks six months later.',
        ],
        howItWorks:
          "Thyroid surgery: a 3–5 cm incision in a natural skin crease of the lower neck, through which a lobe or the whole gland is removed with careful preservation of the parathyroid glands and the recurrent laryngeal nerve. Breast surgery: the incision is sited to respect the breast's natural lines; the lump is removed with an appropriate margin and sent for pathology.",
        benefits: [
          'Incisions planned and closed for the best long-term scar',
          'Female surgeon available for every stage of examination and consent',
          'Careful nerve and parathyroid preservation during thyroid surgery',
          'Same-sitting pathology for breast lumps where appropriate',
          'Coordinated onward referral for malignancy, with no additional appointments to chase',
        ],
        honestRisks:
          "Thyroid: temporary voice change (transient in most, permanent in under 1% in experienced hands), low calcium for a few days after total thyroidectomy. Breast: temporary bruising, seroma, or scar widening. All are explained with their rates at consent.",
        sessionInfo: {
          duration: '45–120 minutes depending on procedure',
          stay: 'One night in hospital for most',
          recoveryAtHome: '7–10 days of rest',
          returnToWork: '7–10 days for desk work',
          resultsVisibleIn: 'Pathology results in 3–5 working days; scar maturation by 6 months',
        },
        preCare: [
          'Ultrasound and blood work within the last 3 months',
          'ENT review for thyroid surgery where indicated',
          'Fast from midnight before surgery',
          'Bring any previous imaging and pathology reports',
        ],
        postCare: [
          'Keep the wound clean and dry for 5 days',
          'Calcium and thyroid medications as advised post-discharge',
          'Review at 7 days for wound check and pathology discussion',
          'Coordinated follow-up with oncology for malignancy',
        ],
        faqs: [
          {
            question: 'Will the scar be obvious?',
            answer:
              'Incisions are planned along natural skin lines and closed meticulously. Most scars fade significantly by six months and are not easily noticed in everyday clothing or with simple concealer.',
          },
          {
            question: 'If my biopsy turns out to be cancer, what happens next?',
            answer:
              'We coordinate directly with a medical oncologist, radiologist and pathologist. You will not be handed a pile of referrals — next-step appointments are organised and explained.',
          },
          {
            question: 'Can I request a female chaperone for the examination?',
            answer:
              'Yes, always. For breast examinations a female assistant is present by default, whether or not you request it.',
          },
        ],
      },
    },
    {
      slug: 'diabetic-foot',
      title: 'Diabetic foot surgery',
      category: 'Emergency',
      icon: 'Footprints',
      imageUrl: '{{PROCEDURE_IMAGE_DIABETIC_FOOT}}',
      imageAlt: 'Diabetic foot surgery — an illustrative reference image',
      summary:
        'Prompt, conservative surgical care for diabetic foot ulcers, infections and gangrene — preserving as much of the foot as possible, and teaching you how to prevent it from recurring.',
      bullets: [
        'Tissue-sparing debridement',
        'Wound care and off-loading plan',
        'Close co-ordination with your diabetologist',
      ],
      disclaimer:
        'Diabetic foot problems are time-sensitive. Do not wait for fever or blackening of the tissue — the earlier we see you, the more we can save.',
      candidates:
        'Adults with diabetes and a non-healing foot ulcer, foot infection, localised gangrene, or a suspicious red, swollen area of the foot.',
      procedureOverview:
        'Examination, imaging and blood tests to understand blood supply and depth of infection. Limited surgical debridement of dead or infected tissue, followed by a structured wound-care and off-loading plan tailored to your foot.',
      downtime:
        'Depends on the extent of disease. Minor debridement is often done under local anaesthesia as a day case; deeper infection may need a short inpatient stay and IV antibiotics.',
      detailed: {
        overview: [
          'Diabetes raises the risk of foot ulcers, infections, and — in the worst cases — gangrene. The right surgical approach is almost always the smallest possible: remove what is dead or infected, protect what is still alive, and use careful wound care to heal the rest.',
          'Early intervention saves tissue. Waiting for the problem to "declare itself" usually means more extensive surgery than would have been needed a week earlier.',
        ],
        howItWorks:
          'A careful examination assesses the pulse, depth of the wound, and any signs of infection. Targeted investigations (blood sugar, infection markers, imaging) inform the plan. Debridement removes only the tissue that cannot be saved. A dressing plan and off-loading (special footwear or a short period of non-weight-bearing) keeps the wound protected while it heals.',
        benefits: [
          'Tissue-sparing — the smallest intervention that works',
          'Co-managed with your diabetologist for sugar control',
          'Structured, written wound-care plan for home',
          'Clear red-flag symptoms so you know when to come back',
        ],
        honestRisks:
          'Healing in diabetic foot disease is slower than in non-diabetic patients. Recurrence is possible if underlying factors (blood sugar, footwear, numbness) are not addressed. In advanced disease, staged procedures may be needed.',
        sessionInfo: {
          duration: '20–60 minutes for debridement; longer for deeper procedures',
          stay: 'Day care for minor debridement; 2–5 days for deeper infection',
          recoveryAtHome: 'Variable — a weekly wound review is typical during healing',
          returnToWork: 'Depends on the role and the affected foot',
          resultsVisibleIn: 'Weeks to months for complete healing',
        },
        preCare: [
          'Blood sugar optimisation — we coordinate with your diabetologist',
          'Basic blood work and, if indicated, an arterial Doppler',
          'Bring all current medications and recent blood sugar records',
        ],
        postCare: [
          'Regular wound dressings as scheduled',
          'Off-loading footwear or a period of non-weight-bearing if advised',
          'Strict blood-sugar control through the healing window',
          'Weekly reviews until the wound is fully closed',
        ],
        faqs: [
          {
            question: 'Will I lose my foot?',
            answer:
              'Most diabetic foot problems do not end in amputation, particularly when they are treated early. The goal is always to save as much of the foot as possible.',
          },
          {
            question: 'How long before my ulcer heals?',
            answer:
              'Weeks to months, depending on depth, blood supply, infection, and how well blood sugar is controlled during healing. We give a realistic estimate at the first review.',
          },
        ],
      },
    },
    {
      slug: 'soft-tissue',
      title: 'Skin & soft-tissue abscess',
      category: 'Emergency',
      icon: 'Droplets',
      imageUrl: '{{PROCEDURE_IMAGE_SOFT_TISSUE}}',
      imageAlt: 'Soft-tissue abscess drainage — an illustrative reference image',
      summary:
        'Prompt drainage of skin and soft-tissue abscesses under local or short general anaesthesia — with a clear plan for preventing them from coming back.',
      bullets: [
        'Usually a day-care procedure',
        'Wound dressings until fully healed',
        'Advice on preventing recurrence',
      ],
      disclaimer:
        'Abscesses need timely drainage. Antibiotics alone rarely cure an established abscess — they are used alongside a drainage procedure, not instead of it.',
      candidates:
        'Adults with a painful, red, swollen skin or soft-tissue collection — commonly on the back, buttock, breast, axilla, or limb. Immunocompromised patients need a low threshold for early surgical review.',
      procedureOverview:
        'Under local or short general anaesthesia, the abscess cavity is opened, the pus drained, and the cavity washed. A small gauze pack or a simple dressing is applied. Healing takes one to three weeks, depending on size and location.',
      downtime:
        'Most procedures are done as day care. Return to work depends on the location and the kind of work — desk-based roles often within 24–48 hours.',
      detailed: {
        overview: [
          'A soft-tissue abscess is a walled-off collection of pus. Once formed, it rarely responds to antibiotics alone — the pressure inside the cavity prevents the drugs from reaching the bacteria. Surgical drainage is the definitive treatment.',
          'Early drainage means a smaller wound, a faster recovery, and a lower chance of the problem spreading into surrounding tissue.',
        ],
        howItWorks:
          'After local or short general anaesthesia, a precise incision opens the abscess, the pus is drained and sent for culture if indicated, and the cavity is washed out. A simple dressing or small pack keeps the wound open so it can heal from the base upwards.',
        benefits: [
          'Immediate relief of pain and pressure',
          'Low risk of spreading infection when done early',
          'Usually outpatient / day care',
          'Clear, written wound-care instructions for home',
        ],
        honestRisks:
          'Small scar at the drainage site. Recurrence is possible if an underlying cause (hair follicle disease, blocked sweat gland, foreign body, poorly controlled diabetes) is not addressed — which is why the follow-up plan matters.',
        sessionInfo: {
          duration: '15–30 minutes',
          stay: 'Usually day care',
          recoveryAtHome: '1–3 weeks of home dressings',
          returnToWork: '1–3 days for most desk-based roles',
          resultsVisibleIn: 'Pain relief is immediate; wound closure over 1–3 weeks',
        },
        preCare: [
          'Do not squeeze or try to drain the abscess yourself',
          'Bring a list of current medications, particularly blood thinners',
        ],
        postCare: [
          'Daily or alternate-day dressings as advised',
          'Keep the wound clean and dry between dressings',
          'Complete any antibiotics prescribed',
          'Review to discuss prevention if recurrence is likely',
        ],
        faqs: [
          {
            question: 'Can I just take antibiotics and avoid surgery?',
            answer:
              'For a very early, cellulitic stage without a formed collection — sometimes, yes. For a true abscess with pus inside, drainage is the definitive treatment. Antibiotics alone usually delay resolution rather than cure it.',
          },
          {
            question: 'Will it leave a big scar?',
            answer:
              'Most drainage scars are small and fade over 6–12 months. Location and skin type influence how visible the scar is in the long term.',
          },
        ],
      },
    },
  ],

  conditions: [
    { id: 'piles',          name: 'Piles',           patientLanguage: 'Piles, bleeding, lumps',           description: 'Swollen vessels in the anal canal, commonly causing bleeding, pain and a lump.',              procedureSlug: 'laser-proctology' },
    { id: 'fissure',        name: 'Anal fissure',    patientLanguage: 'Painful bowel movements',          description: 'A small tear in the anal lining that causes sharp pain with bowel movements.',              procedureSlug: 'laser-proctology' },
    { id: 'fistula',        name: 'Fistula-in-ano',  patientLanguage: 'Recurrent discharge',              description: 'A track between the anal canal and the skin, usually following an abscess.',                  procedureSlug: 'laser-proctology' },
    { id: 'inguinal',       name: 'Inguinal hernia', patientLanguage: 'Groin lump',                       description: 'Abdominal contents pushing through a weak area in the groin, producing a lump.',               procedureSlug: 'hernia-repair' },
    { id: 'umbilical',      name: 'Umbilical hernia',patientLanguage: 'Belly-button bulge',               description: 'A bulge at or near the navel, often after pregnancy or significant weight change.',           procedureSlug: 'hernia-repair' },
    { id: 'gallstones',     name: 'Gallstones',      patientLanguage: 'Gallstone pain after meals',       description: 'Stones in the gallbladder that cause pain, nausea or inflammation, often after fatty meals.', procedureSlug: 'gallbladder' },
    { id: 'appendicitis',   name: 'Appendicitis',    patientLanguage: 'Sudden right-side abdominal pain', description: 'Inflammation of the appendix — a surgical emergency, usually needing prompt removal.',         procedureSlug: 'appendicectomy' },
    { id: 'thyroid-nodule', name: 'Thyroid nodule',  patientLanguage: 'Swelling in the neck',             description: 'A lump in the thyroid gland that needs examination, ultrasound and sometimes a biopsy.',       procedureSlug: 'thyroid-breast' },
    { id: 'breast-lump',    name: 'Breast lump',     patientLanguage: 'A new lump in the breast',         description: 'A discrete lump that needs clinical examination, imaging and often a tissue sample.',          procedureSlug: 'thyroid-breast' },
    { id: 'diabetic-foot',  name: 'Diabetic foot',   patientLanguage: 'Non-healing foot ulcer',           description: 'A foot ulcer or infection in a patient with diabetes, needing prompt surgical and medical care.', procedureSlug: 'diabetic-foot' },
    { id: 'abscess',        name: 'Soft-tissue abscess', patientLanguage: 'Painful red swelling',         description: 'A collection of pus under the skin needing surgical drainage to heal.',                         procedureSlug: 'soft-tissue' },
  ],

  technology: [
    {
      title: 'Diode laser system',
      icon: 'Zap',
      note: 'Targeted energy delivery for proctology — shrinks diseased tissue from within, preserving healthy anal lining.',
      details:
        'A thin fibre delivers laser energy at wavelengths chosen to seal vessels and ablate diseased tissue while sparing the surrounding skin. Because no external incision is made for most piles cases, recovery is measurably less painful than the equivalent open surgery.',
    },
    {
      title: 'High-definition laparoscopy',
      icon: 'ScanSearch',
      note: 'High-definition visualisation during abdominal surgery — allows precise dissection and safer identification of important structures.',
      details:
        'Modern laparoscopic towers give high-detail imaging of tissue planes and vascular structures. Better visualisation means fewer surprises during dissection and a lower rate of accidental injury to neighbouring organs.',
    },
    {
      title: 'Energy devices for bloodless dissection',
      icon: 'Activity',
      note: 'Ultrasonic and advanced bipolar devices that cut and seal simultaneously — reducing blood loss and operating time.',
      details:
        'Energy devices safely seal vessels up to 7 mm, cut through well-vascularised tissue, and shorten operative time — which matters particularly for older patients and those with cardiac risk factors.',
    },
  ],

  clinicGallery: [
    // Replace these with real photographs of Susheela Hospital when they are available.
    { src: '{{CLINIC_PHOTO_RECEPTION}}',   alt: 'Reception at Susheela Hospital', caption: 'Reception',         span: 'tall' },
    { src: '{{CLINIC_PHOTO_CONSULTATION}}',alt: 'Consultation room',              caption: 'Consultation room', span: 'wide' },
    { src: '{{CLINIC_PHOTO_WAITING}}',     alt: 'Waiting area',                   caption: 'Waiting area',      span: 'square' },
    { src: '{{CLINIC_PHOTO_PROC_ROOM}}',   alt: 'Minor procedure room',           caption: 'Procedure room',    span: 'square' },
    { src: '{{CLINIC_PHOTO_LASER}}',       alt: 'Diode laser console',            caption: 'Diode laser system',span: 'wide' },
    { src: '{{CLINIC_PHOTO_TEAM}}',        alt: 'Dr. Sameera K with the clinic team', caption: 'Dr. Sameera K and team', span: 'tall' },
  ],

  testimonials: [
    // Templates only. Collect real, consented patient quotes before launch.
    {
      id: 't1',
      name: 'R. K.',
      procedure: 'Laser piles',
      text: 'I had delayed getting this checked for two years. The consultation itself put me at ease — nothing was brushed off, and nothing was dramatised. I was back at my desk in a week.',
      rating: 5,
      dateLabel: 'Template',
      isTemplate: true,
    },
    {
      id: 't2',
      name: 'P. S.',
      procedure: 'Gallbladder surgery',
      text: 'I was given a clear written plan at the consultation — what surgery would do, what it would not. Two small scars, home the next day, and back to regular meals within the week.',
      rating: 5,
      dateLabel: 'Template',
      isTemplate: true,
    },
    {
      id: 't3',
      name: 'A. M.',
      procedure: 'Laparoscopic hernia repair',
      text: 'What I appreciated most was the honesty about recovery timing. Desk work in a week, lifting in a month. That is exactly how it went.',
      rating: 5,
      dateLabel: 'Template',
      isTemplate: true,
    },
  ],

  faq: [
    {
      category: 'General',
      q: 'How is laser surgery different from traditional surgery?',
      a: 'Laser surgery uses targeted energy to destroy or seal tissue without cutting through healthy skin. For piles, fissure and fistula, that means most patients avoid external wounds, recover faster, and need less pain medication than with conventional open surgery.',
    },
    {
      category: 'General',
      q: 'Is laparoscopic surgery safer than open surgery?',
      a: 'For most common abdominal operations — gallbladder, hernia, appendix — laparoscopic surgery has smaller wounds, less infection, a shorter hospital stay and a faster return to work. For some complex cases, open surgery remains the safer option; we explain the choice at consultation.',
    },
    {
      category: 'General',
      q: 'Do you see female patients who prefer a female surgeon?',
      a: 'Yes. Many of our patients book specifically because they prefer a female surgeon for proctology, breast or thyroid concerns. A female chaperone is present by default for intimate examinations.',
    },
    {
      category: 'Before surgery',
      q: 'What should I bring to my first consultation?',
      a: 'Any previous reports or scans, a list of current medications with doses, and a list of known allergies. If you have a family member who helps you make decisions, bring them along — we prefer informed consent over hurried consent.',
    },
    {
      category: 'Before surgery',
      q: 'How long before surgery should I stop eating?',
      a: 'Usually from midnight before the day of surgery — nothing to eat or drink, including water. If your surgery is in the afternoon, the anaesthesia team may adjust the fasting window. You will get written instructions the day before.',
    },
    {
      category: 'Before surgery',
      q: 'Do I need to stop my blood thinners before surgery?',
      a: 'Sometimes — and only on specific instructions. Stopping blood thinners without advice can be dangerous. We coordinate with your treating cardiologist or physician if needed.',
    },
    {
      category: 'After surgery',
      q: 'When can I get back to work?',
      a: 'Most desk-based jobs: within a week for keyhole procedures. Physical work or heavy lifting: two to six weeks depending on the operation. You will get a specific timeline for your procedure at discharge.',
    },
    {
      category: 'After surgery',
      q: 'How soon can I drive after surgery?',
      a: 'Once you are off strong painkillers, can sit comfortably for 30 minutes, and can perform an emergency stop without hesitation. For most laparoscopic procedures, that is 3–7 days.',
    },
    {
      category: 'After surgery',
      q: 'Can I contact the clinic if I have a concern after discharge?',
      a: 'Yes. A WhatsApp channel handles reasonable post-operative questions during clinic hours. For out-of-hours concerns, the emergency number is available — details are printed on your discharge summary.',
    },
    {
      category: 'Payment',
      q: 'Do you accept health insurance?',
      a: 'We work with most major Indian health insurance providers, including cashless options for planned admissions. Pre-authorisation is handled by the admin team at Susheela Hospital — please bring your policy document to the pre-op visit.',
    },
    {
      category: 'Payment',
      q: 'What if I do not have insurance?',
      a: 'Transparent self-pay packages cover consultation, surgery, hospital stay, and the first post-op visit. The exact figure is shared openly before you decide to proceed.',
    },
    {
      category: 'Emergency',
      q: 'What counts as a surgical emergency?',
      a: 'Sudden severe abdominal pain, a rapidly enlarging lump, fever with abdominal pain, heavy rectal bleeding, a spreading red swelling, or any unusual symptom after recent surgery. When in doubt, call — we would rather see you unnecessarily than miss something that matters.',
    },
    {
      category: 'Emergency',
      q: 'How do I reach the clinic after hours?',
      a: 'Call the number on this site. If Dr. Sameera K is in surgery, an on-call message is taken and returned as soon as possible. For patients already under care, the emergency number is printed on your discharge summary.',
    },
  ],

  legal: {
    disclaimer:
      'Information on this website is for general education only and does not replace a clinical consultation. Outcomes vary between individuals. Please book an appointment for advice specific to your case.',
    privacy:
      'Any information you share through the booking form or WhatsApp is treated in confidence and used only to coordinate your care. We do not sell or share personal data with third parties.',
  },
} as const;
