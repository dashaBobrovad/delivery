function base64DecodeFn(str: string) {
    str = str.replace(/\s/g, '');    
  return decodeURIComponent(escape(window.atob( str )));
}

export default base64DecodeFn;