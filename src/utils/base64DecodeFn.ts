function base64DecodeFn(str: string) {
  let strRes = str;
  strRes = str.replace(/\s/g, "");
  return decodeURIComponent(escape(window.atob(strRes)));
}

export default base64DecodeFn;
