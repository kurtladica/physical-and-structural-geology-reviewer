import { useEffect, useRef, useState, type JSX } from 'react'
import { EarthLayers, EarthSpheres, HotspotTrack, Isostasy, MagneticStripes, PlateBoundaries, RiftStages } from './diagrams/PhysicalDiagrams'
import { CoalStages, GeologicTime, IgneousTextures, MetamorphicGrade, RockCycle, SilicateStructures, VolcanoCrossSection } from './diagrams/RockDiagrams'
import { GroundwaterWells, GroundwaterZones, MassWastingTypes, Unconformities } from './diagrams/WaterDiagrams'

const registry: Record<string, () => JSX.Element> = {
  'earth-spheres': EarthSpheres,
  'earth-layers': EarthLayers,
  isostasy: Isostasy,
  'plate-boundaries': PlateBoundaries,
  'rift-stages': RiftStages,
  'magnetic-stripes': MagneticStripes,
  'hotspot-track': HotspotTrack,
  'rock-cycle': RockCycle,
  'silicate-structures': SilicateStructures,
  'igneous-textures': IgneousTextures,
  volcano: VolcanoCrossSection,
  coal: CoalStages,
  'geologic-time': GeologicTime,
  'metamorphic-grade': MetamorphicGrade,
  'groundwater-zones': GroundwaterZones,
  'groundwater-wells': GroundwaterWells,
  'mass-wasting': MassWastingTypes,
  unconformities: Unconformities,
}

export function Diagram({ diagramKey }: { diagramKey: string }) {
  const Component = registry[diagramKey]
  const frameRef = useRef<HTMLDivElement>(null)
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    const measure = () => setScrollable(frame.scrollWidth > frame.clientWidth + 2)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(frame)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [diagramKey])

  if (!Component) {
    return <p className="muted">This diagram could not be loaded.</p>
  }
  return (
    <>
      <div className="diagram-frame" ref={frameRef}>
        <Component />
      </div>
      {scrollable ? <p className="diagram-hint">Swipe the diagram sideways to see all of it.</p> : null}
    </>
  )
}
