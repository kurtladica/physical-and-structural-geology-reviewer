export type SourcePdf = {
  file: string
  title: string
  author: string | null
  institution: string | null
  year: string | null
  pages: string
  usedFor: string
  notes: string[]
}

export const sourcePdfs: SourcePdf[] = [
  {
    file: 'Ch 1 - Introduction to Geology.pdf',
    title: 'Introduction to Geology (GS 21/L)',
    author: 'Engr. Karl Patrick B. Garcia (named on slide 1)',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '15 slides, used pp. 2–13',
    usedFor: 'Definition of geology, branches, physical vs historical geology, catastrophism and uniformitarianism.',
    notes: [
      'Slide 3 (“Branches of Geology”) is a section divider with no extractable explanatory text.',
      'Reference slide names Tarbuck et al. (2014) as the primary syllabus text and Plummer et al. (2015) as a supplementary text.',
    ],
  },
  {
    file: 'Ch 2 - The Planet Earth.pdf',
    title: 'The Planet Earth (GS 21/L)',
    author: 'Engr. Karl Patrick B. Garcia (named on slide 1)',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '22 slides, used pp. 2–20',
    usedFor: 'Four spheres, origins, size and shape, internal layers, isostasy.',
    notes: [
      'Slide 3 is a title divider (“Earth’s Major Spheres”); the sphere content is on slide 4.',
      'The equatorial-bulge diagram is an image; its labels (6,378 km, 6,357 km, 21 km) are stated in the slide text and were reproduced.',
    ],
  },
  {
    file: 'Chapter 3 Plate Tectonics.pdf',
    title: 'Chapter 3: Plate Tectonics (Physical and Structural Geology GS 21/L)',
    author: 'Engr. Karl Patrick B. Garcia (named on slide 1)',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '24 slides, used pp. 2–23',
    usedFor: 'Plate theory, boundary types, drift, seafloor spreading, driving forces and Philippine tectonics.',
    notes: [
      'The boundary-summary table on slide 5 was text-extracted and reproduced.',
      'Reference slide lists Tarbuck et al. (2014), Aurelio (1992), Gervasio (1967), Willis (1937) and MGB (2010).',
    ],
  },
  {
    file: 'CH 4 Historical Geology.pdf',
    title: 'Historical Geology (Physical and Structural Geology GS 21/L)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '20 slides, used pp. 3–20',
    usedFor: 'Relative and absolute dating, unconformities, fossils, geologic time scale.',
    notes: [
      'Table 4.1 (isotopes used in radiometric dating) is an image and was not text-extracted; only carbon-14 data (5,730-year half-life, ~70,000-year limit) is given in the slide text.',
      'Figure 4.11 (the full geologic time scale) is an image; the website presents a simplified scale based on the slide text and names the figure as the full reference.',
      'The petroleum-reserve chart on slide 20 is an image; its labels were read by rendering the page, and the lesson mentions the distribution qualitatively.',
    ],
  },
  {
    file: 'GS 21L 5 Minerals and Rock Cycle.pdf',
    title: 'Module 5: Minerals and Rock Cycle (GS 21/L Physical and Structural Geology)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '26 slides, used pp. 3–25',
    usedFor: 'Minerals, formation, physical properties, silicates, nonsilicates, rocks and the rock cycle.',
    notes: [
      'Table 5.1 (nonsilicate groups) is an image; it was read by rendering the slide, and its formulas and uses are reproduced.',
      'The eight-element abundance pie chart is an image; its percentages were read by rendering the slide.',
      'Figures 5.5–5.18 are photographs and diagrams; their content is described rather than copied.',
    ],
  },
  {
    file: 'GS 21L 6 Igneous Rocks.pdf',
    title: 'Igneous Rocks (GS 21/L)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '14 slides, used pp. 3–13',
    usedFor: 'Magma, crystallization, intrusive/extrusive settings, composition, classification and textures.',
    notes: [
      'Figures 6.1–6.5 are image-based (rock photos and classification charts); the classification principles are stated in the slide text and are reproduced.',
      'The exact mineral-percentage chart (Fig. 6.3) is an image and was not used to add numbers beyond the slide text.',
    ],
  },
  {
    file: 'GS 21L 7 Volcanism.pdf',
    title: 'Module 7: Volcanism (GS 21/L Physical and Structural Geology)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '21 slides, used pp. 3–20',
    usedFor: 'Volcanism, eruption mechanisms, magmatic and phreatomagmatic styles, hazards.',
    notes: [
      'Slide 20 (“volcanic hazards … in many other ways”) is an image-only slide; the specific list could not be extracted. The lesson names common additional hazards and flags this gap.',
      'Photographs on slides 12, 17 and 19 were not reproduced; captions and text content were used.',
    ],
  },
  {
    file: 'GS 21L 8 Sedimentary Rocks.pdf',
    title: 'Sedimentary Rocks (GS 21/L)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '24 slides, used pp. 3–23',
    usedFor: 'Formation, detrital/chemical/organic classification, coal, structures and resources.',
    notes: [
      'Figures 8.1–8.11 are photographs and identification charts; the criteria are in the slide text and are reproduced.',
      'The resources table on slide 23 was text-extracted and reproduced.',
    ],
  },
  {
    file: '08Geoscie11_METAMORPHIC ROCKS.pdf',
    title: 'Metamorphic Rocks (GS 21)',
    author: 'Not named in the file — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '22 slides, used pp. 3–21',
    usedFor: 'Metamorphism, drivers, textures, classification table, environments.',
    notes: [
      'Slide 14 (Table 15.1) is an image; it was read by rendering the page, and its classification rows are reproduced.',
      'Slide 15 (metamorphic grade cross-section and index minerals) is an image; it was read by rendering the page.',
      'Slide 22 is blank, and the outline’s “resources from metamorphic rocks” section has no content in the file — flagged as missing, not invented.',
    ],
  },
  {
    file: 'GS 21L 9 Groundwater.pdf',
    title: 'Chapter 9: Groundwater (GS 21/L Physical and Structural Geology)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '19 slides, used pp. 3–18',
    usedFor: 'Groundwater zones, water table, stream interaction, Darcy’s law, wells, artesian systems, springs, karst.',
    notes: [
      'Figures 9.1–9.6 are diagrams and photos; the diagram content is described from the slide captions and reproduced as original schematic diagrams.',
      'Darcy’s equation appears as an image in the slide; the standard form Q = K·A·(h₁ − h₂)/d is used and labelled as the equation introduced by Henry Darcy.',
    ],
  },
  {
    file: 'GS 21L 10 Mass Wasting.pdf',
    title: 'Module 10: Mass Wasting (GS 21/L)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '19 slides, used pp. 2–18',
    usedFor: 'Mass wasting, triggers, classification, creep/landslides, mitigation.',
    notes: [
      'Figures 10.1–10.6 are photographs; their subjects and captions are described, not reproduced.',
    ],
  },
  {
    file: 'List of Geologically Important Elements and the Periodic Table.pdf',
    title: 'List of Geologically Important Elements and the Periodic Table',
    author: 'Not named in the file — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '2 pages, used pp. 1–2',
    usedFor: 'Appendix reference table of 36 elements and the periodic table.',
    notes: [
      'The 36-element table is split across pages 1–2 as an image; it was read by rendering the pages and is reproduced in full.',
      'The periodic table on page 2 is an image; it is described rather than reproduced.',
    ],
  },
  {
    file: 'Brittle Structures.pdf',
    title: 'Brittle Structures (Structural Geology)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '18 slides, used pp. 2–18',
    usedFor: 'Brittle deformation, fracture vocabulary, Griffith cracks, hydraulic fracturing, crack modes, brittle faulting and frictional sliding.',
    notes: [
      'Slides 6–7, 9, 12, 15–16 are image-led; their captions and the explanatory text were used, and the figures are described rather than copied.',
      'The definitions of brittle structures are reproduced closely because the module is largely a glossary.',
    ],
  },
  {
    file: 'DUCTILE STRUCTURES.pdf',
    title: 'Ductile Structures (Structural Geology)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '8 slides, used pp. 2–8',
    usedFor: 'The three ductile mechanisms, cataclastic flow, and point, line and planar crystal defects.',
    notes: [
      'The module ends mid-topic on crystal defects (slide 8 has no readable text), so the lesson covers only the defect types that are stated.',
      'Diffusional mass transfer is named in the source but not expanded; the lesson explains it in standard terms and labels it as such.',
    ],
  },
  {
    file: 'FOLDS AND FOLDING.pdf',
    title: 'Folds and Folding (Structural Geology)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '34 slides, used pp. 2–34',
    usedFor: 'Fold anatomy, facing, orientation, profile shape, special geometries and fold mechanics.',
    notes: [
      'Several slides (9, 16, 24, 31) are diagram-only; the geometry is explained from the accompanying slide text.',
      'The interlimb-angle ranges and orientation limits are reproduced exactly as stated in the file.',
    ],
  },
  {
    file: 'Joints and Veins.pdf',
    title: 'Joints and Veins (Structural Geology)',
    author: 'Not named in the extracted text — needs confirmation',
    institution: 'Not stated in the file — needs confirmation',
    year: 'Not stated in the file — needs confirmation',
    pages: '44 slides, used pp. 2–43',
    usedFor: 'Joints and joint arrays, joint origins, veins and vein arrays, fault geometry and fault systems.',
    notes: [
      'Slide 44 is blank, and several figure slides are image-only; the text definitions were used and the figures described.',
      'The fault and separation terminology is reproduced from the slide text without adding numerical examples.',
    ],
  },
]

export const citedSources = [
  'Tarbuck, E.J., Lutgens, F.K., and Tasa, D.G. (2014). Earth: An Introduction to Physical Geology (11th ed.). Pearson Education, Inc., USA.',
  'Plummer, C.C., Carlson, D.H., and Hammersley, L. (2015). Physical Geology (15th ed.). McGraw-Hill Education.',
  'Lowrie, W. (2007). Fundamentals of Geophysics (2nd ed.). Cambridge University Press. (Cited for seismology and isostasy expansions.)',
  'Torge, W., & Müller, J. (2012). Geodesy (4th ed.). De Gruyter. (Cited for the reference ellipsoid and Hayford–Bowie concepts.)',
  'Aurelio, M.A. (1992). The Philippine Fault in the Late Cenozoic tectonic evolution of the Bondoc–Masbate–N. Leyte area, Central Philippines. Journal of Southeast Asian Earth Sciences.',
  'Gervasio, F.C. (1967). Age and nature of orogenesis of the Philippines. Tectonophysics, 4(4–6), 379–402.',
  'Willis, B. (1937). Geologic Observations in the Philippine Archipelago. National Research Council of the Philippines Bulletin, 13.',
  'Mines and Geosciences Bureau (MGB). (2010). Geology of the Philippines (2nd Edition). Department of Environment and Natural Resources.',
  'Encyclopaedia Britannica. “Volcanism.” https://www.britannica.com/science/volcanism (definition quoted in the Volcanism module).',
]

export const creditNotice =
  'Learning material adapted from the GS 21/L Physical and Structural Geology lesson PDFs listed above. All original educational content and intellectual contributions belong to their respective owners and authors. This website is an independent learning aid and does not claim ownership of the source materials.'
