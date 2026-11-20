import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'relative-dating'
const b = 'unconformities'
const c = 'fossils'
const d = 'absolute-dating'
const e = 'time-scale'

export const bank4: BankQuestion[] = [
  m(a, 'Relative dating places rocks in order of age:', ['Without assigning ages in years', 'Using radiometric isotopes only', 'By measuring magnetic fields', 'By chemical analysis only'], 0, 'Relative dating establishes sequence, not numerical age.'),
  m(a, 'The principle of superposition states that in an undeformed sedimentary sequence:', ['Older beds lie below younger beds', 'Younger beds lie below older beds', 'All beds are the same age', 'Beds alternate in age'], 0, 'Each bed is younger than the one below it.'),
  m(a, 'Original horizontality means that:', ['Sediments are deposited in horizontal layers, so tilted strata were disturbed later', 'All rocks are horizontal forever', 'Folds form during deposition', 'Erosion only acts on flat land'], 0, 'Tilt or folding indicates later crustal disturbance.'),
  m(a, 'Lateral continuity implies that a sedimentary bed:', ['Extends until it thins or grades into another sediment', 'Exists only at one outcrop', 'Is always vertical', 'Has no fossils'], 0, 'Beds originally spread out continuously in all directions.'),
  m(a, 'A fault cutting a sedimentary layer is:', ['Younger than the layer', 'Older than the layer', 'The same age', 'Impossible to date'], 0, 'Cross-cutting features form after the rocks they cut.'),
  m(a, 'An igneous intrusion is younger than:', ['The rocks it cuts', 'The fossils inside it only', 'The soil above it only', 'Nothing'], 0, 'The magma must have intruded after the host rocks existed.'),
  m(a, 'Inclusions are fragments of one rock enclosed in another. The host rock is:', ['Younger than the inclusions', 'Older than the inclusions', 'The same age', 'Always metamorphic'], 0, 'The inclusions had to exist before the rock that contains them formed.'),
  m(a, 'Which principle would you use to decide that a granite is younger than the schist it cuts?', ['Superposition', 'Cross-cutting relationships', 'Lateral continuity', 'Original horizontality'], 1, 'The intrusion cuts the schist, so it must be younger.'),
  t(a, 'Relative dating can tell you that one rock is older than another without knowing either age in years.', true, 'That is exactly what relative dating does.'),
  t(a, 'In a folded sequence, the oldest bed is always at the top.', false, 'Folding can overturn beds; superposition applies to undeformed sequences.'),
  s(a, 'Name the principle that a fault is younger than the rocks it displaces.', ['cross cutting relationships', 'cross-cutting relationships', 'cross cutting'], 'Cross-cutting relationships establish relative age.'),

  m(b, 'An unconformity represents:', ['A gap in the rock record caused by erosion or non-deposition', 'A type of fault', 'A mineral deposit', 'A fossil assemblage'], 0, 'It marks missing time between rock units.'),
  m(b, 'An angular unconformity is recognised by:', ['Tilted or folded beds beneath flat-lying younger beds', 'Parallel beds on both sides', 'Sedimentary rock over granite', 'A fault surface'], 0, 'The angular discordance records deformation and erosion before renewed deposition.'),
  m(b, 'A disconformity is recognised by:', ['An erosion surface between essentially parallel beds', 'Tilted beds below flat beds', 'Igneous rock below limestone', 'A folded sequence'], 0, 'The beds are parallel but time is missing at the erosion surface.'),
  m(b, 'A nonconformity occurs where:', ['Sedimentary strata overlie older metamorphic or intrusive igneous rock', 'Two sedimentary units are parallel', 'Beds are tilted', 'A fault cuts all units'], 0, 'The buried surface was once exposed at depth before sediments covered it.'),
  m(b, 'An angular unconformity tells you that which events occurred?', ['Deposition, then deformation, then erosion, then renewed deposition', 'Only deposition', 'Only erosion', 'Only metamorphism'], 0, 'The geometry records a full sequence of events.'),
  m(b, 'Unconformities are useful because they:', ['Mark time gaps and tectonic events', 'Prove the rock is young', 'Contain no information', 'Prevent dating'], 0, 'They record uplift, erosion and changes in deposition.'),
  m(b, 'Which unconformity implies the greatest missing history at a single surface?', ['One developed on deeply eroded metamorphic basement', 'A thin disconformity', 'A bedding plane', 'A joint'], 0, 'A nonconformity on basement can represent a very long interval of uplift and erosion.'),
  t(b, 'A disconformity has parallel beds above and below the erosion surface.', true, 'Parallelism distinguishes it from an angular unconformity.'),
  t(b, 'An unconformity means deposition was continuous.', false, 'It means deposition stopped and erosion or non-deposition occurred.'),
  s(b, 'Name the unconformity where tilted beds lie below flat-lying beds.', ['angular unconformity'], 'The angular discordance defines it.'),

  m(c, 'A fossil is:', ['Any evidence of past life preserved in rock', 'Any mineral crystal', 'A type of sedimentary structure', 'A radioactive isotope'], 0, 'Fossils include body remains and traces of activity.'),
  m(c, 'Permineralization occurs when:', ['Mineral-rich water fills pores in bone or wood', 'A shell dissolves completely', 'An organism is frozen', 'A footprint is pressed into mud'], 0, 'Minerals precipitate in the pore spaces of porous tissue.'),
  m(c, 'A mold is:', ['A cavity left when a buried shell dissolves', 'A mineral-filled cavity', 'A carbon film', 'Fossil dung'], 0, 'The cavity preserves the shape; a cast forms if it is later filled.'),
  m(c, 'A cast forms when:', ['A mold is filled with sediment or mineral matter', 'A shell dissolves', 'Wood is replaced by silica', 'An insect is trapped in amber'], 0, 'The fill reproduces the original shape.'),
  m(c, 'Carbonization preserves an organism as:', ['A thin carbon film', 'A mineral cast', 'A trace fossil', 'Amber'], 0, 'Fine sediment can leave a carbon film of the organism.'),
  m(c, 'Insects are exceptionally preserved in:', ['Amber', 'Limestone only', 'Basalt', 'Slate'], 0, 'Hardened tree resin can entomb organisms.'),
  m(c, 'Coprolites are:', ['Fossil dung', 'Fossil footprints', 'Stomach stones', 'Burrows'], 0, 'Coprolites are trace fossils of excrement.'),
  m(c, 'Gastroliths are:', ['Stomach stones', 'Fossil eggs', 'Carbon films', 'Molds'], 0, 'Gastroliths are swallowed stones, a type of trace fossil.'),
  m(c, 'Which fossil type records behaviour rather than the body?', ['Trace fossil', 'Cast', 'Mold', 'Permineralized bone'], 0, 'Tracks, burrows and dung record activity.'),
  t(c, 'Fossils can indicate both relative age and past environment.', true, 'Species ranges give age; habits give environment.'),
  t(c, 'Every organism that ever lived becomes a fossil.', false, 'Fossilization is rare and requires specific conditions.'),
  s(c, 'Name the fossil type formed by tracks, burrows or dung.', ['trace fossil', 'trace fossils'], 'Trace fossils record activity, not body parts.'),

  m(d, 'Absolute dating gives:', ['A numerical age in years', 'Only a sequence of events', 'A rock’s colour', 'A mineral’s hardness'], 0, 'Absolute (numerical) dating assigns ages in years.'),
  m(d, 'A half-life is the time needed for:', ['Half of the parent atoms to decay', 'All parent atoms to decay', 'The rock to melt', 'A fossil to form'], 0, 'Half of the radioactive parent remains after one half-life.'),
  m(d, 'In alpha decay, the mass number:', ['Decreases by 4', 'Increases by 4', 'Stays the same', 'Decreases by 1'], 0, 'An alpha particle carries off 2 protons and 2 neutrons.'),
  m(d, 'In alpha decay, the atomic number:', ['Decreases by 2', 'Increases by 2', 'Stays the same', 'Increases by 4'], 0, 'Loss of two protons lowers the atomic number by two.'),
  m(d, 'In beta decay, the atomic number:', ['Increases by 1', 'Decreases by 1', 'Stays the same', 'Decreases by 2'], 0, 'A neutron becomes a proton, so the atomic number rises by one.'),
  m(d, 'In beta decay, the mass number:', ['Stays the same', 'Decreases by 4', 'Increases by 4', 'Decreases by 1'], 0, 'The total number of nucleons is unchanged.'),
  m(d, 'Electron capture causes the atomic number to:', ['Decrease by 1', 'Increase by 1', 'Stay the same', 'Decrease by 2'], 0, 'A proton becomes a neutron, lowering the atomic number.'),
  m(d, 'Radiocarbon dating is limited because:', ['Carbon-14 decays quickly and only organic remains retain it', 'Carbon never decays', 'It works only on basalt', 'It dates only the future'], 0, 'Its short half-life restricts it to relatively recent organic material.'),
  t(d, 'Radiometric dating relies on the constant decay rates of isotopes.', true, 'Known decay rates let the parent–daughter ratio be converted into an age.'),
  t(d, 'A rock with more daughter atoms than parent atoms is generally older than one with mostly parent atoms.', true, 'More decay has occurred, so more time has passed.'),
  s(d, 'Name the time required for half of a radioactive parent to decay.', ['half life', 'half-life'], 'The half-life is the decay interval.'),

  m(e, 'The geologic time scale arranges Earth history into:', ['Eons, eras, periods and epochs', 'Continents and oceans', 'Rock types', 'Mineral classes'], 0, 'That is the hierarchy of the time scale.'),
  m(e, 'Which is the largest division of the geologic time scale?', ['Eon', 'Era', 'Period', 'Epoch'], 0, 'Eons contain eras, which contain periods, which contain epochs.'),
  m(e, 'The Phanerozoic is an example of:', ['An eon', 'An era', 'A period', 'An epoch'], 0, 'The Phanerozoic is the eon of visible life.'),
  m(e, 'The geologic time scale was originally built mainly from:', ['Relative dating of rocks and fossils', 'GPS measurements', 'Satellite images', 'Ocean currents'], 0, 'Relative ages came first; numerical dates were added later.'),
  m(e, 'Numerical dates were added to the time scale by:', ['Radiometric dating of rocks', 'Counting tree rings', 'Measuring tides', 'Studying weather'], 0, 'Isotopic ages anchored the relative divisions.'),
  m(e, 'Earth’s age is about:', ['4.6 billion years', '4.6 million years', '13.7 billion years', '540 million years'], 0, 'Earth formed about 4.6 billion years ago.'),
  t(e, 'Periods are longer divisions than eras.', false, 'Eras contain periods, so periods are shorter.'),
  t(e, 'The geologic time scale is fixed and never revised.', false, 'Boundaries and dates are refined as evidence improves.'),
  t(e, 'The time scale combines relative order with numerical ages.', true, 'Relative divisions are calibrated with radiometric dates.'),
  s(e, 'Name the largest unit of the geologic time scale.', ['eon'], 'Eons are the largest divisions.'),
]
