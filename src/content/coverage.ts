export type CoverageNote = {
  file: string
  pages: string
  issue: string
  action: string
}

/**
 * These are the pages where the supplied PDF does not contain machine-readable
 * text, or where a topic promised by the slides is incomplete. They are listed
 * for transparency rather than filled with invented content.
 */
export const coverageNotes: CoverageNote[] = [
  {
    file: 'Ch 1 - Introduction to Geology.pdf',
    pages: 'p. 3',
    issue: 'Section divider titled “Branches of Geology”; the branch descriptions begin on p. 4.',
    action: 'All seven branches are covered from pp. 4–6.',
  },
  {
    file: 'CH 4 Historical Geology.pdf',
    pages: 'p. 16 (Table 4.1); p. 19 (Fig. 4.11)',
    issue: 'The isotope table and the full time-scale chart are images. Only carbon-14 figures appear in the slide text.',
    action: 'Carbon-14 is covered in detail; other isotope systems are named as methods without inventing half-lives. The time scale is presented as a simplified overview.',
  },
  {
    file: 'GS 21L 5 Minerals and Rock Cycle.pdf',
    pages: 'pp. 10, 12–13, 19–22',
    issue: 'Mineral photographs and charts (crystal habit, hardness, common silicates) are images.',
    action: 'Table 5.1 and the eight-element abundances were recovered by rendering the slides; habit and hardness are explained from the slide text. Mohs numbers were not invented.',
  },
  {
    file: 'GS 21L 6 Igneous Rocks.pdf',
    pages: 'pp. 8, 10, 12–13',
    issue: 'Figures 6.2–6.5 are image-based classification charts and rock photographs.',
    action: 'Classification principles and composition percentages are reproduced from the slide text; the charts are described rather than copied.',
  },
  {
    file: 'GS 21L 7 Volcanism.pdf',
    pages: 'p. 20',
    issue: 'The slide “volcanic hazards … in many other ways” is image-only; the list of additional hazards is not extractable.',
    action: 'Pyroclastic flows and lahars are covered in full. Common additional hazards are named as examples and this gap is disclosed.',
  },
  {
    file: 'GS 21L 8 Sedimentary Rocks.pdf',
    pages: 'pp. 4, 12, 16, 19, 21',
    issue: 'Rock-cycle outline, sorting/shape figure, cave and coquina photos, coal-stage photos, and the identification chart are images.',
    action: 'All data stated in the slide text is covered, including the resources table (p. 23) and the coal stages (p. 20).',
  },
  {
    file: '08Geoscie11_METAMORPHIC ROCKS.pdf',
    pages: 'pp. 14–15, 22',
    issue: 'Table 15.1 and the grade/index-mineral chart are images; p. 22 is blank. The outline promises “resources from metamorphic rocks”, but no slide content exists.',
    action: 'The classification table and grade chart were recovered by rendering. The missing resources subtopic is flagged, not invented.',
  },
  {
    file: 'GS 21L 9 Groundwater.pdf',
    pages: 'pp. 5–6, 9–10, 12, 15, 17',
    issue: 'Water-table, stream-interaction, Darcy, flow-system, cone-of-depression, artesian and geyser figures are images.',
    action: 'Each concept is explained from the slide text and redrawn as an original schematic; the Darcy equation is presented in standard form.',
  },
  {
    file: 'GS 21L 10 Mass Wasting.pdf',
    pages: 'pp. 4, 6–7, 11, 14, 19',
    issue: 'Photographs and diagrams are image-based.',
    action: 'Triggers, classification and mitigation are covered from the slide text, with original diagrams.',
  },
  {
    file: 'List of Geologically Important Elements and the Periodic Table.pdf',
    pages: 'pp. 1–2',
    issue: 'Both the 36-element table and the periodic table are images.',
    action: 'The full 36-element table was read by rendering the pages and is reproduced; the periodic table is described.',
  },
  {
    file: 'Brittle Structures.pdf',
    pages: 'pp. 6–7, 9, 12, 15–16',
    issue: 'The mechanics diagrams are image-based; the crack-mode and cataclasis figures have no extractable labels.',
    action: 'Crack modes, cataclasis and frictional sliding are explained from the slide text; no numeric values were invented.',
  },
  {
    file: 'DUCTILE STRUCTURES.pdf',
    pages: 'p. 8',
    issue: 'The final slide has no readable text, so the crystal-defect treatment ends with dislocations.',
    action: 'Only the defect types stated in the module are taught; the lesson notes the limit of the source.',
  },
  {
    file: 'FOLDS AND FOLDING.pdf',
    pages: 'pp. 9, 16, 24, 31',
    issue: 'Several fold-geometry and fold–thrust illustrations are image-only.',
    action: 'All stated angle ranges, orientation classes and geometry definitions are reproduced; diagrams are described rather than copied.',
  },
  {
    file: 'Joints and Veins.pdf',
    pages: 'pp. 7, 21–22, 24–25, 29, 37, 39, 44',
    issue: 'Joint-surface, vein-array and fault-system figures are image-based; p. 44 is blank.',
    action: 'Terminology and geometric relationships are covered from the slide text; no unseen data was added.',
  },
]

export const coverageSummary = {
  pdfs: 16,
  pages: 332,
  topics: 0,
  complete: true,
}
