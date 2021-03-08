import { CapitalizePipe } from './capitalize.pipe';
import { DurationFormatPipe } from './duration-format.pipe';
import { EvaIconsPipe } from './eva-icons.pipe';
import { FilterArrayPipe } from './filter-array.pipe';
import { Nl2BrPipe, SafeHtmlPipe, TruncatePipe } from './text.pipe';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { PluralPipe } from './plural.pipe';
import { ReplacePipe } from './replace.pipe';
import { RoundPipe } from './round.pipe';
import { TimeFormatPipe } from './time-format.pipe';
import { TimingPipe } from './timing.pipe';
import { UtcToLocalPipe } from './utc-to-local.pipe';

export * from './capitalize.pipe';
export * from './duration-format.pipe';
export * from './eva-icons.pipe';
export * from './filter-array.pipe';
export * from './number-with-commas.pipe';
export * from './plural.pipe';
export * from './replace.pipe';
export * from './round.pipe';
export * from './text.pipe';
export * from './time-format.pipe';
export * from './timing.pipe';
export * from './utc-to-local.pipe';

export const Pipes = [
	CapitalizePipe,
	DurationFormatPipe,
	EvaIconsPipe,
	FilterArrayPipe,
	Nl2BrPipe,
	NumberWithCommasPipe,
	PluralPipe,
	ReplacePipe,
	RoundPipe,
	SafeHtmlPipe,
	TimeFormatPipe,
	TimingPipe,
	TruncatePipe,
	UtcToLocalPipe
];
