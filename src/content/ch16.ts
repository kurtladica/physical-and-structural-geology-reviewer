import type { Chapter } from '../types'

export const ch16: Chapter = {
  id: 'ch16',
  number: 16,
  title: 'Joints, Veins and Faults',
  subtitle: 'Fracture arrays, vein fill, fault geometry and fault systems',
  pdf: 'Joints and Veins.pdf',
  pages: 'pp. 1–44',
  accent: '#3f6c74',
  practice: [
    {
      id: 'ch16-p1',
      level: 'easy',
      question:
        'Two joint sets cut an outcrop. One set is long and continuous across the exposure; the other consists of short joints that stop at the first set. Name the two sets and the angle between them.',
      hint: 'Through-going versus short cross-cutting joints; the angle has its own term.',
      steps: [
        'The continuous, through-going set is the master joints.',
        'The short joints between them are cross joints.',
        'The angle between the two sets is the dihedral angle.',
      ],
      answer: 'Master joints and cross joints; the angle between the sets is the dihedral angle.',
    },
    {
      id: 'ch16-p2',
      level: 'medium',
      question:
        'A fault surface dips 60° and separates a hanging-wall block from a footwall block. A marker bed is displaced. Define throw and heave, and state which block lies above the fault plane.',
      hint: 'Throw and heave are the vertical and horizontal components of dip separation.',
      steps: [
        'The hanging-wall block is the rock body above the fault plane; the footwall block lies below it.',
        'Throw is the vertical component of dip separation.',
        'Heave is the horizontal component of dip separation.',
      ],
      answer: 'Hanging wall above, footwall below; throw is vertical offset, heave is horizontal offset.',
    },
    {
      id: 'ch16-p3',
      level: 'hard',
      question:
        'A map shows two normal faults dipping toward each other with a down-dropped block between them, and nearby two normal faults dipping away from each other with a high block between them. Name both structures and explain the difference.',
      hint: 'Graben versus horst.',
      steps: [
        'Faults dipping toward each other drop the block between them: a graben.',
        'Faults dipping away from each other leave a relatively high footwall block between them: a horst.',
        'Both are extensional structures built from adjacent normal faults.',
      ],
      answer: 'A graben and a horst respectively; both form in extensional normal-fault systems.',
    },
  ],
  topics: [
    {
      id: 'joints',
      title: 'Joints and Joint Arrays',
      tagline: 'The most common structure in rock, and the patterns it makes',
      source: { file: 'Joints and Veins.pdf', pages: 'pp. 2, 4–14' },
      objectives: [
        'Define a joint and explain why joints are so common.',
        'Describe plumose surface markings and their parts.',
        'Distinguish systematic from nonsystematic joints, sets, systems, master and cross joints.',
      ],
      intro: {
        what: 'Joints are fractures along which there has been no appreciable displacement parallel to the fracture and only slight movement normal to the fracture plane. They are the most common of all structures, present in every setting and in consolidated and unconsolidated sediment.',
        why: 'Joints control permeability, slope stability and rock strength. Their orientations record the stress history of a region, and their patterns guide quarrying, tunnelling and groundwater exploration.',
        before: ['The definition of a fracture.', 'Joint versus fault: no shear displacement.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Mud cracks in a dried puddle are joints in miniature: the mud pulls apart and cracks open without the two sides sliding past each other. Rock does this at every scale, which is why almost every outcrop is cut by cracks.',
        },
        {
          t: 'p',
          text: 'Joints rarely occur alone. They form **sets** of similar orientation and **systems** of two or more sets. Long through-going joints are **master joints**, and the short ones that stop against them are **cross joints**.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Joints form by tensile loading: the walls of the fracture move apart very slightly as the joint develops. The lesson notes that a minority of geologists argue joints can also form under shear loading.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Plumose structure', def: 'A subtle roughness on some joint surfaces, especially in fine-grained rocks, that macroscopically resembles the imprint of a feather.' },
            { term: 'Joint origin', def: 'The point where the fracture began to propagate, usually a flaw or inclusion, commonly marked by a dimple.' },
            { term: 'Mirror region', def: 'The very smooth part of the joint surface adjacent to the origin; mirrors do not form in rocks with many small heterogeneities.' },
            { term: 'Mist region', def: 'The zone surrounding the mirror where the fracture surface begins to roughen.' },
            { term: 'Hackle zone', def: 'The main, relatively rough part of a plumose structure, caused by deflection around grain-scale inclusions or off-plane cracking.' },
            { term: 'Plume axis', def: 'The axis of the plume in a plumose structure.' },
            { term: 'Arrest line', def: 'An arcuate ridge on a joint surface where the joint front stopped or paused; also called rib marks.' },
            { term: 'Twist hackle', def: 'Small en echelon joints along the edge of a larger joint, formed when the fracture surface twists into a different orientation and breaks into segments.' },
          ],
        },
        {
          t: 'deflist',
          items: [
            { term: 'Systematic joints', def: 'Joints with a subparallel orientation and regular spacing.' },
            { term: 'Nonsystematic joints', def: 'Joints without a common orientation, including highly curved and irregular surfaces; they are not easily related to a recognisable stress.' },
            { term: 'Joint set / joint system', def: 'A set shares a similar orientation in the same area; a system consists of two or more sets.' },
            { term: 'Dihedral angle', def: 'The angle between two joint sets in a joint system.' },
            { term: 'Cross-strike joints', def: 'Joints that cut across the general trend of fold hinges (regional bedding strike).' },
            { term: 'Strike-parallel joints', def: 'Joints that parallel the trend of fold hinges (regional bedding strike).' },
            { term: 'Sheeting joints', def: 'Joints formed near the surface roughly parallel to the ground surface; on dome-like mountains they produce exfoliation.' },
            { term: 'Columnar jointing', def: 'Joint-bounded columns with roughly hexagonal cross-sections, typical of shallow intrusions and lava flows.' },
            { term: 'Hooking', def: 'The curving of one joint near its intersection with an earlier-formed joint.' },
            { term: 'Joint spacing', def: 'The average distance between adjacent members of a joint set, measured perpendicular to the joint surface.' },
            { term: 'Joint stress shadow', def: 'The region around a joint where joint-normal tensile stress is too low for new joints to form.' },
          ],
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Cross-cutting is not always simple',
          text: 'The lesson lists three explanations for cross-cutting relations: the earlier joint did not act as a free surface, the intersection of two younger joints is coincidental, or the apparent cross-cutting is an illusion because the older joint terminated and the younger one grew around it.',
        },
      ],
      selfCheck: [
        { q: 'Why are joints the most common structure?', a: 'They occur in all settings and in all kinds of rock, consolidated or not, and require only tensile opening.' },
        { q: 'What is a joint set?', a: 'Joints that share a similar orientation in the same area.' },
        { q: 'What are sheeting joints?', a: 'Near-surface joints roughly parallel to the ground surface, producing exfoliation on domes.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Short joints that terminate against long, through-going joints are called:',
          options: ['Master joints', 'Cross joints', 'Strike joints', 'Sheeting joints'],
          answer: 1,
          explain: 'The through-going set are master joints; the short ones between them are cross joints.',
        },
        {
          type: 'tf',
          prompt: 'Columnar jointing produces roughly hexagonal columns in lava flows and shallow intrusions.',
          answer: true,
          explain: 'Columnar jointing is characteristic of such bodies.',
        },
        {
          type: 'short',
          prompt: 'Name the feather-like surface marking found on some joints.',
          accept: ['plumose structure', 'plumose'],
          explain: 'Plumose structures record the propagation of the fracture.',
        },
      ],
      cards: [
        { front: 'Joint', back: 'A natural fracture formed by tensile loading, with no appreciable displacement parallel to the surface and only slight normal movement.' },
        { front: 'Joint set vs system', back: 'A set shares a similar orientation; a system is two or more sets in the same area, separated by a dihedral angle.' },
        { front: 'Master vs cross joints', back: 'Master joints are long and through-going; cross joints are short and terminate against them.' },
      ],
    },
    {
      id: 'joint-origins',
      title: 'Origin and Interpretation of Joints',
      tagline: 'Unroofing, cooling, membrane effects and hydraulic fracturing',
      source: { file: 'Joints and Veins.pdf', pages: 'pp. 15–19' },
      objectives: [
        'Explain how uplift and unroofing change the stress state.',
        'Describe the cooling, Poisson and membrane effects.',
        'Explain natural hydraulic fracturing and the limits on joint growth.',
      ],
      intro: {
        what: 'Joints related to uplift and unroofing form because removing overburden changes the stress state. The lesson names three reasons: cooling, the Poisson effect, and the membrane effect, in which a layer stretches as its radius of curvature increases, creating tensile stress.',
        why: 'These mechanisms explain why near-surface rocks are so widely cracked, and why joints are useful records of erosion and exhumation history.',
        before: ['Elastic strain and Poisson’s ratio.', 'Tensile stress and Griffith cracks.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A squeezed sponge expands when you let go. Rock does something similar when erosion removes the weight above it: it relaxes, and tension develops near the surface. That tension opens sheet joints parallel to the ground.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Cooling', def: 'A cooling rock body contracts; if it is constrained, contraction generates tensile stress that can crack it.' },
            { term: 'Poisson effect', def: 'When a rock is compressed in one direction it expands in the perpendicular directions; releasing that compression can leave the rock in tension.' },
            { term: 'Membrane effect', def: 'A layer stretches like a membrane as its radius of curvature increases, creating tensile stress in the layer.' },
          ],
        },
        {
          t: 'p',
          text: 'Sheeting joints form near the ground surface roughly parallel to it, producing exfoliation on dome-like mountains. Natural hydraulic fracturing occurs when fluid pressure inside a crack creates local tension at the crack tips and drives propagation.',
        },
        {
          t: 'p',
          text: 'Joints also form in response to regional deformation, where the stress field of a tectonic event produces systematic sets. Growth is not unlimited: the lesson treats the limits on joint growth, including the stress shadow around an existing joint where tensile stress is too low for a new joint to form.',
        },
      ],
      selfCheck: [
        { q: 'Name the three reasons unroofing changes the stress state.', a: 'Cooling, the Poisson effect and the membrane effect.' },
        { q: 'What is the membrane effect?', a: 'A layer stretches as its radius of curvature increases, creating tensile stress.' },
        { q: 'What limits joint spacing near an existing joint?', a: 'The joint stress shadow, where tensile stress is too low for new joints.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Sheeting joints are roughly:',
          options: ['Perpendicular to the ground surface', 'Parallel to the ground surface', 'Parallel to the fold axis only', 'Vertical everywhere'],
          answer: 1,
          explain: 'Sheeting joints form near the surface parallel to it, producing exfoliation.',
        },
        {
          type: 'tf',
          prompt: 'The Poisson effect can contribute to tensile stress during unroofing.',
          answer: true,
          explain: 'Release of compression allows perpendicular expansion, producing tension.',
        },
        {
          type: 'short',
          prompt: 'Name the effect in which a layer stretches as its curvature decreases.',
          accept: ['membrane effect'],
          explain: 'The membrane effect creates tensile stress as the radius of curvature increases.',
        },
      ],
      cards: [
        { front: 'Unroofing joint causes', back: 'Cooling, the Poisson effect and the membrane effect.' },
        { front: 'Sheeting joints', back: 'Near-surface joints parallel to the ground surface; produce exfoliation domes.' },
        { front: 'Joint stress shadow', back: 'Zone around a joint where tensile stress is too low for new joints to form, limiting spacing.' },
      ],
    },
    {
      id: 'veins',
      title: 'Veins and Vein Arrays',
      tagline: 'Fractures sealed by minerals — and the lineaments they trace',
      source: { file: 'Joints and Veins.pdf', pages: 'pp. 3, 20–26' },
      objectives: [
        'Define a vein and name common vein-filling minerals.',
        'Distinguish blocky from fibrous veins.',
        'Explain vein arrays and structural lineaments.',
      ],
      intro: {
        what: 'A vein is a fracture that has filled with minerals precipitated from water solutions that passed through the fracture. The filling ranges from quartz and feldspar (pegmatite and aplite) to quartz, calcite and dolomite.',
        why: 'Veins are the record of fluid flow in the crust. Their textures show whether the fracture opened incrementally, and their orientations reveal the stress field during mineralisation.',
        before: ['Joints and shear fractures.', 'Mineral precipitation from aqueous solutions.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Cracks in a pavement fill with dirt and weeds. In rock, cracks fill with minerals carried by hot water: quartz, calcite or dolomite crystallise in the opening. That filled crack is a vein — a fossilised plumbing system.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The lesson defines a vein as a fracture filled with minerals precipitated from water solutions that passed through it. A **vein array** is a group of veins in a body of rock.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Blocky vein', def: 'Crystals of the vein fill are roughly equant and may exhibit crystal faces.' },
            { term: 'Fibrous vein', def: 'Crystals are long relative to their width, so the vein looks as if it is spanned by a bunch of hairs.' },
            { term: 'Geologic lineament', def: 'A linear feature recognised on aerial photographs, satellite imagery or topographic maps.' },
            { term: 'Structural lineament', def: 'A lineament that is a consequence of the localisation of known geological features, defined by structurally controlled alignments of ridges, depressions or escarpments.' },
          ],
        },
        {
          t: 'p',
          text: 'Fibrous and blocky textures are not just descriptive: fibrous growth typically records repeated opening and sealing, whereas blocky fill suggests more open growth into a cavity.',
        },
      ],
      selfCheck: [
        { q: 'What is a vein?', a: 'A fracture filled with minerals precipitated from water solutions.' },
        { q: 'Name three common vein-filling minerals.', a: 'Quartz, calcite and dolomite (also feldspar in pegmatite and aplite).' },
        { q: 'What is a structural lineament?', a: 'A linear feature defined by structurally controlled alignments of ridges, depressions or escarpments.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A vein in which crystals are long relative to their width is:',
          options: ['Blocky', 'Fibrous', 'Vuggy', 'Amygdaloidal'],
          answer: 1,
          explain: 'Fibrous veins look as though spanned by hairs; blocky veins have roughly equant crystals.',
        },
        {
          type: 'tf',
          prompt: 'Vein minerals precipitate from water solutions passing through the fracture.',
          answer: true,
          explain: 'That is the definition of a vein.',
        },
        {
          type: 'short',
          prompt: 'Name a group of veins in a body of rock.',
          accept: ['vein array'],
          explain: 'A vein array is a group of veins in one rock body.',
        },
      ],
      cards: [
        { front: 'Vein', back: 'A fracture filled with minerals precipitated from water solutions that passed through it.' },
        { front: 'Blocky vs fibrous vein', back: 'Blocky: roughly equant crystals, sometimes with faces. Fibrous: long crystals spanning the vein.' },
        { front: 'Structural lineament', back: 'A linear feature defined by structurally controlled alignments of ridges, depressions or escarpments.' },
      ],
    },
    {
      id: 'faults',
      title: 'Fault Geometry and Separation',
      tagline: 'Walls, slip, cutoffs, windows and the components of offset',
      source: { file: 'Joints and Veins.pdf', pages: 'pp. 27–35' },
      objectives: [
        'Define fault, hanging wall and footwall, net slip and shear sense.',
        'Distinguish contractional from extensional faults.',
        'Describe cutoff, window, klippe, allochthon, autochthon and the separation measures.',
      ],
      intro: {
        what: 'Faults are fractures with appreciable movement parallel to their plane, usually accompanied by seismic activity. The rock adjacent to the fault is its wall; the body that moved is a fault block, distinguished as hanging wall (above the plane) and footwall (below).',
        why: 'Faults displace ore bodies, aquifers and coal seams, and they generate earthquakes. Describing their geometry precisely is the basis of both hazard assessment and resource exploration.',
        before: ['Joints and shear fractures.', 'Strike and dip of a plane.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A fault is a crack with a history of sliding. Stand on a sloping fault plane: the block above your feet is the hanging wall, the block below is the footwall. How far a marker bed is offset is described by several different measurements, because “offset” depends on which direction you measure.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Net slip', def: 'The displacement connecting two formerly adjacent points now on opposite walls of the fault.' },
            { term: 'Shear sense', def: 'The relative displacement of one wall of the fault with respect to the other.' },
            { term: 'Contractional fault', def: 'A fault whose displacement shortens the layers it cuts, regardless of its orientation to horizontal.' },
            { term: 'Extensional fault', def: 'A fault whose displacement extends the layers it cuts, regardless of its orientation to horizontal.' },
            { term: 'Cutoff', def: 'The point on a map or cross-section where a fault intersects a pre-existing contact; the intersection line is the cutoff line. Hanging-wall and footwall cutoffs are named for the block containing the truncated contact.' },
            { term: 'Window', def: 'A hole eroded through a thrust sheet that exposes footwall rocks.' },
            { term: 'Klippe', def: 'An isolated remnant of a thrust sheet surrounded by footwall exposures.' },
            { term: 'Allochthon / autochthon', def: 'The thrust sheet above a detachment is the allochthon (rock that has moved from its origin); the footwall below is the autochthon (rock still in place).' },
          ],
        },
        {
          t: 'deflist',
          items: [
            { term: 'Dip separation', def: 'The distance between the two bed–fault intersection points, measured along a line parallel to the dip direction.' },
            { term: 'Throw', def: 'The vertical component of dip separation.' },
            { term: 'Heave', def: 'The horizontal component of dip separation.' },
            { term: 'Strike separation', def: 'The distance between the two bed–fault intersection points measured along the strike of the fault.' },
            { term: 'Horizontal separation', def: 'Offset measured horizontally along a line perpendicular to the offset surface.' },
            { term: 'Stratigraphic separation', def: 'Offset measured along a line perpendicular to bedding.' },
            { term: 'Vertical separation', def: 'Distance between two points on the offset bed measured vertically, as in vertical boreholes.' },
          ],
        },
        {
          t: 'deflist',
          items: [
            { term: 'Listric fault', def: 'A fault with a steep dip near the surface and a shallow dip at depth, giving a concave-up curved profile.' },
            { term: 'Fault bend', def: 'The location where the dip and/or strike of a fault abruptly changes.' },
            { term: 'Flat and ramp', def: 'Fault segments parallel to bedding are flats; segments cutting across bedding are ramps.' },
            { term: 'Restraining bend', def: 'A bend where blocks on opposite sides are squeezed together.' },
            { term: 'Releasing bend', def: 'A bend where blocks on opposite sides pull away from each other.' },
            { term: 'Transpression / transtension', def: 'Transpression: strike-slip movement with a component of compression. Transtension: strike-slip movement with a component of extension.' },
          ],
        },
      ],
      selfCheck: [
        { q: 'Which block lies above a non-vertical fault plane?', a: 'The hanging-wall block.' },
        { q: 'What are throw and heave?', a: 'The vertical and horizontal components of dip separation.' },
        { q: 'What is a klippe?', a: 'An isolated remnant of a thrust sheet surrounded by footwall rocks.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A fault whose displacement shortens the layers it cuts is:',
          options: ['Extensional', 'Contractional', 'Listric', 'Strike-slip'],
          answer: 1,
          explain: 'Contractional versus extensional is defined by shortening or extension of the cut layers, not by dip.',
        },
        {
          type: 'tf',
          prompt: 'A window exposes footwall rocks through a hole eroded in a thrust sheet.',
          answer: true,
          explain: 'A window is an erosional hole through the thrust sheet; a klippe is the isolated remnant.',
        },
        {
          type: 'short',
          prompt: 'Name the vertical component of dip separation on a fault.',
          accept: ['throw'],
          explain: 'Throw is vertical; heave is horizontal.',
        },
      ],
      cards: [
        { front: 'Hanging wall vs footwall', back: 'Hanging wall is above the fault plane; footwall is below it.' },
        { front: 'Throw vs heave', back: 'Throw: vertical component of dip separation. Heave: horizontal component.' },
        { front: 'Window vs klippe', back: 'Window: erosional hole through a thrust sheet exposing footwall. Klippe: isolated remnant of the sheet surrounded by footwall.' },
      ],
    },
    {
      id: 'fault-systems',
      title: 'Fault Systems: Normal, Thrust and Strike-Slip',
      tagline: 'Grabens, horsts, imbricate fans, duplexes and inversion',
      source: { file: 'Joints and Veins.pdf', pages: 'pp. 36–43' },
      objectives: [
        'Distinguish thin-skinned from thick-skinned systems and synthetic from antithetic faults.',
        'Describe grabens, half-grabens, horsts, imbricate fans and duplexes.',
        'Explain fault inversion and basin inversion.',
      ],
      intro: {
        what: 'A group of related faults is a fault system or fault array. Systems are classified by setting and geometry: normal-fault systems in rifts and passive margins, thrust systems in fold–thrust belts, and strike-slip systems at transform boundaries.',
        why: 'Individual faults rarely act alone. Recognising the system explains the shape of basins and mountain belts, and predicts where related faults and earthquakes are likely.',
        before: ['Normal, thrust and strike-slip fault geometry.', 'Hanging wall and footwall.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Faults come in families. In extension, two faults leaning toward each other drop a block between them (a graben); two leaning away leave a high block (a horst). In compression, stacked thrusts form an imbricate fan, and a duplex is the package between a roof thrust and a floor thrust.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Thin-skinned system', def: 'Normal or thrust faults that merge with a detachment in sedimentary rocks at shallow depth, typically 10–15 km.' },
            { term: 'Thick-skinned system', def: 'A fault system involving deeper crustal rocks, including basement.' },
            { term: 'Synthetic fault', def: 'A subsidiary fault whose dip is parallel to that of the major faults.' },
            { term: 'Antithetic fault', def: 'A subsidiary fault whose dip is opposite to that of the major faults.' },
            { term: 'Graben', def: 'A down-dropped block bounded by adjacent normal faults that dip toward one another.' },
            { term: 'Half-graben', def: 'A structure bounded by a fault on only one side, unlike a full graben bounded by parallel faults.' },
            { term: 'Horst', def: 'A relatively high footwall block between two normal faults that dip away from one another.' },
            { term: 'Imbricate fan', def: 'Thrusts that either intersect the ground surface or die out up-dip.' },
            { term: 'Duplex', def: 'Thrusts spanning the rock interval between a higher roof thrust and a lower floor thrust.' },
            { term: 'Fault inversion', def: 'Reversal of displacement on a fault or fault system, for example when extensional border faults are reactivated as thrusts or strike-slip faults under later compression.' },
            { term: 'Basin inversion', def: 'Inversion that results in contraction of a previously formed basin.' },
          ],
        },
        {
          t: 'p',
          text: 'Regional normal fault systems form in rifts — belts where the lithosphere is extending — along passive margins that are no longer plate margins, and along mid-ocean ridges. Thrusting commonly accompanies folding, producing fold–thrust belts. Strike-slip systems occur at transform boundaries, within plates and as components of convergent orogens.',
        },
      ],
      selfCheck: [
        { q: 'What is a synthetic fault?', a: 'A subsidiary fault whose dip is parallel to the major faults.' },
        { q: 'What bounds a duplex?', a: 'A roof thrust above and a floor thrust below.' },
        { q: 'What is basin inversion?', a: 'Fault inversion that contracts a previously formed basin.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Two normal faults dipping toward each other produce a:', 
          options: ['Horst', 'Graben', 'Duplex', 'Klippe'],
          answer: 1,
          explain: 'The block between them drops, forming a graben; faults dipping apart form a horst.',
        },
        {
          type: 'tf',
          prompt: 'A thin-skinned fault system merges with a detachment at shallow depth.',
          answer: true,
          explain: 'Thin-skinned systems detach within sedimentary cover, typically at 10–15 km.',
        },
        {
          type: 'short',
          prompt: 'Name the fault system component consisting of thrusts between a roof and a floor thrust.',
          accept: ['duplex'],
          explain: 'A duplex is bounded by a roof thrust and a floor thrust.',
        },
      ],
      cards: [
        { front: 'Synthetic vs antithetic', back: 'Synthetic faults dip parallel to the major faults; antithetic faults dip in the opposite direction.' },
        { front: 'Graben vs horst', back: 'Graben: down-dropped block between faults dipping toward each other. Horst: high block between faults dipping apart.' },
        { front: 'Thin- vs thick-skinned', back: 'Thin-skinned detaches within sedimentary cover at 10–15 km; thick-skinned involves basement.' },
      ],
    },
  ],
}
