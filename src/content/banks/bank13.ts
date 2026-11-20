import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'brittle-deformation'
const b = 'griffith-cracks'
const c = 'brittle-faulting'

export const bank13: BankQuestion[] = [
  m(a, 'Brittle deformation is permanent change caused by:', ['Fracture growth and/or sliding on fractures', 'Diffusion of atoms', 'Melting', 'Folding without fracturing'], 0, 'Brittle deformation is defined by fractures and slip on them.'),
  m(a, 'Brittle deformation begins when:', ['Stress exceeds a critical value', 'Any stress is applied', 'The rock melts', 'Temperature rises'], 0, 'A critical stress must be exceeded, after elastic and possibly plastic strain.'),
  m(a, 'A fracture is best defined as:', ['A surface across which continuity and strength are lost', 'Any mineral-filled cavity', 'A fold hinge', 'A crystal defect'], 0, 'Fractures lose continuity, and therefore strength.'),
  m(a, 'A joint differs from a fault because a joint:', ['Has no appreciable shear displacement', 'Is always mineral-filled', 'Is always microscopic', 'Forms only in sediment'], 0, 'Joints open slightly but do not show measurable sliding.'),
  m(a, 'A vein is:', ['A fracture filled with precipitated minerals', 'A fault with large slip', 'A ductile shear zone', 'A type of fold'], 0, 'Minerals precipitate from water solutions in the fracture.'),
  m(a, 'A brittle fault zone is:', ['A band where slip is distributed among many small faults and/or fractured rock', 'A single mineral vein', 'A fold limb', 'A crystal defect'], 0, 'Fault zones distribute slip across a finite width.'),
  m(a, 'Cataclasis involves:', ['Fracturing, crushing and frictional sliding', 'Melting and refreezing', 'Diffusion only', 'Ductile folding without fractures'], 0, 'Cataclasis is the brittle grinding process.'),
  m(a, 'A shear fracture grows with:', ['A component of shear parallel to the fracture', 'Only opening perpendicular to the fracture', 'No displacement', 'Only dissolution'], 0, 'Shear fractures grow by coalescence of microcracks under shear.'),
  m(a, 'A shear zone is characterised by:', ['Ductile shear strain greater than the surrounding rock', 'A single brittle surface', 'Mineral-filled cavities only', 'No deformation'], 0, 'Shear zones accommodate ductile shear across a band.'),
  m(a, 'The fracture trace is:', ['The line where the fracture meets the rock surface', 'The end of the fracture', 'The boundary of fractured rock', 'The fault plane'], 0, 'The trace is the surface intersection line.'),
  m(a, 'The fracture front separates:', ['Fractured rock from unfractured rock', 'Two fault blocks', 'Two mineral types', 'Two fold limbs'], 0, 'It is the boundary of the fractured region.'),
  m(a, 'The fracture tip is:', ['The point where the fracture trace ends on the surface', 'The widest part of the fracture', 'The centre of the fault', 'The mineral filling'], 0, 'The tip is the termination of the trace.'),
  t(a, 'Brittle deformation is recoverable.', false, 'It is permanent; elastic deformation is the recoverable part.'),
  t(a, 'A fracture can be as small as a grain boundary or as large as a continent-scale structure.', true, 'The term spans many scales.'),
  t(a, 'A shear joint began as a joint and later carried sliding.', true, 'That is the lesson’s definition.'),
  t(a, 'Brittle structures form only at the surface.', false, 'They form wherever conditions favour brittle failure, including at depth.'),
  s(a, 'Name a fracture with no appreciable shear displacement.', ['joint'], 'Joints open slightly without shear.'),
  s(a, 'Name the structure formed when minerals fill a fracture.', ['vein'], 'A mineral-filled fracture is a vein.'),

  m(b, 'Griffith proposed that materials contain:', ['Pre-existing microcracks and flaws', 'No internal defects', 'Only liquid inclusions', 'Uniform stress everywhere'], 0, 'Pre-existing flaws concentrate stress at their tips.'),
  m(b, 'Stress concentration at a crack tip causes:', ['Crack propagation at relatively low remote stress', 'The crack to heal', 'The rock to melt', 'Stress to vanish'], 0, 'Local amplification lets cracks grow under modest remote stress.'),
  m(b, 'A Griffith crack includes:', ['Grain-scale fractures, pores and grain boundaries', 'Only faults', 'Only veins', 'Only folds'], 0, 'Any pre-existing flaw can act as a Griffith crack.'),
  m(b, 'Hydraulic fracturing works because fluid pressure:', ['Creates local tensile stress at crack tips', 'Heats the rock', 'Dissolves the rock', 'Reduces porosity'], 0, 'Outward fluid pressure drives crack propagation.'),
  m(b, 'Mode I displacement is:', ['Opening perpendicular to the crack surface', 'Sliding perpendicular to the front', 'Tearing parallel to the front', 'No movement'], 0, 'Mode I is the opening mode.'),
  m(b, 'Mode II displacement is:', ['Sliding parallel to the surface and perpendicular to the front', 'Opening', 'Tearing', 'Rotation'], 0, 'Mode II is the in-plane sliding mode.'),
  m(b, 'Mode III displacement is:', ['Sliding parallel to the crack front', 'Opening', 'Sliding perpendicular to the front', 'Compaction'], 0, 'Mode III is the tearing mode.'),
  m(b, 'Which mode describes a fracture whose walls move apart?', ['Mode I', 'Mode II', 'Mode III', 'None'], 0, 'Opening is Mode I.'),
  t(b, 'Griffith cracks explain why rock strength is lower than the theoretical strength of a perfect crystal.', true, 'Flaws concentrate stress and allow early failure.'),
  t(b, 'Hydraulic fracturing requires the rock to melt.', false, 'It is a brittle process driven by fluid pressure.'),
  t(b, 'A single fracture can show mixed-mode displacement.', true, 'Opening and sliding components can combine.'),
  s(b, 'Name the displacement mode in which the crack walls move apart.', ['mode i', 'mode 1', 'opening mode'], 'Mode I is opening.'),
  s(b, 'Name the English engineer who proposed that pre-existing flaws control fracture.', ['griffith', 'a w griffith'], 'A. W. Griffith proposed the flaw theory.'),

  m(c, 'A brittle fault is a surface on which:', ['Measurable slip developed without much plastic deformation', 'No movement occurred', 'Minerals precipitated', 'Folding occurred'], 0, 'Brittle faults accommodate slip by brittle mechanisms.'),
  m(c, 'One way to create a brittle fault is:', ['Shear rupture of intact rock', 'Melting the rock', 'Dissolving the rock', 'Cooling the rock only'], 0, 'Intact rock can rupture in shear.'),
  m(c, 'The other basic way to create a brittle fault is:', ['Reactivation of a pre-existing weak surface', 'Crystallisation of magma', 'Deposition of sediment', 'Metamorphism'], 0, 'Joints, bedding and older faults can be reactivated.'),
  m(c, 'Fault-parallel veins record:', ['Incremental slip by mineral growth in opening fractures', 'Melting of the fault', 'Fold hinges', 'Crystal defects'], 0, 'Minerals fill fractures aligned with the fault as it slips.'),
  m(c, 'A tensile cracking criterion predicts:', ['The stress state at which a crack begins to propagate', 'The age of a fault', 'The mineralogy of a vein', 'The dip of bedding'], 0, 'It is a mathematical propagation criterion.'),
  m(c, 'A shear-fracture criterion describes:', ['The stress state at which a shear rupture separates a sample', 'The colour of cataclasite', 'The rate of diffusion', 'The fold axis'], 0, 'It predicts shear failure.'),
  m(c, 'Frictional sliding begins when:', ['Shear stress exceeds frictional resistance', 'Normal stress is zero', 'The rock melts', 'Fluid pressure disappears'], 0, 'Sliding requires overcoming friction.'),
  m(c, 'Cataclastic flow is:', ['Ductile behaviour at sample scale from microscopic brittle processes', 'Melting', 'Diffusion creep', 'Elastic rebound'], 0, 'Distributed micro-fracturing lets the mass deform coherently.'),
  t(c, 'Reactivating an old joint requires less stress than rupturing intact rock.', true, 'A pre-existing weakness needs only frictional resistance to be overcome.'),
  t(c, 'Fault-surface veins form after the fault stops moving.', false, 'They grow during slip, recording incremental movement.'),
  t(c, 'Cataclasis produces fragmented rock and rock flour along faults.', true, 'Crushing and frictional sliding generate cataclastic material.'),
  t(c, 'A brittle fault requires plastic deformation to dominate.', false, 'It develops without much contribution from plastic mechanisms.'),
  s(c, 'Name the process of distributed fracturing and frictional sliding near faults.', ['cataclasis'], 'Cataclasis is the brittle grinding process.'),
  s(c, 'Name the resistance that must be overcome for sliding on a surface.', ['friction', 'frictional resistance'], 'Sliding occurs when shear stress exceeds frictional resistance.'),
]
