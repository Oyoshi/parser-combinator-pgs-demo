import * as E from "fp-ts/Either";

export interface Input {
  readonly string: string;
  readonly position: number;
}

export type Parser<A> = (
  input: Input
) => E.Either<ParserError, readonly [A, Input]>;

export interface ParserError {
  readonly error: string;
}
