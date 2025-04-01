function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function save() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;
  const expires = document.getElementById("expires").value;

  if (expires) {
    setCookie(key, value, expires);

    return;
  }

  setCookie(key, value);
}

function search() {
  const cookieLogEl = document.getElementById("cookie");
  const value = document.cookie
    .split(";")
    .map((t) => t.trim())
    .join("\n");

  cookieLogEl.value = value;
}

function clear() {
  const doc = document,
    domain = domain || doc.domain,
    path = path || "/",
    cookies = doc.cookie.split(";"),
    now = +new Date();
  for (let i = cookies.length - 1; i >= 0; i--) {
    doc.cookie =
      cookies[i].split("=")[0] +
      "=; expires=" +
      now +
      "; domain=" +
      domain +
      "; path=" +
      path;
  }
}
