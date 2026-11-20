import type { Chapter } from '../types'

export const ch14: Chapter = {
  id: 'ch14',
  number: 14,
  title: 'Ductile Structures',
  subtitle: 'How rock flows: cataclastic flow, diffusion, crystal plasticity and lattice defects',
  pdf: 'DUCTILE STRUCTURES.pdf',
  pages: 'pp. 1–8',
  accent: '#4b5d8a',
  practice: [
    {
      id: 'ch14-p1',
      level: 'easy',
      question: 'Name the three fundamental mechanisms that produce ductile behaviour in rocks and minerals.',
      hint: 'One involves brittle micro-processes, one involves moving matter, one involves dislocations.',
      steps: [
        'Cataclastic flow — distributed microscopic fracturing and frictional sliding.',
        'Diffusional mass transfer — atoms or ions migrate through the lattice or along boundaries.',
        'Crystal plasticity — slip carried by dislocations moving through crystal lattices.',
      ],
      answer: 'Cataclastic flow, diffusional mass transfer and crystal plasticity.',
    },
    {
      id: 'ch14-p2',
      level: 'medium',
      question:
        'A folded quartz vein shows no visible fractures in hand specimen, yet thin sections show healed microcracks and bent crystal lattices. Which ductile mechanisms could account for the deformation?',
      hint: 'Match each observation to a mechanism.',
      steps: [
        'Healed microcracks point to cataclasis: microfracturing followed by cementation, producing cataclastic flow at the outcrop scale.',
        'Bent lattices with no cracks indicate crystal plasticity, where dislocations glide and the lattice accommodates strain.',
        'Diffusional mass transfer may also contribute by moving atoms to sites of high stress, allowing grains to change shape.',
      ],
      answer: 'Cataclastic flow (microfracturing and frictional sliding) plus crystal plasticity, with possible diffusional mass transfer.',
    },
    {
      id: 'ch14-p3',
      level: 'hard',
      question:
        'Why can a rock behave ductilely at the outcrop scale while every microscopic process involved is brittle? Use cataclastic flow to explain.',
      hint: 'Scale matters: the sample stays coherent even though grains break.',
      steps: [
        'Brittle processes operate at the grain scale: individual grains fracture and slide past one another.',
        'If those micro-brittle events are distributed evenly through a large volume, the rock mass changes shape without a through-going fracture.',
        'The result is mesoscopic ductile behaviour — cataclastic flow — even though the mechanism is microscopic brittle fracturing and frictional sliding.',
      ],
      answer:
        'Because distributed grain-scale brittle events allow the mass to deform coherently: cataclasis produces mesoscopic ductile behaviour from microscopic brittle processes.',
    },
  ],
  topics: [
    {
      id: 'ductile-mechanisms',
      title: 'Ductile Behaviour and Its Three Mechanisms',
      tagline: 'Bending without breaking, at the scale of the rock',
      source: { file: 'DUCTILE STRUCTURES.pdf', pages: 'pp. 2–3' },
      objectives: [
        'Define ductile behaviour in rocks.',
        'Name and distinguish cataclastic flow, diffusional mass transfer and crystal plasticity.',
        'Explain how cataclastic flow is ductile at one scale and brittle at another.',
      ],
      intro: {
        what: 'Ductile behaviour is deformation that is distributed through the rock and persists without a through-going fracture. Three fundamental mechanisms produce it: cataclastic flow, diffusional mass transfer and crystal plasticity.',
        why: 'Folds, foliation, shear zones and much of the rock record of mountain building are products of ductile deformation. Recognising the mechanism tells you the conditions — temperature, pressure, strain rate and fluid content.',
        before: ['The difference between brittle and ductile deformation.', 'The idea that a rock is an aggregate of grains.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Bend a chocolate bar and it snaps. Warm it slightly and it bends first. Rock behaves the same way depending on conditions: cold and fast, it breaks; warm, slow and confined, it flows. “Flowing” does not mean melting — the rock stays solid while its grains change shape and slide.',
        },
        {
          t: 'p',
          text: 'There are three ways this happens. Grains can **break and grind past each other** (cataclastic flow). Atoms can **move from one place to another** (diffusional mass transfer). Or the crystal lattice itself can **slip internally** (crystal plasticity).',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Cataclastic flow', def: 'Mesoscopic ductile behaviour produced by microscopic brittle fracturing and frictional sliding. The rock mass deforms coherently while its grains fracture and slide.' },
            { term: 'Diffusional mass transfer', def: 'Ductile deformation in which atoms or ions migrate through the lattice or along grain boundaries, removing material from highly stressed sites and adding it to low-stress sites so grains change shape.' },
            { term: 'Crystal plasticity', def: 'Ductile deformation carried by the movement of dislocations through crystal lattices, allowing crystals to change shape without fracturing.' },
          ],
        },
        {
          t: 'p',
          text: 'Cataclastic flow is the most counter-intuitive of the three. **Cataclasis is mesoscopic ductile behaviour, yet the process by which it occurs is microscopic brittle fracturing and frictional sliding.** The rock bends because millions of tiny breaks are distributed through it, not because any single crystal flows.',
        },
        {
          t: 'table',
          head: ['Mechanism', 'What moves', 'Scale of the brittle/ductile contrast'],
          rows: [
            ['Cataclastic flow', 'Fragments and grains sliding', 'Brittle at grain scale; ductile at outcrop scale'],
            ['Diffusional mass transfer', 'Atoms and ions', 'No fracturing required'],
            ['Crystal plasticity', 'Dislocations in the lattice', 'No fracturing required'],
          ],
          caption: 'The three mechanisms can operate together in the same rock.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Ductile is not molten',
          text: 'All three mechanisms occur in solid rock. Melting is a different process and produces magma, not ductile structures.',
        },
      ],
      selfCheck: [
        { q: 'Name the three ductile mechanisms.', a: 'Cataclastic flow, diffusional mass transfer and crystal plasticity.' },
        { q: 'Why is cataclastic flow described as ductile?', a: 'Deformation is distributed through the mass, so it changes shape without a through-going fracture.' },
        { q: 'Which mechanism involves dislocations?', a: 'Crystal plasticity.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Cataclastic flow occurs by:',
          options: [
            'Dislocation glide in crystals',
            'Microscopic brittle fracturing and frictional sliding',
            'Atom-by-atom diffusion',
            'Melting and refreezing',
          ],
          answer: 1,
          explain: 'Cataclasis is microscopic brittle behaviour that produces mesoscopic ductile flow.',
        },
        {
          type: 'tf',
          prompt: 'Ductile deformation requires the rock to melt.',
          answer: false,
          explain: 'All three ductile mechanisms operate in solid rock; melting is not required.',
        },
        {
          type: 'short',
          prompt: 'Name the mechanism in which atoms migrate and grains change shape without fracturing.',
          accept: ['diffusional mass transfer', 'diffusion'],
          explain: 'Diffusional mass transfer moves material from high-stress to low-stress sites.',
        },
      ],
      cards: [
        { front: 'Three ductile mechanisms', back: 'Cataclastic flow, diffusional mass transfer and crystal plasticity.' },
        { front: 'Cataclastic flow', back: 'Mesoscopic ductile behaviour produced by microscopic brittle fracturing and frictional sliding.' },
        { front: 'Crystal plasticity', back: 'Shape change carried by dislocations moving through the crystal lattice.' },
      ],
    },
    {
      id: 'crystal-defects',
      title: 'Crystal Defects and Dislocations',
      tagline: 'Errors in the lattice that let crystals bend',
      source: { file: 'DUCTILE STRUCTURES.pdf', pages: 'pp. 4–8' },
      objectives: [
        'Define a crystal defect and name the three basic types.',
        'Distinguish vacancies from substitutional and interstitial impurities.',
        'Describe edge, screw and mixed dislocations.',
      ],
      intro: {
        what: 'A crystal defect is an error in the crystal lattice. The three basic types are point defects, line defects (dislocations) and planar defects (stacking faults).',
        why: 'Defects are not merely imperfections: they control how crystals deform. Dislocations allow crystal plasticity, which is one of the three ductile mechanisms.',
        before: ['A crystal is a repeating three-dimensional array of atoms.', 'Ductile deformation can occur without fracturing.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Imagine a brick wall built by someone in a hurry. One brick is missing, a wrong-coloured brick sits in the wrong place, and one extra brick sticks out. The wall still stands, but it is weaker along those imperfections. A crystal lattice has the same kinds of mistakes, and they are what let it bend instead of shatter.',
        },
        {
          t: 'p',
          text: 'The three families are **point** defects (a single site is wrong), **line** defects or dislocations (a line of wrongness runs through the crystal), and **planar** defects or stacking faults (a whole plane is mis-stacked).',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Point defects', def: 'Errors at individual lattice sites. Vacancies are unoccupied sites. Impurities are either substitutional (a different atom occupies a lattice site) or interstitial (an extra atom sits at a non-lattice site).' },
            { term: 'Line defects / dislocations', def: 'A linear array of lattice imperfections: the linear array of atoms that bounds an area of the crystal which has slipped relative to the rest.' },
            { term: 'Planar defects / stacking faults', def: 'Errors extending across a plane in the lattice, where the stacking sequence of atomic layers is interrupted.' },
          ],
        },
        {
          t: 'p',
          text: '**Vacancies can migrate** by exchanging with atoms in neighbouring sites. This motion is one route for diffusional mass transfer.',
        },
        {
          t: 'p',
          text: 'Dislocations come in three forms. An **edge dislocation** occurs where there is an extra half-plane of atoms that ends halfway into the crystal. A **screw dislocation** has atoms arranged in a corkscrew-like fashion around the dislocation line. A **mixed dislocation** has part edge and part screw character.',
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Why dislocations matter',
          text: 'A perfect crystal would need enormous stress to deform. Dislocations move at far lower stress, which is why real crystals — and rocks — deform plastically at geological conditions.',
        },
      ],
      example: {
        problem:
          'A thin section shows (a) a missing atom site, (b) a magnesium atom occupying an iron site, (c) an extra atom between lattice sites, and (d) an extra half-plane of atoms ending inside a grain. Classify each observation.',
        given: ['Four lattice-scale observations.'],
        required: 'The defect type for each.',
        steps: [
          { label: '(a)', text: 'An unoccupied site is a vacancy, a point defect.' },
          { label: '(b)', text: 'A different atom on a normal lattice site is a substitutional impurity, a point defect.' },
          { label: '(c)', text: 'An atom at a non-lattice site is an interstitial impurity, a point defect.' },
          { label: '(d)', text: 'An extra half-plane ending inside the crystal is an edge dislocation, a line defect.' },
        ],
        answer: '(a) vacancy; (b) substitutional impurity; (c) interstitial impurity; (d) edge dislocation.',
        check: 'Point defects affect one site; dislocations form a line through the lattice.',
      },
      selfCheck: [
        { q: 'Name the three basic types of crystal defect.', a: 'Point defects, line defects (dislocations) and planar defects (stacking faults).' },
        { q: 'What is a vacancy?', a: 'An unoccupied site in the crystal lattice.' },
        { q: 'What defines an edge dislocation?', a: 'An extra half-plane of atoms that ends halfway inside the crystal.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A different atom occupying a normal lattice site is:',
          options: ['A vacancy', 'A substitutional impurity', 'An interstitial impurity', 'A screw dislocation'],
          answer: 1,
          explain: 'Substitution replaces the original atom at a lattice site.',
        },
        {
          type: 'tf',
          prompt: 'A screw dislocation has atoms arranged in a corkscrew-like fashion.',
          answer: true,
          explain: 'That is the defining geometry of a screw dislocation.',
        },
        {
          type: 'short',
          prompt: 'Name the line defect that bounds an area of crystal that has slipped relative to the rest.',
          accept: ['dislocation', 'line defect'],
          explain: 'A dislocation is a linear array of lattice imperfections associated with slip.',
        },
      ],
      cards: [
        { front: 'Crystal defect', back: 'An error in the crystal lattice; types are point, line (dislocation) and planar (stacking fault).' },
        { front: 'Vacancy vs impurity', back: 'Vacancy = empty lattice site; substitutional impurity = wrong atom on a site; interstitial = extra atom off-site.' },
        { front: 'Dislocation types', back: 'Edge (extra half-plane), screw (corkscrew), and mixed (part edge, part screw).' },
      ],
    },
  ],
}
