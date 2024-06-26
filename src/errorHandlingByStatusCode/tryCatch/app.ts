import {
  fetchData,
} from "./HttpClient";
import {Validation400Error, Validation500Error} from "../ValidationError";

try {
  const data = await fetchData('https://httpbin.org/status/400');
  // fetch成功時の処理
  console.log(data);
} catch (error: unknown) {
  if (error instanceof Validation400Error) {
    // 400エラー時の処理
    console.error('Validation400Error:', error.message);
  } else if (error instanceof Validation500Error) {
    // 500エラー時の処理
    console.error('Validation500Error:', error.message);
  } else {
    // ネットワークエラーや想定外のエラー時の処理
    console.error('Unknown error:', error);
  }
}
