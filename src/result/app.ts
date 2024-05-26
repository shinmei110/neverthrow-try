import {fetchData} from "./HttpClient";
import {NetworkError, UnexpectedStatusError, Validation400Error, Validation500Error} from "../ValidationError";

const result = await fetchData('https://httpbin.org/status/400');

if (result.isOk()) {
  console.log(result.value);
} else {
  if (result.error instanceof Validation400Error) {
    console.error('Validation400Error:', result.error.message);
  } else if (result.error instanceof Validation500Error) {
    console.error('Validation500Error:', result.error.message);
  } else if (result.error instanceof UnexpectedStatusError) {
    console.error('UnexpectedStatusError:', result.error.message);
  } else if (result.error instanceof NetworkError) {
    console.error('NetworkError');
  } else {
    const _exhaustiveCheck: never = result.error;
  }
}
