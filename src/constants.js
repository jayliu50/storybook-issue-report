export const NullOption = '';

export const BindingModes = Object.freeze({
  NONE: 'none',
  DISC: 'disc',
  SIGNATURE: 'signature',
});

export const BindingModesVisual = Object.freeze({
  NONE: 'none',
  DISC: 'disc',
  SPIRAL: 'spiral',
  SADDLE: 'saddle',
  JAPANESE: 'japanese',
  SIGNATURE: 'signature',
});

export const FunctionalBindingModeMap = Object.freeze({
  [BindingModesVisual.NONE]: BindingModes.NONE,
  [BindingModesVisual.DISC]: BindingModes.DISC,
  [BindingModesVisual.SPIRAL]: BindingModes.DISC,
  [BindingModesVisual.SADDLE]: BindingModes.DISC,
  [BindingModesVisual.JAPANESE]: BindingModes.DISC,
  [BindingModesVisual.SIGNATURE]: BindingModes.SIGNATURE,
});

// TODO: check if turning this into string breaks pagination.
export const PagesPerSheet = Object.freeze({
  ONE: '1',
  TWO: '2',
  // FOUR: '4'
});

export const SheetsPerSignature = Object.freeze({
  FOUR: 4,
});

export const PageOrientation = Object.freeze({
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape',
});

export const CutOrientation = Object.freeze({
  SHORT: 'short',
  LONG: 'long',
});

export const BindingEdge = Object.freeze({
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
});

export const PatternOptions = Object.freeze({
  NONE: 'none',
  LINE: 'line',
  GRID_SKETCHER: 'grid-sketcher',
  GRID_WRITER: 'grid-writer',
  GRID_EUROPEAN: 'grid-european',
  LINE_ISOMETRIC: 'line-isometric',
  GRID_ISOMETRIC: 'grid-isometric',
  LINE_GRAPH: 'line-graph',
  // MUSIC: 'music',
});

export const PatternDescriptions = Object.freeze({
  [PatternOptions.NONE]: `None`,
  [PatternOptions.LINE]: `Ruled`,
  [PatternOptions.GRID_SKETCHER]: `Sketcher's Dot Grid`,
  [PatternOptions.GRID_WRITER]: `Wide Dot Grid`,
  [PatternOptions.GRID_EUROPEAN]: `Narrow Dot Grid`,
  [PatternOptions.LINE_ISOMETRIC]: `Isometric Grid`,
  [PatternOptions.GRID_ISOMETRIC]: `Isometric Dot Grid`,
  [PatternOptions.LINE_GRAPH]: `Graph`,
  // [PatternOptions.MUSIC]: `Music Composition`,
});

export const PatternDetails = Object.freeze({
  [PatternOptions.NONE]: '\u00A0',
  [PatternOptions.LINE]: `0.25in`,
  [PatternOptions.GRID_SKETCHER]: `12 dots per inch`,
  [PatternOptions.GRID_WRITER]: `Dot pitch 0.25in`,
  [PatternOptions.GRID_EUROPEAN]: `Dot pitch 5mm`,
  [PatternOptions.LINE_ISOMETRIC]: `6 lines per vertical inch`,
  [PatternOptions.GRID_ISOMETRIC]: `6 dots per vertical inch`,
  [PatternOptions.LINE_GRAPH]: `6 lines per inch`,
  // [PatternOptions.MUSIC]: `Music Composition`,
});

export const ColorOptions = Object.freeze({
  BLACK: 'black',
  BLUE: 'blue',
  RED: 'red',
});

export const DefaultOpacityByColor = Object.freeze({
  // [ColorOptions.BLACK]: 0.15, // when trying to print in black and white
  [ColorOptions.BLACK]: 0.3, // when trying to print black in color mode
  [ColorOptions.BLUE]: 0.6,
  [ColorOptions.RED]: 0.8,
});

export const SheetSizeOptions = Object.freeze({
  LETTER: 'letter',
  LEGAL: 'legal',
  A4: 'a4',
});

export const SheetSizeDimensions = Object.freeze({
  [SheetSizeOptions.LETTER]: { width: 8.5, height: 11, units: 'in' },
  [SheetSizeOptions.LEGAL]: { width: 8.5, height: 14, units: 'in' },
  [SheetSizeOptions.A4]: { width: 210, height: 297, units: 'mm' },
});

export const DEFAULT_PATTERN = PatternOptions.NONE;
export const DEFAULT_COLOR = ColorOptions.BLACK;

export const PageNumberPosition = Object.freeze({
  TOP: 'top',
  BOTTOM: 'bottom',
});

export const PreviewLeafType = Object.freeze({
  VOID: 'void',
  OUTER_COVER: 'outer-cover',
  INNER_COVER: 'inner-cover',
  FLYLEAF: 'flyleaf',
  PAGE: 'page',
});

export const Location = Object.freeze({
  FRONT: 'front',
  BACK: 'back',
});

export default null;
