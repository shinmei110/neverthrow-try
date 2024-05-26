import {HttpView} from "../HttpView";
import {UnexpectedStatusError, Validation400Error, Validation500Error} from "../ValidationError";

export async function fetchData(url: string): Promise<HttpView> {
  const response: Response = await fetch(url);

  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new Validation400Error('Bad Request');
      case 500:
        throw new Validation500Error('Internal Server Error');
      default:
        throw new UnexpectedStatusError(`Unexpected status code: ${response.status}`);
    }
  }

  return await response.json();
}
