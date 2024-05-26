import {HttpView} from "../HttpView";
import {FetchError, NetworkError, UnexpectedStatusError, Validation400Error, Validation500Error} from "../ValidationError";
import {ResultAsync} from "neverthrow";

export function fetchData(url: string): ResultAsync<HttpView, FetchError> {
  return ResultAsync.fromPromise<HttpView, FetchError>(
    fetch(url)
      .then(async (response: Response) => {
        if (response.ok) {
          return await response.json() as HttpView;
        } else {
          switch (response.status) {
            case 400:
              throw new Validation400Error('Bad Request');
            case 500:
              throw new Validation500Error('Internal Server Error');
            default:
              throw new UnexpectedStatusError(`Unexpected status code: ${response.status}`);
          }
        }
      }),
    () => new NetworkError()
  );
}
