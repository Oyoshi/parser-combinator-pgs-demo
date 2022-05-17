import * as E from "fp-ts/Either";
import { Parser, ParserError } from "./types";

export const makeParserError = (error: string): ParserError => ({
  error,
});

export const success =
  <A>(a: A): Parser<A> =>
  (input) =>
    E.right([a, input]);

export const failure =
  (message: string): Parser<never> =>
  () =>
    E.left(makeParserError(message));
