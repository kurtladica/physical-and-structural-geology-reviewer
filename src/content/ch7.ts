import type { Chapter } from '../types'

export const ch7: Chapter = {
  id: 'ch7',
  number: 7,
  title: 'Volcanism',
  subtitle: 'Eruption mechanisms, styles and hazards',
  pdf: 'GS 21L 7 Volcanism.pdf',
  pages: 'pp. 1–21',
  accent: '#a33b32',
  practice: [
    {
      id: 'ch7-p1',
      level: 'easy',
      question:
        'An eruption produces a 6 km high ash column, andesitic pumice and dense, non-aerodynamic lava blocks after a lava dome collapsed. Which eruption style is this?',
      hint: 'Link dome collapse and block-and-ash flows to a named style.',
      steps: [
        'A lava dome collapse with block-and-ash pyroclastic flow is the hallmark of a Peléan eruption.',
        'Vulcanian eruptions also produce ash columns but involve a hardened cap being blown off, not dome collapse.',
        'Plinian eruptions are sustained and much taller, typically with widespread pumice fall.',
      ],
      answer: 'Peléan eruption.',
    },
    {
      id: 'ch7-p2',
      level: 'medium',
      question:
        'The 1980 Mount St. Helens eruption was VEI 5 and erupted roughly 1 km³ of material. The Lake Toba ultra-Plinian eruption released about 2,800 times as much. Estimate Toba’s erupted volume.',
      hint: 'Multiply the reference volume by the ratio given in the lesson.',
      steps: ['Volume = 2,800 × 1 km³.', '= 2,800 km³.', 'This scale difference illustrates why VEI 8 eruptions are landscape- and climate-scale events.'],
      answer: 'About 2,800 km³.',
    },
    {
      id: 'ch7-p3',
      level: 'hard',
      question:
        'A pyroclastic flow travels 12 km from the crater at 120 km/h. How long does it take to reach a village at that distance? What does the answer imply for evacuation planning?',
      hint: 'Time = distance / speed, then convert hours to minutes.',
      steps: [
        't = 12 km ÷ 120 km/h = 0.1 h.',
        '0.1 h × 60 min/h = 6 minutes.',
        'At 100 km/h the time is 7.2 minutes; at 150 km/h it is 4.8 minutes.',
        'Such short travel times mean evacuation must begin before an eruption, based on monitoring and exclusion zones — not after the flow is visible.',
      ],
      answer: 'About 6 minutes. Warning time is far too short for reactive evacuation, so pre-eruption planning is essential.',
    },
  ],
  topics: [
    {
      id: 'eruption-mechanisms',
      title: 'Volcanism and the Three Eruption Mechanisms',
      tagline: 'Gas, water and steam — three different engines',
      source: { file: 'GS 21L 7 Volcanism.pdf', pages: 'pp. 3–4' },
      objectives: [
        'Define volcanism broadly.',
        'Distinguish magmatic, phreatomagmatic and phreatic eruptions.',
        'Explain the role of decompression and water in each.',
      ],
      intro: {
        what: 'Volcanism includes all processes and phenomena associated with the surface discharge of molten rock, pyroclastic fragments, or hot water and steam — volcanoes, geysers and fumaroles.',
        why: 'The mechanism determines the hazard: a gentle lava flow and a devastating steam blast require different responses.',
        before: ['Magma, volatiles and viscosity from Chapter 6.', 'The idea that pressure affects gas solubility.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Three ways to make an eruption: let the gas out of magma (like opening a shaken soda), let water meet hot rock and flash to steam (like a drop of water in hot oil), or superheat steam underground until it blasts out old rock. The first is magmatic, the second phreatomagmatic, the third phreatic.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The lesson defines **volcanism** as any of various processes and phenomena associated with the surficial discharge of molten rock, pyroclastic fragments, or hot water and steam, including volcanoes, geysers and fumaroles.',
        },
        {
          t: 'deflist',
          items: [
            {
              term: '1. Magmatic eruption',
              def: 'Gas is released due to decompression. The decompression of gas within magma propels it forward.',
            },
            {
              term: '2. Phreatomagmatic eruption',
              def: 'Thermal contraction from chilling on contact with water drives it. It is powered by compression of gas within the magma — the direct opposite of the process powering magmatic activity.',
            },
            {
              term: '3. Phreatic eruption',
              def: 'Ejection of entrained particles during steam eruptions, driven by superheating of steam through contact with magma. These often show no magmatic release; instead they cause granulation of existing rock.',
            },
          ],
        },
        {
          t: 'table',
          head: ['Mechanism', 'Driver', 'Material erupted', 'Key clue'],
          rows: [
            ['Magmatic', 'Decompression of gas in magma', 'Magma, lava, pyroclastic material', 'Juvenile magma present'],
            ['Phreatomagmatic', 'Water–magma contact; gas compression', 'Magma + steam, fine ash, palagonite', 'Water involved; very explosive'],
            ['Phreatic', 'Superheated steam', 'Old rock fragments only, no new magma', 'No juvenile material'],
          ],
          caption: 'The three mechanisms and how to recognise them.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Phreatic versus phreatomagmatic',
          text: 'Both involve water. Phreatic eruptions involve steam from external water heating, with no fresh magma erupted; phreatomagmatic eruptions involve magma meeting water, producing both steam and magmatic material.',
        },
      ],
      example: {
        problem:
          'A volcano emits a violent blast of fine ash and old rock fragments, with no new lava or pumice, after heavy rain soaks the summit. Which mechanism is most likely, and why?',
        given: ['Fine ash and old rock only.', 'No juvenile magma.', 'Heavy rain beforehand.'],
        required: 'Identify the mechanism and justify it.',
        steps: [
          { label: 'Check for juvenile material', text: 'No new magma or pumice means the eruption is not primarily magmatic.' },
          { label: 'Role of water', text: 'Rain or groundwater reaching hot rock flashes to steam and expands violently.' },
          { label: 'Fragmentation', text: 'The expansion granulates existing rock, producing fine ash and old fragments.' },
          { label: 'Classification', text: 'Steam-driven, no magmatic release = phreatic eruption.' },
        ],
        answer: 'A phreatic eruption, driven by superheated steam and granulation of existing rock.',
      },
      selfCheck: [
        { q: 'What drives a magmatic eruption?', a: 'Decompression of gas within magma, which propels the magma forward.' },
        { q: 'How does a phreatic eruption differ from a phreatomagmatic one?', a: 'Phreatic eruptions are steam-driven and erupt no new magma; phreatomagmatic eruptions involve magma contacting water.' },
        { q: 'Name two phenomena included under volcanism besides volcanoes.', a: 'Geysers and fumaroles.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which eruption type is driven by decompression of gas within magma?',
          options: ['Phreatic', 'Phreatomagmatic', 'Magmatic', 'Submarine'],
          answer: 2,
          explain: 'Magmatic eruptions are propelled by gas decompression.',
        },
        {
          type: 'mcq',
          prompt: 'Phreatic eruptions are driven by:',
          options: ['Superheated steam', 'Decompression of magma', 'Tidal forces', 'Slab pull'],
          answer: 0,
          explain: 'Steam superheated by contact with magma drives phreatic eruptions, which often erupt no new magma.',
        },
        {
          type: 'tf',
          prompt: 'Phreatomagmatic eruptions involve water chilling magma.',
          answer: true,
          explain: 'Thermal contraction from chilling on contact with water is the defining process.',
        },
      ],
      cards: [
        { front: 'Volcanism', back: 'Processes and phenomena associated with surface discharge of molten rock, pyroclastic fragments, or hot water and steam — including volcanoes, geysers and fumaroles.' },
        { front: 'Three eruption mechanisms', back: 'Magmatic (gas decompression), phreatomagmatic (water–magma contact, gas compression), phreatic (superheated steam, no new magma).' },
        { front: 'Phreatic eruption', back: 'A steam-driven eruption that ejects entrained particles and granulates existing rock, with no magmatic release.' },
      ],
    },
    {
      id: 'magmatic-styles',
      title: 'Magmatic Eruption Styles',
      tagline: 'Hawaiian, Strombolian, Vulcanian, Peléan and Plinian',
      source: { file: 'GS 21L 7 Volcanism.pdf', pages: 'pp. 5–12' },
      objectives: [
        'Describe the five magmatic eruption subtypes.',
        'Relate viscosity and gas content to eruption style.',
        'Recall the key historical examples and their impacts.',
      ],
      intro: {
        what: 'Magmatic eruptions range from gentle Hawaiian lava fountains to catastrophic Plinian columns, depending mainly on magma viscosity and gas content.',
        why: 'The style predicts the hazard: lava flows versus ash columns, pyroclastic flows and widespread tephra fall.',
        before: ['Magma viscosity and silica content from Chapter 6.', 'The three eruption mechanisms.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Think of shaking a bottle of soda. If the drink is thin and the cap is off, gas escapes gently. If it is thick and the cap is tight, pressure builds until it explodes. Hawaiian lava is the thin drink; Plinian magma is the thick, sealed bottle.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            {
              term: 'Hawaiian',
              def: 'The calmest type, named after Hawaiian volcanoes. Characterised by effusive eruption of very fluid basalt-type lavas with low gas content. The volume of ejected material is less than half that of other eruptive types.',
            },
            {
              term: 'Strombolian',
              def: 'Named after Stromboli, which has erupted continuously for centuries. Driven by bursting gas bubbles that coalesce into large bubbles called gas slugs. On reaching the surface the pressure difference makes the bubble burst with a loud pop, throwing magma into the air like a soap bubble. Episodic explosive blasts may occur every few minutes.',
            },
            {
              term: 'Vulcanian',
              def: 'Named after the volcano Vulcano, following Giuseppe Mercalli’s observations of its 1888–1890 eruptions. Intermediate viscous magma makes it difficult for gases to escape, so pressure builds until the cap holding the magma down is popped. Ejected fragments are not aerodynamic because of higher viscosity and incorporated crystalline material; eruptions are more explosive than Strombolian, with columns often 5–10 km high. Deposits are andesitic to dacitic rather than basaltic.',
            },
            {
              term: 'Peléan',
              def: 'Named after Mount Pelée, Martinique, site of the catastrophic 1902 eruption. Large amounts of gas, dust, ash and lava fragments are blown out by collapse of rhyolite, dacite or andesite lava domes. An early sign is growth of a Peléan or lava spine. Dome collapse generates a fast block-and-ash pyroclastic flow, often over 150 km/h — among the most dangerous eruptions.',
            },
            {
              term: 'Plinian (Vesuvian)',
              def: 'Named for the AD 79 eruption of Vesuvius that buried Pompeii and Herculaneum, and for its chronicler Pliny the Younger. Dissolved gases vesiculate and accumulate as they rise; when bubbles reach about 75% of the conduit volume they explode. The narrow conduit forces gas and magma upward, forming an eruptive column. Weak surface rocks may crack, forming a flared structure that pushes gases even faster.',
            },
          ],
        },
        {
          t: 'p',
          text: '**Historical examples from the lesson.** Mount Pelée’s 1902 eruption destroyed St. Pierre, killed more than 30,000 people, and left only 3 survivors; it was preceded by lava-dome growth. Mayon Volcano in the Philippines, the country’s most active volcano, has had many eruption types including Peléan; about 40 ravines radiate from its summit, channelling pyroclastic flows and mudslides, and its most violent eruption in 1814 caused over 1,200 deaths. The 1951 Peléan eruption of Mount Lamington killed over 3,000 people, and the peak had not even been recognised as a volcano beforehand.',
        },
        {
          t: 'p',
          text: 'Plinian examples: Vesuvius in AD 79; Mount St. Helens in 1980, a VEI 5 Plinian eruption that tore apart the summit; VEI 8 “Ultra-Plinian” events such as Lake Toba 74,000 years ago, which erupted 2,800 times the material of Mount St. Helens; Hekla in Iceland, whose 1947–48 eruption was basaltic Plinian; and Pinatubo in the Philippines on 15 June 1991, which produced 5 km³ of dacitic magma, a 40 km high column and 17 megatons of sulfur dioxide.',
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Viscosity is not the only control',
          text: 'Hekla shows that basaltic magma can produce a Plinian eruption when gas and conduit conditions allow it. Use the style descriptions, not colour alone, to classify an eruption.',
        },
      ],
      example: {
        problem:
          'A volcano has a viscous andesitic dome. Over weeks, a bulge grows on the summit. Then the dome collapses and a fast ash cloud sweeps down a valley. Identify the style, the precursor, and the hazard.',
        given: ['Viscous andesitic dome.', 'Summit bulge.', 'Dome collapse and fast ash cloud.'],
        required: 'Style, early sign and hazard name.',
        steps: [
          { label: 'Style', text: 'Dome collapse producing block-and-ash flows is Peléan.' },
          { label: 'Precursor', text: 'The summit bulge is a Peléan/lava spine, an early sign of imminent collapse.' },
          { label: 'Hazard', text: 'The fast-moving cloud is a pyroclastic flow (block-and-ash flow), capable of exceeding 150 km/h.' },
          { label: 'Why dangerous', text: 'It hugs the ground and follows valleys, so it can outrun people and destroy structures.' },
        ],
        answer: 'Peléan eruption; the bulge is a lava spine; the hazard is a block-and-ash pyroclastic flow.',
      },
      selfCheck: [
        { q: 'Which magmatic style is the calmest, and what lava does it erupt?', a: 'Hawaiian; very fluid basalt with low gas content.' },
        { q: 'What causes the loud blasts in a Strombolian eruption?', a: 'Gas slugs (coalesced bubbles) bursting at the surface as pressure drops.' },
        { q: 'What is the early sign of a Peléan eruption, and what hazard follows?', a: 'Growth of a lava spine or dome bulge, followed by dome collapse and a block-and-ash pyroclastic flow.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which eruption style buried Pompeii and Herculaneum in AD 79?',
          options: ['Hawaiian', 'Strombolian', 'Plinian', 'Surtseyan'],
          answer: 2,
          explain: 'Vesuvius’s AD 79 eruption is the model Plinian event, described by Pliny the Younger.',
        },
        {
          type: 'mcq',
          prompt: 'Peléan eruptions are especially dangerous because of:',
          options: ['Slow lava flows', 'Dome collapse producing fast pyroclastic flows', 'Geysers', 'Acid rain only'],
          answer: 1,
          explain: 'Dome collapse generates block-and-ash flows that can exceed 150 km/h.',
        },
        {
          type: 'mcq',
          prompt: 'Vulcanian deposits are typically:',
          options: ['Basaltic', 'Andesitic to dacitic', 'Rhyolitic only', 'Ultramafic'],
          answer: 1,
          explain: 'The lesson notes Vulcanian deposits are andesitic to dacitic rather than basaltic.',
        },
        {
          type: 'tf',
          prompt: 'Strombolian eruptions are driven by the bursting of gas bubbles within the magma.',
          answer: true,
          explain: 'Gas slugs rise and burst at the surface, producing loud, episodic blasts.',
        },
      ],
      cards: [
        { front: 'Hawaiian eruption', back: 'Calmest style: effusive, very fluid basalt with low gas content; ejected volume less than half that of other types.' },
        { front: 'Strombolian eruption', back: 'Driven by bursting gas slugs; loud, episodic blasts every few minutes; named after Stromboli.' },
        { front: 'Vulcanian eruption', back: 'Viscous intermediate magma traps gas until the cap fails; columns 5–10 km; andesitic to dacitic deposits.' },
        { front: 'Peléan eruption', back: 'Lava-dome collapse produces block-and-ash pyroclastic flows >150 km/h; preceded by a lava spine; Mt Pelée 1902.' },
        { front: 'Plinian eruption', back: 'Sustained high eruption column from explosive gas release; Vesuvius AD 79, St Helens 1980, Pinatubo 1991; VEI 8 = Ultra-Plinian (Toba).' },
      ],
    },
    {
      id: 'phreatomagmatic',
      title: 'Phreatomagmatic and Submarine Eruptions',
      tagline: 'When water changes the rules',
      source: { file: 'GS 21L 7 Volcanism.pdf', pages: 'pp. 13–15' },
      objectives: [
        'Explain why water makes eruptions more explosive.',
        'Describe Surtseyan and submarine eruptions with examples.',
        'Distinguish mid-ocean-ridge from subduction-related submarine volcanism.',
      ],
      intro: {
        what: 'Phreatomagmatic eruptions occur when magma meets water; submarine eruptions occur under water and may build seamounts and islands.',
        why: 'Water dramatically increases explosivity and produces fine ash, steam and distinct deposits; many ocean islands form this way.',
        before: ['The three eruption mechanisms.', 'Divergent and convergent boundary settings.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Pour a spoonful of water into very hot oil and it spits violently. Water meeting lava does the same: it flashes to steam, expands about a thousand times, and shatters the magma into fine ash. That is why “wet” eruptions are often more explosive than dry ones.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**Surtseyan** eruptions are caused by shallow-water interaction between water and lava, named after the eruption that formed the island of Surtsey off Iceland in 1963. They are the “wet” equivalent of ground-based Strombolian eruptions, but much more explosive: water heated by lava flashes to steam and expands violently, fragmenting the magma into fine ash. They are typical of shallow-water volcanic oceanic islands but can also occur on land where rising magma meets an aquifer at shallow levels. Products are generally oxidised palagonite basalts (andesitic eruptions occur rarely), and activity is generally continuous or rhythmic.',
        },
        {
          t: 'p',
          text: 'Surtseyan examples: Surtsey (1963), which built up from depth and emerged above the Atlantic; Ukinrek Maars in Alaska (1977) and Capelinhos in the Azores (1957), both above-water examples; Mount Tarawera in New Zealand (1886), which erupted along a rift zone and killed 150 people; Ferdinandea in the Mediterranean (1831), which breached sea level, caused a sovereignty dispute, then eroded below the waves; and Hunga Tonga (2009, with an earlier eruption in 1988).',
        },
        {
          t: 'p',
          text: '**Submarine** eruptions occur underwater. They may produce seamounts that break the surface to form volcanic islands and island chains. Near plate boundaries and mid-ocean ridges, they are built by decompression melting of mantle rock rising on an upwelling convection cell. Eruptions at subduction zones are driven by subducting plates adding volatiles to the rising plate, lowering its melting point. Mid-ocean-ridge volcanics are primarily basaltic; subduction flows are mostly calc-alkaline and more explosive and viscous.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Why Surtsey changed from Surtseyan to Strombolian',
          text: 'As the volcano grew, rising lava interacted less with water and more with air, so the activity waned into a more Strombolian character. The availability of water, not the magma alone, controlled the style.',
        },
      ],
      example: {
        problem:
          'A new island emerges from shallow seawater, producing violent steam-rich ash and palagonite basalt. Later, once the vent is above the waves, activity becomes less violent. Explain both stages.',
        given: ['Shallow submarine vent.', 'Steam-rich ash and palagonite.', 'Later activity less violent above water.'],
        required: 'Identify the eruption type and explain the change.',
        steps: [
          { label: 'Stage 1', text: 'Magma meets shallow water; water flashes to steam and fragments magma into fine ash — Surtseyan.' },
          { label: 'Deposits', text: 'Oxidised palagonite basalt is typical of Surtseyan activity.' },
          { label: 'Stage 2', text: 'As the island grows, lava meets less water and more air.' },
          { label: 'Change in style', text: 'Steam-driven explosivity declines and activity becomes more Strombolian.' },
        ],
        answer: 'Stage 1 is Surtseyan; once the vent is isolated from water, the eruption becomes less explosive and more Strombolian.',
      },
      selfCheck: [
        { q: 'Why are Surtseyan eruptions more explosive than Strombolian ones?', a: 'Water flashes to steam and expands violently, fragmenting magma into fine ash.' },
        { q: 'What is a seamount, and how can it become an island?', a: 'An underwater volcanic mountain; if it grows above sea level it becomes a volcanic island.' },
        { q: 'How do mid-ocean-ridge and subduction-zone submarine magmas differ?', a: 'Ridge volcanics are primarily basaltic; subduction flows are mostly calc-alkaline, more viscous and explosive.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Surtseyan eruptions are named after:',
          options: ['A volcano in Iceland', 'A Philippine volcano', 'An Italian volcano', 'A New Zealand rift'],
          answer: 0,
          explain: 'Surtsey, off Iceland, formed in 1963 and gave its name to this eruption style.',
        },
        {
          type: 'mcq',
          prompt: 'A submarine eruption at a mid-ocean ridge is driven mainly by:',
          options: ['Subducting plate volatiles', 'Decompression melting of rising mantle', 'Meteorite impact', 'Tidal heating'],
          answer: 1,
          explain: 'Ridge volcanism comes from decompression melting on an upwelling convection cell, producing basalt.',
        },
        {
          type: 'tf',
          prompt: 'Surtseyan eruptions can occur on land when magma meets shallow groundwater.',
          answer: true,
          explain: 'They are not confined to the sea; an aquifer at shallow depth can produce the same water–magma interaction.',
        },
      ],
      cards: [
        { front: 'Surtseyan eruption', back: 'Shallow-water phreatomagmatic eruption; water flashes to steam and fragments magma into fine ash; named after Surtsey (1963); palagonite basalt.' },
        { front: 'Submarine eruption', back: 'An underwater eruption that may build seamounts and volcanic islands; ridge examples are basaltic, subduction examples calc-alkaline.' },
        { front: 'Why water increases explosivity', back: 'Water flashes to steam and expands violently, shattering magma into fine ash.' },
      ],
    },
    {
      id: 'volcanic-hazards',
      title: 'Volcanic Hazards',
      tagline: 'Pyroclastic flows and lahars — the fast and the far-reaching',
      source: { file: 'GS 21L 7 Volcanism.pdf', pages: 'pp. 16–20' },
      objectives: [
        'Describe pyroclastic flows and their two parts.',
        'Explain how lahars form, including without an eruption.',
        'Identify other volcanic hazards to health and property.',
      ],
      intro: {
        what: 'Volcanic hazards include pyroclastic flows, lahars, ashfall, gases, lava flows and associated effects such as tsunamis and mudflows.',
        why: 'Most volcanic deaths come from flows and lahars, not from lava. Understanding their behaviour saves lives.',
        before: ['Eruption styles and mechanisms.', 'Mass wasting basics (Chapter 11).'],
      },
      simple: [
        {
          t: 'p',
          text: 'A pyroclastic flow is a hurricane of hot ash and rock hugging the ground. A lahar is a river of wet volcanic mud. Both move faster than a person can run, and both follow valleys — which is exactly where people tend to live and farm.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**Pyroclastic flows.** Some of the most destructive forces of nature, consisting of hot gases infused with incandescent ash and larger lava fragments. Also called *nuées ardentes* (glowing avalanches), they race down steep volcanic slopes at speeds that can exceed **100 km/h**. A pyroclastic flow has two parts: a low-density cloud of hot expanding gases containing fine ash particles, and a ground-hugging portion often composed of pumice and other vesicular pyroclastic material.',
        },
        {
          t: 'p',
          text: '**Lahars.** Large composite cones may generate a fluid mudflow called a lahar (Indonesian name). These destructive flows occur when volcanic debris becomes saturated with water and rapidly moves down steep slopes, generally following stream valleys. Some lahars are triggered when magma nears the surface of a glacially clad volcano and melts ice and snow; others form when heavy rain saturates weathered volcanic deposits. Thus, lahars may occur even when a volcano is not erupting. The 1980 Mount St. Helens lahar raced down the Toutle River and left muddy deposits.',
        },
        {
          t: 'p',
          text: 'Beyond these, the lesson notes that volcanoes can be hazardous to human health and property in many other ways. Common examples include ashfall that collapses roofs and disrupts transport, volcanic gases, lava flows that bury land, ballistic projectiles, and tsunamis generated by eruptions or flank collapse.',
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Lahars can arrive without warning',
          text: 'Because rain can remobilise old deposits long after an eruption, lahar hazard can persist for years. Do not assume “the eruption is over” means the danger is over.',
        },
      ],
      diagram: {
        key: 'volcano',
        title: 'Hazards around a volcano',
        caption: 'Ash rises into the atmosphere, pyroclastic flows and lahars sweep down valleys, and lava follows the flanks.',
      },
      example: {
        problem:
          'A glacier-covered stratovolcano has a town 20 km downstream in a river valley, and another town 8 km away on a ridge. During an eruption, which town faces the greater lahar risk and which faces the greater pyroclastic-flow risk? Justify.',
        given: ['Glacier-capped volcano.', 'Town A: 20 km downstream in a valley.', 'Town B: 8 km away on a ridge.'],
        required: 'Match each town to its dominant hazard and reason.',
        steps: [
          { label: 'Lahar path', text: 'Meltwater mixes with volcanic debris and follows stream valleys, so Town A is directly in the lahar pathway.' },
          { label: 'Lahar reach', text: 'Lahars can travel many kilometres downstream, so 20 km is not necessarily safe.' },
          { label: 'Pyroclastic flow path', text: 'Flows hug the ground and follow valleys and slopes; a ridge is relatively less exposed, although flows can surmount small obstacles.' },
          { label: 'Distance', text: 'Town B is closer to the volcano (8 km), so it has less time to evacuate if a flow heads its way.' },
        ],
        answer: 'Town A has the higher lahar risk because it lies downstream in a valley; Town B is closer and still exposed to pyroclastic flows, though its ridge position reduces that risk.',
      },
      selfCheck: [
        { q: 'What are the two parts of a pyroclastic flow?', a: 'A low-density cloud of hot expanding gases with fine ash, and a ground-hugging portion of pumice and other pyroclastic material.' },
        { q: 'How can a lahar form without an eruption?', a: 'Heavy rain can saturate weathered volcanic deposits, which then flow downslope as mud.' },
        { q: 'Why can lahars be more far-reaching than pyroclastic flows?', a: 'They follow stream valleys and can travel long distances downstream, remobilising old deposits even years later.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A lahar is best described as:',
          options: ['A fast-moving ash cloud', 'A volcanic mudflow', 'A lava fountain', 'A steam eruption'],
          answer: 1,
          explain: 'Lahars are water-saturated volcanic debris flows that follow valleys.',
        },
        {
          type: 'mcq',
          prompt: 'Pyroclastic flows can exceed speeds of:',
          options: ['10 km/h', '100 km/h', '5 km/h', '1,000 km/h'],
          answer: 1,
          explain: 'The lesson states they can exceed 100 km/h (60 mph).',
        },
        {
          type: 'tf',
          prompt: 'Lahars can occur only during an active eruption.',
          answer: false,
          explain: 'Heavy rain can remobilise weathered volcanic deposits, so lahars may occur when the volcano is not erupting.',
        },
      ],
      cards: [
        { front: 'Pyroclastic flow', back: 'Hot gases with incandescent ash and lava fragments (nuée ardente) racing down slopes at >100 km/h; two parts: an ash cloud and a ground-hugging flow.' },
        { front: 'Lahar', back: 'A water-saturated volcanic mudflow that follows stream valleys; can be triggered by melted ice or heavy rain, even without an eruption.' },
        { front: 'Other volcanic hazards', back: 'Ashfall, volcanic gases, lava flows, ballistic projectiles and eruption-generated tsunamis.' },
      ],
    },
  ],
}
