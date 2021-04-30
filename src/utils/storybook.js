import {
  PagesPerSheet,
  PageOrientation,
  BindingEdge,
  PatternOptions,
  ColorOptions,
  SheetSizeOptions,
  DefaultOpacityByColor,
  BindingModesVisual,
  CutOrientation,
  PageNumberPosition,
} from '../constants';

/**
 * @depreciated
 */
export const pagesPerSheetOptions = Object.keys(PagesPerSheet).reduce(
  (acc, item) => {
    acc[item] = PagesPerSheet[item].toString();
    return acc;
  },
  {}
);

export const standardArgTypes = {
  pages: { control: { type: 'number' } },
  color: { control: { type: 'select', options: ColorOptions } },
  pattern: { control: { type: 'select', options: PatternOptions } },
  flyleaf: { control: { type: 'boolean' } },
  pageOrientation: { control: { type: 'radio', options: PageOrientation } },
  pagesPerSheet: {
    control: { type: 'radio', options: pagesPerSheetOptions },
  },
  bindingEdge: { control: { type: 'select', options: BindingEdge } },
  bindingMode: { control: { type: 'select', options: BindingModesVisual } },

  opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
  isCustomPattern: { control: { type: 'boolean' } },
  sheetSize: { control: { type: 'select', options: SheetSizeOptions } },
  cutOrientation: { control: { type: 'radio', options: CutOrientation } },
  disablePageNumbering: { control: { type: 'boolean' } },
  pageNumberPosition: {
    control: { type: 'radio', options: PageNumberPosition },
  },
};

export const standardArgs = {
  pages: 4,
  color: ColorOptions.BLACK,
  pattern: PatternOptions.GRID_SKETCHER,
  flyleaf: false,
  pageOrientation: PageOrientation.PORTRAIT,
  pagesPerSheet: PagesPerSheet.TWO,
  bindingEdge: BindingEdge.LEFT,
  bindingMode: BindingModesVisual.DISC,
  opacity: DefaultOpacityByColor[ColorOptions.BLACK],
  isCustomPattern: false,
  sheetSize: SheetSizeOptions.LETTER,
  cutOrientation: CutOrientation.SHORT,
  disablePageNumbering: false,
  pageNumberPosition: PageNumberPosition.BOTTOM,
};
