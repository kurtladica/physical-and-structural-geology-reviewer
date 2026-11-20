import type { Chapter } from '../types'

export const ch13: Chapter = {
  id: 'ch13',
  number: 13,
  title: 'Brittle Structures',
  subtitle: 'How rocks break: fractures, joints, faults, veins and the mechanics of cracking',
  pdf: 'Brittle Structures.pdf',
  pages: 'pp. 1–18',
  accent: '#7a3b2e',
  practice: [
    {
      id: 'ch13-p1',
      level: 'easy',
      question:
        'A fracture surface shows no measurable sliding parallel to it, only a slight opening. Is it a joint or a fault? Name the structure it becomes if quartz later fills it.',
      hint: 'Compare the definitions of joint, fault and vein.',
      steps: [
        'A joint is a natural fracture formed by tensile loading, with walls moving apart only very slightly.',
        'A fault requires measurable sliding parallel to the surface, which this fracture lacks.',
        'Minerals precipitated from water solution filling the fracture make it a vein.',
      ],
      answer: 'It is a joint; if minerals fill it, it becomes a vein.',
    },
    {
      id: 'ch13-p2',
      level: 'medium',
      question:
        'A borehole is pressurised with water until a vertical crack opens and grows. Which Griffith concept explains why the crack propagated, and which displacement mode describes the opening?',
      hint: 'Think about stress concentration at crack tips and the direction of wall movement.',
      steps: [
        'Griffith proposed that pre-existing microcracks and flaws concentrate stress at their tips.',
        'Fluid pressure inside the crack adds a local tensile stress at the tips, so the crack propagates even under low remote stress — hydraulic fracturing.',
        'The walls move apart perpendicular to the crack surface, which is Mode I (opening) displacement.',
      ],
      answer: 'Griffith crack theory (stress concentration at flaws), with fluid pressure driving propagation; Mode I opening.',
    },
    {
      id: 'ch13-p3',
      level: 'hard',
      question:
        'A region contains an old joint set and a new fault that follows one of those joint surfaces. Explain, using brittle-faulting processes, why this is common, and what textural evidence you would look for that slip occurred.',
      hint: 'Two basic ways exist to create a brittle fault; one uses an existing weakness.',
      steps: [
        'A brittle fault can form by shear rupturing of intact rock or by shear reactivation of a pre-existing weak surface such as a joint, bedding plane or older fault.',
        'A joint is a plane of low cohesion, so reactivating it requires less stress than breaking intact rock.',
        'Evidence of slip includes slickensides, cataclastic rock produced by distributed fracturing and frictional sliding, and fault-parallel veins that record incremental opening during slip.',
      ],
      answer:
        'The fault is a reactivated joint: pre-existing weaknesses localise shear. Evidence: cataclasis, frictional sliding textures, and fault-parallel veins.',
    },
  ],
  topics: [
    {
      id: 'brittle-deformation',
      title: 'Brittle Deformation and the Vocabulary of Fractures',
      tagline: 'Fracture, joint, fault, vein, shear zone — one family of breaks',
      source: { file: 'Brittle Structures.pdf', pages: 'pp. 2–5' },
      objectives: [
        'Define brittle deformation and explain when it occurs.',
        'Distinguish fracture, joint, fault, shear fracture and vein.',
        'Describe fracture trace, fracture front and fracture tip.',
      ],
      intro: {
        what: 'Brittle deformation is the permanent change a solid material undergoes because fractures grow and/or because sliding occurs on fractures. It happens only after stresses exceed a critical value, and only after the rock has already behaved elastically and possibly plastically.',
        why: 'Most structures you can see in an outcrop — joints, faults, veins — are brittle structures. They control how rock breaks, where water flows, how slopes fail and where earthquakes occur.',
        before: [
          'Stress is force per unit area; strain is the resulting deformation.',
          'Elastic deformation is recoverable; permanent deformation is not.',
          'A fracture is any surface across which continuity and strength are lost.',
        ],
      },
      simple: [
        {
          t: 'p',
          text: 'Think of bending a stick. A little force and it springs back (elastic). A little more and it may bend permanently (plastic). Past a critical point it snaps: that snap is brittle behaviour. Rock does the same, but the “snap” is a fracture, and the sound you would hear is an earthquake.',
        },
        {
          t: 'p',
          text: 'Brittle structures are all the ways a broken rock can look. The most useful distinction is **did the two sides slide past each other?** If not, you have a joint. If yes, you have a fault. If minerals later seal the crack, you have a vein.',
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'One word, several scales',
          text: 'A fracture can be grain-scale or continent-scale. The vocabulary does not change with size, only the modifier does: microjoint, microcrack, microfracture.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Brittle deformation', def: 'Permanent change in a solid caused by the growth of fractures and/or sliding on fractures. It requires stress above a critical value and follows some elastic and/or plastic behaviour.' },
            { term: 'Brittle fault zone', def: 'A band of finite width in which slip is distributed among many smaller discrete brittle faults, and/or in which the fault surface is bordered by pervasively fractured rock.' },
            { term: 'Brittle fault', def: 'A single surface on which movement occurs specifically by brittle deformation mechanisms.' },
            { term: 'Cataclasis', def: 'A deformation process involving distributed fracturing, crushing and frictional sliding of grains or rock fragments.' },
            { term: 'Crack / joint', def: 'A fracture whose displacement does not involve shear; the walls move apart only slightly. Joints form by tensile loading.' },
            { term: 'Fault', def: 'Broadly, a surface or zone across which measurable sliding has occurred parallel to the surface; narrowly, a brittle fault.' },
            { term: 'Fracture zone', def: 'A band containing many parallel or subparallel fractures, which may anastomose where the fractures are wavy.' },
            { term: 'Fracture', def: 'A general term for a surface across which continuity, and therefore strength, has been lost. Fractures range from grain-scale to continent-scale.' },
            { term: 'Shear fracture', def: 'A macroscopic fracture that grows with a component of shear parallel to it, formed by coalescence of microcracks.' },
            { term: 'Shear joint', def: 'A surface that began as a joint and later became a surface of sliding.' },
            { term: 'Shear zone', def: 'A region of finite width where ductile shear strain is much greater than in the surrounding rock.' },
            { term: 'Vein', def: 'A fracture filled with minerals precipitated from a water solution.' },
          ],
        },
        {
          t: 'p',
          text: 'A fracture is described geometrically by three features. The **fracture trace** is the line where the fracture intersects the surface of a rock body. The **fracture front** is the line separating fractured from unfractured rock. The **fracture tip** is the point where the fracture trace ends on the rock surface.',
        },
        {
          t: 'table',
          head: ['Structure', 'Relative motion', 'Typical cause'],
          rows: [
            ['Joint', 'Walls separate slightly; no shear displacement', 'Tensile loading'],
            ['Fault', 'Measurable sliding parallel to the surface', 'Shear stress exceeding resistance'],
            ['Vein', 'Former joint or shear fracture, now sealed', 'Mineral precipitation from fluids'],
            ['Shear zone', 'Ductile shear distributed across a band', 'Ductile deformation mechanisms'],
          ],
          caption: 'The distinctions are mechanical, not just descriptive.',
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Do not assume every crack is a joint',
          text: 'The lesson notes that a minority of geologists argue joints can form under shear loading. The standard definition used here is tensile loading, with the walls opening slightly.',
        },
      ],
      selfCheck: [
        { q: 'At what point does brittle deformation begin?', a: 'When stress exceeds a critical value, after some elastic and possibly plastic behaviour.' },
        { q: 'What separates a joint from a fault?', a: 'A fault has measurable sliding parallel to the surface; a joint does not, and opens only slightly.' },
        { q: 'What is a vein?', a: 'A fracture filled with minerals precipitated from a water solution.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which definition matches a joint?',
          options: [
            'A fracture with measurable sliding parallel to its surface',
            'A natural fracture formed by tensile loading, with walls moving slightly apart',
            'A band of ductile shear',
            'A fracture filled with quartz',
          ],
          answer: 1,
          explain: 'Joints form by tensile loading and show no appreciable shear displacement.',
        },
        {
          type: 'tf',
          prompt: 'Brittle deformation can occur before any elastic deformation has taken place.',
          answer: false,
          explain: 'The lesson states that brittle deformation occurs only after the rock has already undergone some elastic and/or plastic behaviour.',
        },
        {
          type: 'short',
          prompt: 'Name the process involving distributed fracturing, crushing and frictional sliding of grains.',
          accept: ['cataclasis'],
          explain: 'Cataclasis is the brittle grinding process; it can produce cataclastic flow at larger scale.',
        },
      ],
      cards: [
        { front: 'Brittle deformation', back: 'Permanent change from fracture growth and/or sliding on fractures, occurring after stress exceeds a critical value.' },
        { front: 'Joint vs fault', back: 'A joint opens slightly with no shear displacement; a fault has measurable sliding parallel to the surface.' },
        { front: 'Fracture trace, front, tip', back: 'Trace = intersection with the rock surface; front = boundary between fractured and intact rock; tip = end of the trace.' },
      ],
    },
    {
      id: 'griffith-cracks',
      title: 'Griffith Cracks, Stress Concentration and Crack Modes',
      tagline: 'Why real rocks break far below their theoretical strength',
      source: { file: 'Brittle Structures.pdf', pages: 'pp. 6–12' },
      objectives: [
        'Explain Griffith’s idea of pre-existing flaws.',
        'Describe how fluid pressure drives hydraulic fracturing.',
        'Distinguish Mode I, II and III displacement.',
      ],
      intro: {
        what: 'A.W. Griffith suggested that all materials contain pre-existing microcracks or flaws at which stress concentrations develop. Because stress concentrates at crack tips, those cracks propagate and become larger even when the host rock experiences relatively low remote stress.',
        why: 'This explains why rock breaks at stresses far below the strength of a perfect crystal, and it underpins hydraulic fracturing, vein growth and earthquake nucleation on pre-existing faults.',
        before: ['Stress concentrates at the ends of openings.', 'Rock contains pores, grain boundaries and grain-scale fractures.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Tear a notch in a plastic wrapper and it rips easily along the notch. The notch is a flaw, and the tear runs because stress piles up at its tip. Rock is full of microscopic notches — pores, grain boundaries, tiny cracks — so it fails at the weakest one, not everywhere at once.',
        },
        {
          t: 'p',
          text: 'A **Griffith crack** is any of those pre-existing microcracks and flaws, including grain-scale fractures, pores and grain boundaries.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Griffith’s insight is that the remote stress does not need to be high for a crack to grow. What matters is the local stress at the crack tip, which is amplified by the crack’s shape. Long, sharp flaws amplify stress far more than round pores.',
        },
        {
          t: 'p',
          text: '**Hydraulic fracturing** follows directly: a fluid pushed uniformly outward inside a microcrack creates a local tensile stress at the crack tips, so the crack propagates. This is the same principle used in engineered hydraulic fracturing and in natural vein formation.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Mode I — opening', def: 'The crack opens very slightly in the direction perpendicular to the crack surface.' },
            { term: 'Mode II — sliding', def: 'Rock on one side moves slightly parallel to the fracture surface and perpendicular to the fracture front.' },
            { term: 'Mode III — tearing', def: 'Rock on one side slides parallel to the crack and parallel to the fracture front.' },
          ],
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Modes describe displacement, not stress',
          text: 'The three modes are defined by how the two walls move relative to each other. A single fracture can show mixed-mode behaviour, with both opening and sliding components.',
        },
      ],
      example: {
        problem:
          'A vertical crack in granite is opened by pumped water. Later, the same crack is sheared horizontally during faulting, and finally the crack surface is drilled through and a core shows a twisted surface. Identify the displacement modes in order.',
        given: ['Stage 1: walls move apart perpendicular to the crack.', 'Stage 2: walls slide parallel to the surface and perpendicular to the front.', 'Stage 3: sliding parallel to the front.'],
        required: 'The mode for each stage.',
        steps: [
          { label: 'Stage 1', text: 'Opening perpendicular to the crack surface is Mode I.' },
          { label: 'Stage 2', text: 'Sliding parallel to the surface but perpendicular to the front is Mode II.' },
          { label: 'Stage 3', text: 'Sliding parallel to the front is Mode III, the tearing mode.' },
        ],
        answer: 'Mode I, then Mode II, then Mode III.',
        check: 'Check each mode against the direction of wall motion relative to the crack front, not against the compass direction.',
      },
      selfCheck: [
        { q: 'What is a Griffith crack?', a: 'A pre-existing microcrack or flaw, including grain-scale fractures, pores and grain boundaries.' },
        { q: 'Why does a fluid inside a crack make it grow?', a: 'It creates a local tensile stress at the crack tips, so the crack propagates.' },
        { q: 'Which mode is pure opening?', a: 'Mode I.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Mode II displacement involves:',
          options: [
            'Opening perpendicular to the crack surface',
            'Sliding parallel to the surface and perpendicular to the front',
            'Sliding parallel to the front',
            'No movement at all',
          ],
          answer: 1,
          explain: 'Mode II is the sliding mode; Mode III is tearing parallel to the front.',
        },
        {
          type: 'tf',
          prompt: 'Griffith proposed that materials contain pre-existing flaws that concentrate stress at their tips.',
          answer: true,
          explain: 'That is the core of Griffith crack theory.',
        },
        {
          type: 'short',
          prompt: 'Name the process in which fluid pressure at crack tips drives crack propagation.',
          accept: ['hydraulic fracturing', 'hydraulic fracture'],
          explain: 'Hydraulic fracturing uses fluid pressure to create local tension at crack tips.',
        },
      ],
      cards: [
        { front: 'Griffith crack', back: 'A pre-existing microcrack or flaw — grain-scale fracture, pore or grain boundary — where stress concentrates.' },
        { front: 'Mode I / II / III', back: 'I = opening; II = sliding perpendicular to the front; III = tearing parallel to the front.' },
        { front: 'Hydraulic fracturing', back: 'Outward fluid pressure inside a crack creates local tension at the tips, propagating the crack.' },
      ],
    },
    {
      id: 'brittle-faulting',
      title: 'Brittle Faulting, Cataclasis and Frictional Sliding',
      tagline: 'From intact rock to a slipping surface',
      source: { file: 'Brittle Structures.pdf', pages: 'pp. 13–18' },
      objectives: [
        'Explain the two basic ways a brittle fault forms.',
        'Describe cataclasis and cataclastic flow.',
        'State what frictional sliding requires and what the two fracture criteria predict.',
      ],
      intro: {
        what: 'A brittle fault is a surface on which measurable slip has developed without much contribution from plastic deformation. It can form by shear rupturing of intact rock, or by shear reactivation of an existing weak surface such as a joint, bedding plane or older fault.',
        why: 'Faults are where earthquakes happen, where ore-bearing fluids circulate and where the ground is weakest. Understanding their formation explains why faults reoccupy old weaknesses.',
        before: ['The definitions of joint, fault and vein.', 'Crack modes I–III.'],
      },
      simple: [
        {
          t: 'p',
          text: 'You can break a stick in two ways: snap a fresh piece, or bend along a crack that is already there. Rock faults form the same way — either by rupturing intact rock or by reactivating an old surface. The second is easier, which is why faults often follow old joints or bedding planes.',
        },
        {
          t: 'p',
          text: 'When a fault forms, the rock near it is not simply cut. It is crushed and ground. That process, **cataclasis**, produces a rock flour and fragmented rock called cataclasite, and when the crushing is distributed through a wide band the rock can flow — cataclastic flow.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The lesson lists two basic ways to create a brittle fault: by **shear rupturing of a previously intact body of rock**, or by **shear reactivation of a previously formed weak surface** — for example a joint, a bedding surface or a pre-existing fault.',
        },
        {
          t: 'p',
          text: 'Slip can also be accommodated by the growth of **fault-parallel veins**: minerals precipitate in opening fractures aligned with the fault, so the vein records incremental slip. **Fault-surface veins** are the same idea developed directly on the fault surface.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Cataclasis', def: 'Distributed fracturing, crushing and frictional sliding of grains and fragments, without significant crystal plasticity.' },
            { term: 'Cataclastic flow', def: 'Mesoscopic ductile behaviour produced by microscopic brittle processes: the rock deforms as a coherent mass while its grains fracture and slide.' },
          ],
        },
        {
          t: 'p',
          text: 'Two criteria predict failure. A **tensile cracking criterion** is a mathematical statement predicting the stress state in which a crack begins to propagate. A **shear-fracture criterion** describes the stress state at which a shear rupture forms and separates a sample into two pieces.',
        },
        {
          t: 'p',
          text: '**Frictional sliding** is movement on a surface that occurs when the shear stress parallel to the surface exceeds the frictional resistance to sliding. This is why a pre-existing surface slips at a lower stress than intact rock would require.',
        },
      ],
      example: {
        problem:
          'Two outcrops are loaded by the same tectonic stress. Outcrop A is intact granite; outcrop B contains a continuous joint set at 45° to the stress. Which is more likely to develop a fault first, and why?',
        given: ['Identical rock type and stress.', 'Outcrop B has a pre-existing joint set.'],
        required: 'A prediction with a mechanical reason.',
        steps: [
          { label: 'Intact rock', text: 'In outcrop A a fault requires shear rupture of intact rock, which needs the shear-fracture criterion to be met.' },
          { label: 'Weak surface', text: 'In outcrop B the joint is already a surface of low cohesion, so only frictional resistance must be overcome.' },
          { label: 'Prediction', text: 'Outcrop B faults first and will tend to slip along the joint orientation rather than forming a new surface.' },
        ],
        answer: 'Outcrop B, because reactivating a pre-existing weak surface requires less stress than rupturing intact rock.',
        check: 'Look for cataclasis and fault-parallel veins along the joint to confirm that slip used the old surface.',
      },
      selfCheck: [
        { q: 'State the two basic ways to create a brittle fault.', a: 'Shear rupture of intact rock, or shear reactivation of a pre-existing weak surface.' },
        { q: 'What is cataclasis?', a: 'Distributed fracturing, crushing and frictional sliding of grains or rock fragments.' },
        { q: 'When does frictional sliding begin?', a: 'When shear stress parallel to the surface exceeds the frictional resistance to sliding.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which is NOT a way to create a brittle fault?',
          options: [
            'Shear rupture of intact rock',
            'Reactivation of a pre-existing joint',
            'Reactivation of a bedding surface',
            'Diffusion of atoms through the crystal lattice',
          ],
          answer: 3,
          explain: 'Diffusion is a ductile mechanism, not a way of creating a brittle fault.',
        },
        {
          type: 'tf',
          prompt: 'Fault-parallel veins can record incremental slip on a fault.',
          answer: true,
          explain: 'Minerals filling fractures aligned with the fault preserve a record of slip increments.',
        },
        {
          type: 'short',
          prompt: 'Name the process of distributed fracturing, crushing and frictional sliding near a fault.',
          accept: ['cataclasis', 'cataclastic flow'],
          explain: 'Cataclasis produces cataclastic rocks and can allow cataclastic flow.',
        },
      ],
      cards: [
        { front: 'Two ways to make a brittle fault', back: 'Shear rupture of intact rock, or shear reactivation of an existing weak surface (joint, bedding, older fault).' },
        { front: 'Cataclasis', back: 'Distributed fracturing, crushing and frictional sliding of grains or fragments.' },
        { front: 'Frictional sliding condition', back: 'Sliding begins when shear stress parallel to the surface exceeds frictional resistance.' },
      ],
    },
  ],
}
