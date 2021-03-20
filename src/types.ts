import * as PIXI from "pixi.js";

export type SplitStyle = "words" | "characters";

export interface RichTextOptions {
  debug?: boolean;
  splitStyle?: SplitStyle;
}

export type TagStyle = "bbcode" | "xml";
export type VAlign = "top" | "middle" | "bottom" | "baseline" | number;
export type Align = "left" | "right" | "center" | "justify";
export type Color = string | number;
export type Fill = Color | string[] | number[] | CanvasGradient | CanvasPattern;

// todo: add text-transform: uppercase
export interface TextStyle extends Record<string, unknown> {
  align?: Align;
  breakWords?: boolean;
  dropShadow?: boolean;
  dropShadowAlpha?: number;
  dropShadowAngle?: number;
  dropShadowBlur?: number;
  dropShadowColor?: Color;
  dropShadowDistance?: number;
  fill?: Fill;
  fillGradientType?: number;
  fillGradientStops?: number[];
  fontFamily?: string | string[];
  fontSize?: number | string;
  fontStyle?: string;
  fontVariant?: string;
  fontWeight?: string;
  leading?: number;
  letterSpacing?: number;
  lineHeight?: number;
  lineSpacing?: number;
  lineJoin?: string;
  miterLimit?: number;
  padding?: number;
  stroke?: Color;
  strokeThickness?: number;
  trim?: boolean;
  textBaseline?: string;
  whiteSpace?: string;
  wordWrap?: boolean;
  wordWrapWidth?: number;
}

export interface TextStyleExtended extends TextStyle {
  valign?: VAlign;
}

export type TextStyleSet = Record<string, TextStyleExtended>;

export type SpriteMap = Record<string, PIXI.Sprite>;

export type AttributesList = Record<string, string>;
export interface TagWithAttributes {
  tagName: string;
  attributes: AttributesList;
}
export interface TagMatchData extends TagWithAttributes {
  tag: string;
  isOpening: boolean;
  index: number;
}
export type TagStack = TagMatchData[];

export interface Point {
  x: number;
  y: number;
}
export type Measurement = PIXI.Rectangle;
export type MeasurementLine = Measurement[];
export type MeasurementLines = MeasurementLine[];

export interface TaggedTextTokenPartial {
  text: string;
  tags: TagWithAttributes[];
  style?: TextStyleExtended;
  fontProperties?: PIXI.IFontMetrics;
  measurement?: Measurement;
}

// Same as TaggedTextToken but without any optional properties.
export interface TaggedTextToken extends TaggedTextTokenPartial {
  style: TextStyleExtended;
  fontProperties: PIXI.IFontMetrics;
  measurement: Measurement;
}
