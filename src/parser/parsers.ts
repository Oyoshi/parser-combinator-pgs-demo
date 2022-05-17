import * as E from "fp-ts/Either";
import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import { makeParserError } from "./status";
import { oneOf, many, map, seq } from "./combinators";
import { Parser, Input, ParserError } from "./types";

const makeInput = (string: string, position?: number): Input => ({
  string,
  position: position ? Math.trunc(position) : 0,
});

export const parse = <A>(parser: Parser<A>, input: string) =>
  pipe(makeInput(input), parser);

const advance = (input: Input): O.Option<[string, Input]> =>
  input.string.length > input.position
    ? O.some([
        input.string[input.position],
        makeInput(input.string, input.position + 1),
      ])
    : O.none;

export const showParserRawResult = E.fold(
  (e: ParserError) => `${e.error}`,
  (r: readonly [any, Input]) => `${JSON.stringify(r[0])}`
);

export const showParserResult = E.fold(
  (e: ParserError) => `${e.error}`,
  (r: readonly [any, Input]) =>
    `${[].concat
      .apply([], r[0])
      .reduce((acc, current) => acc + (current !== " " ? current : ""), "")}`
);

const charParser =
  (expectedChar: string): Parser<string> =>
  (input) =>
    pipe(
      advance(input),
      O.fold(
        () => E.left(makeParserError("Unexpected end of input")),
        ([char, nextInput]) =>
          char === expectedChar
            ? E.right([char, nextInput] as const)
            : E.left(
                makeParserError(`Expected '${expectedChar}', got '${char}'`)
              )
      )
    );

export const digitCharParser = oneOf(
  charParser("0"),
  charParser("1"),
  charParser("2"),
  charParser("3"),
  charParser("4"),
  charParser("5"),
  charParser("6"),
  charParser("7"),
  charParser("8"),
  charParser("9")
);

export const spacesParser = many(charParser(" "));

export const twoDigitsCharParser: ReadonlyArray<Parser<string>> = [
  digitCharParser,
  digitCharParser,
];

export const threeDigitsCharParser: ReadonlyArray<Parser<string>> = [
  digitCharParser,
  digitCharParser,
  digitCharParser,
];

export const twoDigitsParser = seq(...twoDigitsCharParser);
export const threeDigitsParser = seq(...threeDigitsCharParser);

export const areaCodeParser = twoDigitsParser;

export const basicNumberParser = pipe(
  seq(
    areaCodeParser,
    spacesParser,
    threeDigitsParser,
    spacesParser,
    twoDigitsParser,
    spacesParser,
    twoDigitsParser
  ),
  map((arr: any): any => [].concat.apply([], arr))
);

export const countryCodeParser = seq(charParser("+"), ...twoDigitsCharParser);

export const fullNumberParser = seq(
  countryCodeParser,
  spacesParser,
  basicNumberParser
);

export const phoneNumberParser = oneOf(fullNumberParser, basicNumberParser);
