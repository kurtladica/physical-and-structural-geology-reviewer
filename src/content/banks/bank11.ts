import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'mass-wasting-triggers'
const b = 'mass-wasting-classification'
const c = 'mass-wasting-mitigation'

export const bank11: BankQuestion[] = [
  m(a, 'Mass wasting is:', ['The downslope movement of rock and regolith under gravity', 'The transport of sediment by rivers', 'The dissolution of limestone', 'Wind erosion'], 0, 'Gravity drives material downslope without a transporting medium.'),
  m(a, 'Water promotes mass wasting mainly by:', ['Destroying cohesion between particles and adding weight', 'Dissolving all rock', 'Freezing the slope', 'Stopping gravity'], 0, 'Saturation reduces friction and adds load.'),
  m(a, 'An oversteepened slope can form when:', ['A stream undercuts a valley wall', 'Vegetation grows', 'Rain falls', 'Rock weathers slowly'], 0, 'Removing support at the base makes the slope unstable.'),
  m(a, 'Removal of vegetation increases mass wasting because:', ['Roots no longer bind soil and the surface is exposed', 'Plants add weight to slopes', 'Roots lubricate the soil', 'Plants cause earthquakes'], 0, 'Roots reinforce soil and shield it from rain impact.'),
  m(a, 'Earthquakes can trigger mass wasting by:', ['Shaking loose material and causing liquefaction', 'Adding water to the slope', 'Removing gravity', 'Freezing the ground'], 0, 'Ground shaking dislodges material and can liquify saturated sediment.'),
  m(a, 'Liquefaction occurs when:', ['Water-saturated material loses strength and behaves like a fluid', 'Rock melts', 'Clay dries out', 'Ice forms in pores'], 0, 'Shaking raises pore pressure and destroys grain contacts.'),
  m(a, 'The Sacred Falls, Hawaii event of 1999 showed that:', ['Mass wasting can occur without a discernible external trigger', 'Only earthquakes cause rock falls', 'Water always triggers failure', 'Mass wasting never kills people'], 0, 'The USGS study found no clear external trigger.'),
  m(a, 'Which factor does NOT promote mass wasting?', ['Steep slopes', 'Saturated soil', 'Abundant vegetation on a steep slope', 'Under-cutting of a slope'], 2, 'Vegetation generally stabilises slopes.'),
  t(a, 'Water erodes and transports material in mass wasting.', false, 'In mass wasting, water weakens the material but gravity does the moving.'),
  t(a, 'Building a road across the base of a steep slope can increase landslide risk.', true, 'Excavation oversteepens and undercuts the slope.'),
  s(a, 'Name the process in which saturated sediment behaves like a fluid during shaking.', ['liquefaction'], 'Liquefaction is the loss of strength in saturated material.'),

  m(b, 'Mass movements are classified by:', ['Material, type of motion and speed', 'Colour, age and density', 'Temperature, pressure and fluid content', 'Mineral and fossil content'], 0, 'Those three criteria organise the classification.'),
  m(b, 'A fall involves:', ['Free fall of detached pieces', 'Sliding along a plane', 'Viscous flow', 'Creep only'], 0, 'Falls occur on slopes too steep for loose material to remain.'),
  m(b, 'Talus slopes are built by:', ['Rock falls', 'Lahars', 'Glaciers', 'Rivers'], 0, 'Accumulated fallen rock forms talus.'),
  m(b, 'A rotational slide has:', ['A concave, spoon-shaped rupture surface', 'A perfectly flat rupture surface', 'No rupture surface', 'Only vertical motion'], 0, 'The block rotates down and outward along a curved surface.'),
  m(b, 'A translational slide moves along:', ['A relatively flat surface such as a joint or bedding plane', 'A curved spoon-shaped surface', 'A vertical cliff', 'A river channel'], 0, 'It slides along a planar weakness with little rotation.'),
  m(b, 'A flow moves:', ['As a viscous fluid, often as lobes or tongues', 'By free fall', 'Along a single planar surface', 'Only as dust'], 0, 'Flows behave like thick fluids.'),
  m(b, 'Most flows are:', ['Saturated with water', 'Completely dry', 'Made of ice', 'Pure bedrock'], 0, 'Water makes the material behave as a viscous fluid.'),
  m(b, 'Creep is:', ['Very slow, gradual downslope movement', 'A fast rock avalanche', 'A volcanic eruption', 'A type of fall'], 0, 'Creep is nearly imperceptible without long-term markers.'),
  m(b, 'Which feature often reveals creep?', ['Curved tree trunks and tilted fences', 'Fresh lava flows', 'Glacial striations', 'Mud cracks'], 0, 'Objects on a creeping slope tilt downslope.'),
  m(b, 'A rock avalanche is:', ['A very rapid, mobile mass of fragmented rock', 'A slow creep', 'A river flood', 'A volcanic mudflow'], 0, 'Rock avalanches are extremely fast and destructive.'),
  m(b, 'A debris flow differs from a rock fall mainly by:', ['Flowing behaviour and water content', 'Grain size only', 'Colour', 'Age'], 0, 'Debris flows move as a wet, viscous mass.'),
  m(b, 'Which mass movement is fastest?', ['Rock avalanche', 'Creep', 'Earthflow', 'Slump'], 0, 'Rock avalanches can move at very high speed.'),
  t(b, 'A slump is a type of rotational slide.', true, 'Slumps rotate along a curved failure surface.'),
  t(b, 'Creep is easily noticed within a single day.', false, 'Creep is very slow and recognised over years.'),
  t(b, 'Classification of mass movements considers speed as well as material and motion.', true, 'Rate is one of the three criteria.'),
  s(b, 'Name the slow, gradual downslope movement of soil.', ['creep'], 'Creep is imperceptibly slow downslope movement.'),

  m(c, 'Afforestation means:', ['Planting trees where no forest previously existed', 'Cutting down a forest', 'Restoring a former forest', 'Building terraces'], 0, 'Afforestation introduces trees to unforested land.'),
  m(c, 'Reforestation means:', ['Restoring forest to an area that was deforested', 'Planting trees in a desert for the first time', 'Removing vegetation', 'Building retaining walls'], 0, 'Reforestation restores previously forested land.'),
  m(c, 'Trees help stabilise slopes because:', ['Roots bind soil and reduce water infiltration damage', 'They add weight to the slope', 'They increase erosion', 'They cause cracks'], 0, 'Root reinforcement and canopy protection reduce failure risk.'),
  m(c, 'Terracing reduces mass wasting by:', ['Reducing the amount and velocity of water moving downslope', 'Increasing slope angle', 'Removing all vegetation', 'Adding weight to the crest'], 0, 'Terraces slow runoff and trap sediment.'),
  m(c, 'Slope stabilisation involves:', ['Assessing slope stress and applying engineering measures', 'Ignoring the slope', 'Only planting grass', 'Only evacuating people'], 0, 'Engineers calculate capacity and reinforce the slope.'),
  m(c, 'Which is a common slope-stabilisation measure?', ['Retaining walls and drainage', 'Adding water to the slope', 'Steepening the slope', 'Removing all roots'], 0, 'Walls and drainage reduce driving stress and pore pressure.'),
  m(c, 'Drainage is used in slope stabilisation to:', ['Lower pore-water pressure', 'Increase the slope angle', 'Add weight', 'Dissolve bedrock'], 0, 'Removing water increases effective strength.'),
  m(c, 'Rock bolts are used to:', ['Anchor unstable rock to stable rock mass', 'Water the slope', 'Plant trees', 'Measure rainfall'], 0, 'Bolts pin blocks in place.'),
  m(c, 'Avoiding construction on steep, unstable slopes is:', ['The most effective mitigation', 'Useless', 'A cause of landslides', 'Illegal in all countries'], 0, 'Avoidance removes exposure to the hazard.'),
  m(c, 'Grading a slope to a gentler angle:', ['Reduces the driving force of gravity', 'Increases instability', 'Has no effect', 'Always causes failure'], 0, 'Flattening reduces shear stress.'),
  t(c, 'Terracing both reduces erosion and allows more intensive cropping.', true, 'Terraces slow water and create usable steps.'),
  t(c, 'Planting trees always eliminates landslide risk.', false, 'Vegetation helps but cannot stabilise every slope, especially deep failures.'),
  t(c, 'Surface drainage can reduce the chance of slope failure.', true, 'Keeping water out lowers pore pressure.'),
  s(c, 'Name the practice of cutting steps into a slope to slow runoff.', ['terracing'], 'Terracing steps the slope and slows water.'),
]
