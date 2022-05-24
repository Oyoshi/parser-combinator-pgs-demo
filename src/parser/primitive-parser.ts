import { charParser } from "./parsers";
import { seq, oneOf } from "./combinators";

export const fiveParser = charParser("5");

export const sevenParser = charParser("7");

export const fiveAndSevenParser = seq(fiveParser, sevenParser);

export const fiveOrSevenParser = oneOf(fiveParser, sevenParser);
