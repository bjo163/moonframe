/** The stable Moonframe skin catalog. Appearance is a separate preference. */
export const skins = Object.freeze([
  { id: 'moonpunk', name: 'Moonpunk', description: 'Acid-lime ink slabs, offset shadows and a command rail.' },
  { id: 'moonriot', name: 'Moonriot', description: 'Angular editorial panels, signal red and split navigation.' },
  { id: 'moonzine', name: 'Moonzine', description: 'An independent magazine of paper layers and editorial type.' },
  { id: 'moonhalftone', name: 'Moonhalftone', description: 'Monochrome manga pacing, screened gutters and ink captions.' },
  { id: 'moonglitch', name: 'Moonglitch', description: 'A quiet telemetry console with technical rules and monospace data.' },
  { id: 'moonsmash', name: 'Moonsmash', description: 'Oversized focal typography and radial graphic impact.' },
  { id: 'moonink', name: 'Moonink', description: 'Expressive ink margins around a calm reading column.' },
  { id: 'mooncrash', name: 'Mooncrash', description: 'Industrial equipment plates, mechanical borders and numbered zones.' },
  { id: 'moonpanel', name: 'Moonpanel', description: 'A strict comic grid with caption bars and rectangular panels.' },
  { id: 'moonscrawl', name: 'Moonscrawl', description: 'A notebook workspace with ruled margins and sketch contours.' },
  { id: 'moonraw', name: 'Moonraw', description: 'Exposed structure, plain rectangles and content-first restraint.' },
  { id: 'moonchrome', name: 'Moonchrome', description: 'Metallic contours and luminous rims around quiet surfaces.' },
  { id: 'classic', name: 'Classic', description: 'Balanced rounded controls, soft elevation and familiar navigation.' },
  { id: 'moonquest', name: 'Moonquest', description: 'An adventure journal with framed records and inventory navigation.' },
  { id: 'moonledger', name: 'Moonledger', description: 'A precise enterprise workbench for dense records and filters.' },
].map(Object.freeze));

export const skinIds = Object.freeze(skins.map(({ id }) => id));
