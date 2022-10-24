// Parsing strategy to use (we need to tell parser what we want from him)
type TParsingStrategy = '';

// TODO: Parser implementation
export class Parser {
    private data: string;

    constructor(data: string) {
        this.data = data;
    }

    public parseHTML(strategy) {
        // TODO: Create parser that only uses plain js (regexps)
        return {};
    }
}
