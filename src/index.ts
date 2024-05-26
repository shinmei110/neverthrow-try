import {ok, Result} from "neverthrow";

const result: Result<number, Error> = ok(5);

result.match(
    (value: number) => console.log('Value:', value),
    (error: Error) => console.error('Error:', error)
)
