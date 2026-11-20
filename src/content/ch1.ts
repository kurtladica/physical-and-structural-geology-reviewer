import type { Chapter } from '../types'

export const ch1: Chapter = {
  id: 'ch1',
  number: 1,
  title: 'Introduction to Geology',
  subtitle: 'What geology studies, how it is divided, and the two ideas that made it a science',
  pdf: 'Ch 1 - Introduction to Geology.pdf',
  pages: 'pp. 1–15',
  accent: '#2f6f5e',
  practice: [
    {
      id: 'ch1-p1',
      level: 'easy',
      question:
        'A researcher measures the magnetic field over a volcanic island to map the buried magma chamber. Which branch of geology is this?',
      hint: 'Look at the physical measurement being used, not the volcano itself.',
      steps: [
        'The work applies physics (magnetic fields) to study Earth materials.',
        'That is the definition of geophysics.',
        'Volcanology studies eruptions and hazards; it would use the result, but the measurement itself is geophysical.',
      ],
      answer: 'Geophysics.',
    },
    {
      id: 'ch1-p2',
      level: 'medium',
      question:
        'Classify each statement as belonging mainly to physical geology or historical geology: (a) “This lava flow cooled in about three weeks.” (b) “This rock unit is older than the granite that cuts it.”',
      hint: 'Physical geology asks how Earth works now; historical geology asks what happened, and in what order.',
      steps: [
        '(a) describes a present-day process and its rate — physical geology.',
        '(b) establishes a sequence of past events — historical geology, specifically relative dating.',
        'Historical geology uses physical principles to build that sequence, which is why the two are partners rather than rivals.',
      ],
      answer: '(a) physical geology; (b) historical geology.',
    },
    {
      id: 'ch1-p3',
      level: 'hard',
      question:
        'A canyon exposes 1.8 km of layered sedimentary rock with no volcanic ash beds. A student claims uniformitarianism proves the canyon is millions of years old. Is that a correct use of the principle?',
      hint: 'Uniformitarianism says processes are the same, not that a specific number follows automatically.',
      steps: [
        'Uniformitarianism states that the physical, chemical and biological laws operating today also operated in the past.',
        'It supports slow, gradual erosion as a plausible mechanism, which makes a long history likely.',
        'It does not by itself date the rocks. A numerical age requires evidence such as radiometric dating or fossils of known age.',
        'So the principle is relevant but the claim overstates it: mechanism is supported, the number is not proven.',
      ],
      answer:
        'Partly. Uniformitarianism supports gradual processes and a long history, but it cannot supply the numerical age; independent dating evidence is needed.',
    },
  ],
  topics: [
    {
      id: 'what-geology-is',
      title: 'What Geology Is and What Geologists Study',
      tagline: 'One planet, many specialties, one connected story',
      source: { file: 'Ch 1 - Introduction to Geology.pdf', pages: 'pp. 2–6' },
      objectives: [
        'Define geology in your own words.',
        'Explain what geochemistry, geophysics, paleontology, sedimentology, oceanography, volcanology and hydrogeology each study.',
        'Recognise that the branches overlap and are used together in real problems.',
      ],
      intro: {
        what: 'Geology is the fundamental science that studies Earth: its composition, its structures, the processes that shape it, and its long history.',
        why: 'Everything we build, drill, drink or farm sits on and in the geosphere. Geology explains where resources are, why hazards happen, and how the planet has changed.',
        before: [
          'A basic picture of Earth as a rocky planet with an atmosphere and oceans.',
          'The idea that matter can be solid, liquid or gas.',
          'No prior geology is assumed.',
        ],
      },
      simple: [
        {
          t: 'p',
          text: 'Imagine a building that is 4.6 billion years old, still under construction, and occupied the whole time. Floors crack, new rooms are added, old ones are crushed, water leaks through the walls, and the tenants keep evolving. Geology is the inspection report: what the building is made of, how it is being renovated right now, and what happened before anyone wrote anything down.',
        },
        {
          t: 'p',
          text: 'Because one planet is too big for one specialist, geology is split into branches. Each branch is a different *lens* on the same Earth — not a separate planet.',
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'A useful habit',
          text: 'When you meet a new geological claim, ask two questions: **what material or process is being studied?** and **what evidence is being measured?** Those two answers usually identify the branch.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The source lesson defines geology as “the fundamental science that pursues the study of the Earth, its dynamic processes, rich history, and intricate physical structures.” It seeks to understand the planet’s composition and the forces that continuously shape its surface over vast periods of time.',
        },
        {
          t: 'deflist',
          items: [
            {
              term: 'Geochemistry',
              def: 'The chemical composition and chemical changes of Earth materials. It analyses how elements are distributed among rocks and minerals to understand fundamental Earth processes.',
            },
            {
              term: 'Geophysics',
              def: 'Applies physics to Earth: seismic waves, gravity and magnetic fields are measured to investigate the hidden interior and tectonic forces.',
            },
            {
              term: 'Paleontology',
              def: 'The study of ancient life through fossils, revealing biological evolution and ancient environments preserved in sedimentary rocks.',
            },
            {
              term: 'Sedimentology',
              def: 'The processes of erosion, transport, deposition and lithification, and the interpretation of past environments from sedimentary strata.',
            },
            {
              term: 'Oceanography',
              def: 'The marine environment: ocean currents, marine ecosystems and seafloor geology.',
            },
            {
              term: 'Volcanology',
              def: 'Volcanoes, lava, magma and related phenomena, with emphasis on eruptive mechanisms and hazards.',
            },
            {
              term: 'Hydrogeology',
              def: 'The distribution, movement and quality of groundwater in soil and rock of the crust.',
            },
          ],
        },
        {
          t: 'p',
          text: 'These branches were grouped in the lesson into three families: **chemical and physical properties** (geochemistry, geophysics), **history and surface processes** (paleontology, sedimentology), and **Earth’s diverse systems** (oceanography, volcanology, hydrogeology). The grouping is a convenience; a single field project may use all of them.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Why the overlap matters',
          text: 'A volcano is not only a volcanology topic. Its magma is a geochemistry problem, its plumbing is geophysics, its ash layers are sedimentology and a dating tool, and its groundwater effects are hydrogeology. Beginner learners often treat branches as separate subjects; professionals combine them.',
        },
      ],
      diagram: {
        key: 'earth-spheres',
        title: 'The system geologists study',
        caption:
          'Geology focuses on the geosphere, but the geosphere constantly exchanges matter and energy with the atmosphere, hydrosphere and biosphere.',
      },
      example: {
        problem:
          'A team finds a layer of volcanic ash between two fossil-bearing limestone beds. Identify which geological branches would contribute to understanding the site, and what each would provide.',
        given: [
          'Ash layer between two limestone beds.',
          'Limestone contains fossils.',
          'No age has been measured yet.',
        ],
        required: 'A branch-by-branch plan showing what evidence each specialty contributes.',
        steps: [
          { label: 'Identify the materials', text: 'Limestone is a chemical/biochemical sedimentary rock; ash is volcanic debris. Sedimentology describes how both were deposited and what the contact means.' },
          { label: 'Read the life', text: 'Paleontology identifies the fossils and uses them to interpret the environment and relative age.' },
          { label: 'Date the ash', text: 'Geochemistry can analyse radioactive isotopes in the ash to obtain a numerical age, turning a relative sequence into a dated one.' },
          { label: 'Image the subsurface', text: 'Geophysics can trace how the beds continue at depth and whether faults offset them.' },
          { label: 'Check water and hazards', text: 'Hydrogeology assesses groundwater flow through the limestone; volcanology assesses the source and future hazard of the ash-producing volcano.' },
        ],
        answer:
          'Sedimentology (deposition and contacts), paleontology (environment and relative age), geochemistry (radiometric age), geophysics (subsurface structure), hydrogeology (water) and volcanology (source and hazard) all contribute. No single branch answers the site alone.',
        check: 'Notice that the ash bed is the key: it links a physical process (eruption) to a dating method (isotopes) and to a correlation tool across sites.',
      },
      selfCheck: [
        { q: 'In one sentence, what does geology study?', a: 'Earth’s materials, structures, the processes that shape them, and the planet’s history.' },
        { q: 'Which branch measures seismic waves and gravity to study Earth’s interior?', a: 'Geophysics.' },
        { q: 'Why can the same rock be studied by several branches at once?', a: 'Each branch examines a different property or process (chemistry, physics, fossils, deposition, water, etc.) of the same material.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which branch is defined as the study of ancient life through fossils?',
          options: ['Sedimentology', 'Paleontology', 'Hydrogeology', 'Geochemistry'],
          answer: 1,
          explain: 'Paleontology uses fossils to reconstruct ancient life and environments. Sedimentology studies deposition; hydrogeology studies groundwater.',
        },
        {
          type: 'mcq',
          prompt: 'A geologist measures how elements are distributed between minerals in a granite. This is mainly:',
          options: ['Geophysics', 'Oceanography', 'Geochemistry', 'Volcanology'],
          answer: 2,
          explain: 'Element distribution and chemical change in rocks and minerals is geochemistry.',
        },
        {
          type: 'tf',
          prompt: 'The branches of geology are independent, so a single study normally uses only one of them.',
          answer: false,
          explain: 'The branches overlap heavily; real problems combine evidence from several specialties.',
        },
      ],
      cards: [
        { front: 'Definition of geology (from the lesson)', back: 'The fundamental science that studies Earth, its dynamic processes, its rich history and its physical structures.' },
        { front: 'Geophysics', back: 'Applying physics — seismic waves, gravity, magnetic fields — to investigate Earth’s interior and tectonic forces.' },
        { front: 'Hydrogeology', back: 'The distribution, movement and quality of groundwater in the soil and rocks of the crust.' },
      ],
    },
    {
      id: 'physical-vs-historical',
      title: 'Physical Geology and Historical Geology',
      tagline: 'How Earth works versus what happened, and in what order',
      source: { file: 'Ch 1 - Introduction to Geology.pdf', pages: 'pp. 7–9' },
      objectives: [
        'Distinguish physical geology from historical geology.',
        'Explain how historical geology depends on physical geology.',
        'Describe the role of fossils in building a chronology.',
      ],
      intro: {
        what: 'Geology’s two major subdivisions are physical geology — Earth’s materials and the processes acting on and beneath the surface — and historical geology — the origin and development of Earth through time.',
        why: 'The distinction keeps questions clear. “How does a river cut a canyon?” is physical; “when did this canyon form, and what lived here then?” is historical.',
        before: ['The definition of geology from the previous topic.', 'A basic sense of deep time: millions to billions of years.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Think of a kitchen. **Physical geology** is the physics and chemistry of cooking: how heat moves, how sugar caramelises, how starch thickens. **Historical geology** is the family cookbook: which dish was made when, in what order, and what the leftovers tell you about the people who lived there.',
        },
        {
          t: 'p',
          text: 'You cannot write the cookbook without understanding cooking. That is why historical geology uses physical geology as its toolbox.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The lesson defines physical geology as the study of the materials composing Earth and of the numerous processes that operate beneath and upon its surface. It focuses on rock formation, earthquakes, tectonic shifts and erosional forces that reshape the planet’s exterior.',
        },
        {
          t: 'p',
          text: 'Historical geology aims to understand the origin of Earth and its development through time. It uses the principles of physical geology to establish a chronological arrangement of physical and biological changes in the geological past, with fossils as key indicators.',
        },
        {
          t: 'table',
          head: ['Question', 'Physical geology', 'Historical geology'],
          rows: [
            ['Main focus', 'Materials and processes', 'Origin, sequence and development of Earth'],
            ['Typical tools', 'Field measurement, experiments, physics and chemistry', 'Stratigraphy, fossils, relative and numerical dating'],
            ['Example question', 'How does magma crystallise?', 'When did this granite intrude the limestone?'],
            ['Time viewpoint', 'Mostly “how it works”', '“What happened, and in what order”'],
          ],
          caption: 'The two subdivisions are complementary, not competing.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Fossils as clocks and environments',
          text: 'A fossil is both a time indicator (some species existed only during a known interval) and an environmental indicator (a coral implies a warm, shallow sea). Historical geology uses both kinds of information.',
        },
      ],
      example: {
        problem:
          'A cliff contains flat limestone with marine shells, overlain by tilted red sandstone, which is cut by a vertical basalt dyke. Explain which parts of the investigation are physical geology and which are historical geology.',
        given: ['Flat fossil-bearing limestone below.', 'Tilted red sandstone above.', 'Vertical basalt dyke cutting both.'],
        required: 'Separate the process questions from the sequence questions.',
        steps: [
          { label: 'Process: limestone', text: 'Physical geology explains how shells accumulate and how limestone lithifies.' },
          { label: 'Process: sandstone and tilting', text: 'Physical geology explains deposition of sand and the deformation that tilted the beds.' },
          { label: 'Process: dyke', text: 'Physical geology explains magma intrusion and cooling.' },
          { label: 'Sequence', text: 'Historical geology uses superposition, cross-cutting relationships and fossils to order the events: limestone → sandstone → tilting → dyke.' },
          { label: 'Correlation', text: 'The shell species may allow the limestone to be correlated with rocks elsewhere, extending the history beyond this cliff.' },
        ],
        answer:
          'Physical geology explains each material and process; historical geology arranges those events in time and correlates them regionally. The dyke is youngest because it cuts both sedimentary units.',
        check: 'Every historical conclusion rests on a physical principle — here, superposition and cross-cutting relationships.',
      },
      selfCheck: [
        { q: 'Which subdivision studies earthquakes and erosion as processes?', a: 'Physical geology.' },
        { q: 'What does historical geology use fossils for?', a: 'As key indicators for ordering and correlating rocks in time, and for interpreting past environments.' },
        { q: 'Why is historical geology dependent on physical geology?', a: 'It applies physical principles (such as superposition, cross-cutting and rock formation) to reconstruct past events.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: '“How does a magma body crystallise at depth?” is primarily a question of:',
          options: ['Historical geology', 'Physical geology', 'Paleontology', 'Oceanography'],
          answer: 1,
          explain: 'It asks how a process works, which is physical geology. Historical geology would ask when the intrusion happened and what came before it.',
        },
        {
          type: 'tf',
          prompt: 'Historical geology establishes the chronological arrangement of past physical and biological changes.',
          answer: true,
          explain: 'That is its stated aim; it uses physical principles and fossils to build the chronology.',
        },
        {
          type: 'short',
          prompt: 'Name the subdivision that studies Earth’s materials and the processes beneath and upon its surface.',
          accept: ['physical geology'],
          explain: 'Physical geology covers materials and processes; historical geology covers origin and development through time.',
        },
      ],
      cards: [
        { front: 'Physical geology', back: 'The study of Earth’s materials and the processes that operate beneath and upon its surface: rock formation, earthquakes, tectonics, erosion.' },
        { front: 'Historical geology', back: 'The study of Earth’s origin and development through time, arranging physical and biological changes chronologically using physical principles and fossils.' },
        { front: 'Role of fossils in historical geology', back: 'They are key indicators for correlation and for establishing the relative ages of rock units.' },
      ],
    },
    {
      id: 'catastrophism-uniformitarianism',
      title: 'Catastrophism, Uniformitarianism, and the Birth of Modern Geology',
      tagline: 'Two competing views of how the landscape came to look the way it does',
      source: { file: 'Ch 1 - Introduction to Geology.pdf', pages: 'pp. 10–13' },
      objectives: [
        'Describe catastrophism and its historical context.',
        'State the principle of uniformitarianism and its founder.',
        'Compare the two paradigms across age of Earth, rate of change and evidence.',
      ],
      intro: {
        what: 'Catastrophism explained landscapes by sudden, global disasters; uniformitarianism explained them by the same slow processes we observe today, acting over immense time.',
        why: 'This is the conceptual turning point that made modern geology possible. Without it, there is no reason to expect deep time, and no basis for reading ancient rocks with present-day physics.',
        before: ['Physical versus historical geology.', 'The idea that sedimentary layers record events.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Two people look at a canyon. One says: “A giant flood gouged this in a week.” The other says: “A river has been sanding it down for millions of years — slowly, steadily, the way it still does today.” The second idea is uniformitarianism, and it is the one that gave geology its depth of time.',
        },
        {
          t: 'p',
          text: 'The slogan to memorise: **“The present is the key to the past.”**',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Catastrophism was proposed in the mid-1600s by James Ussher. It created a rigid chronology placing Earth’s creation at 4004 B.C., and theorised that the landscape was shaped mainly by sudden, great catastrophes such as global floods and massive earthquakes.',
        },
        {
          t: 'p',
          text: 'Uniformitarianism was proposed in the 1700s by the Scottish physician James Hutton, marking the birth of modern geology. Its fundamental principle is that the physical, chemical and biological laws operating today have also operated throughout the geologic past. Features such as deep canyons were not formed by sudden catastrophes but by slow, steady erosion over millions of years.',
        },
        {
          t: 'table',
          head: ['Catastrophism (historical view)', 'Uniformitarianism (modern view)'],
          rows: [
            ['Earth is exceptionally young (thousands of years).', 'Earth is incredibly old (billions of years).'],
            ['Features formed instantly by violent, unrepeatable events.', 'Features form gradually by continuous, steady processes.'],
            ['Focus on sudden, global-scale disasters.', 'Focus on observable, ongoing mechanisms: erosion, uplift, weathering.'],
            ['Based heavily on early chronological calculations rather than field evidence.', 'Serves as the absolute foundation of all modern geological sciences.'],
          ],
          caption: 'Comparison of the paradigms as presented in the lesson.',
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'A caution about the word “uniformitarian”',
          text: 'The principle says the *laws* are constant, not that every process is slow. The lesson’s contrast is between sudden unrepeatable catastrophes and observable ongoing processes. Modern geology accepts rare large events while still using present-day physics to explain them.',
        },
      ],
      example: {
        problem:
          'A student finds a 300 m deep river canyon cut into flat-lying limestone and claims it must have formed in a single catastrophic flood because “the river is too small to do that.” Evaluate the claim using both paradigms and the evidence a geologist would collect.',
        given: ['300 m deep canyon.', 'Flat-lying limestone.', 'A small river currently flows at the bottom.'],
        required: 'State what each paradigm predicts and what evidence would test them.',
        steps: [
          { label: 'Catastrophist prediction', text: 'One enormous flood removed 300 m of rock quickly, leaving a channel now occupied by a small river.' },
          { label: 'Uniformitarian prediction', text: 'The river, perhaps larger in the past, cut the canyon gradually; the process continues today at a measurable rate.' },
          { label: 'Evidence 1 — walls', text: 'Gradual incision leaves terraces, meanders and tributary valleys graded to the main river. A single flood tends to leave a broad scoured surface and huge erratic blocks.' },
          { label: 'Evidence 2 — sediment', text: 'Dating river terraces or cave deposits gives an age range and a long-term incision rate.' },
          { label: 'Evidence 3 — rock strength', text: 'The limestone’s resistance and joint pattern control how fast the river can cut, which can be measured in the field.' },
          { label: 'Conclusion', text: 'The claim is a hypothesis, not a proof. The small modern river is not evidence against gradual cutting, because discharge changes over time and 300 m of erosion takes a long time.' },
        ],
        answer:
          'The canyon is better explained by prolonged river incision supported by terraces and dated deposits; the catastrophic claim would need evidence of a single enormous flood, which the geometry and sediments do not show.',
        check: 'The key uniformitarian move is to measure a present-day rate and extrapolate it — while checking that the process has not changed.',
      },
      selfCheck: [
        { q: 'Who proposed catastrophism, and what date did it assign to Earth’s creation?', a: 'James Ussher, in the mid-1600s; 4004 B.C.' },
        { q: 'State the principle of uniformitarianism in one sentence.', a: 'The physical, chemical and biological laws operating today have also operated throughout the geologic past — the present is the key to the past.' },
        { q: 'Which paradigm underlies all modern geological sciences?', a: 'Uniformitarianism.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Who is associated with uniformitarianism?',
          options: ['James Ussher', 'James Hutton', 'Harry Hess', 'Alfred Wegener'],
          answer: 1,
          explain: 'James Hutton proposed uniformitarianism in the 1700s. Ussher is linked to catastrophism; Hess to seafloor spreading; Wegener to continental drift.',
        },
        {
          type: 'tf',
          prompt: 'Catastrophism held that Earth is billions of years old and that landscapes form slowly.',
          answer: false,
          explain: 'Catastrophism held that Earth is young and that landscapes were shaped by sudden, violent events.',
        },
        {
          type: 'mcq',
          prompt: 'The statement “the present is the key to the past” means that:',
          options: [
            ' only present-day rocks are worth studying',
            'the laws and processes observed today also operated in the past',
            'all past events were catastrophes',
            'geology can predict the future exactly',
          ],
          answer: 1,
          explain: 'Uniformitarianism extends present-day physical, chemical and biological laws into the past; it does not claim the past was identical in every detail.',
        },
      ],
      cards: [
        { front: 'Catastrophism', back: 'The view, proposed by James Ussher in the mid-1600s, that Earth is young and its landscapes were shaped by sudden, violent, global catastrophes.' },
        { front: 'Uniformitarianism', back: 'James Hutton’s principle that the physical, chemical and biological laws operating today have also operated throughout the geologic past: “the present is the key to the past.”' },
        { front: 'Why uniformitarianism matters', back: 'It established deep time and is the foundation of all modern geological science.' },
      ],
    },
  ],
}
