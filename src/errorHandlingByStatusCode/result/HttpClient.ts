import {FetchedData} from "../../fetchedData";
import {FetchError, UnexpectedStatusError, Validation400Error, Validation500Error} from "../ValidationError";
import {err, ok, Result} from "neverthrow";

export async function fetchData(url: string): Promise<Result<FetchedData, FetchError>> {
  const response = await fetch(url);
    if (response.ok) {
      return ok(await response.json() as FetchedData);
    } else {
      switch (response.status) {
        case 400:
          return err(new Validation400Error('Bad Request'));
        case 500:
          return err(new Validation500Error('Internal Server Error'));
        default:
          return err(new UnexpectedStatusError(`Unexpected status code: ${response.status}`));
      }
    }
}
