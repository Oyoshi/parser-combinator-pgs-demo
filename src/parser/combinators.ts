import * as E from "fp-ts/Either";
import * as RA from "fp-ts/ReadonlyArray";
import { pipe } from "fp-ts/function";
import { success, failure } from "./status";
import { Parser, Input } from "./types";

export const map =
  <A, B>(f: (a: A) => B): ((fa: Parser<A>) => Parser<B>) =>
  (fa) =>
  (input: Input) =>
    pipe(
      fa(input),
      E.map(([a, nextInput]) => [f(a), nextInput])
    );

export const prod =
  <A, B>(fa: Parser<A>, fb: Parser<B>): Parser<readonly [A, B]> =>
  (input: Input) =>
    pipe(
      fa(input),
      E.chain(([a, inputAfterA]) =>
        pipe(
          fb(inputAfterA),
          E.map(([b, inputAfterB]) => [[a, b] as const, inputAfterB])
        )
      )
    );

export const seq = <A>(
  ...fas: ReadonlyArray<Parser<A>>
): Parser<ReadonlyArray<A>> =>
  pipe(
    fas,
    RA.reduce(success<ReadonlyArray<A>>([]), (parser, fa) =>
      pipe(
        prod(parser, fa),
        map(([result, a]) => RA.append(a)(result))
      )
    )
  );

export const oneOf = <A>(...fas: ReadonlyArray<Parser<A>>): Parser<A> =>
  pipe(
    fas,
    RA.foldLeft(
      () => failure("None of parsers succeeded"),
      (fa: Parser<A>, tail: ReadonlyArray<Parser<A>>) => (input) =>
        pipe(
          fa(input),
          E.fold(() => oneOf(...tail)(input), E.right)
        )
    )
  );

export const many =
  <A>(fa: Parser<A>): Parser<ReadonlyArray<A>> =>
  (input) =>
    pipe(
      fa(input),
      E.map(([a, inputAfterA]) => [[a], inputAfterA] as const),
      E.chain(([a, inputAfterA]) =>
        pipe(
          oneOf(many(fa), success<ReadonlyArray<A>>([]))(inputAfterA),
          E.map(([b, inputAfterB]) => [a.concat(b), inputAfterB])
        )
      )
    );
