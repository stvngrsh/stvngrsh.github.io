export default function times(n) {
  var html = "";
  for (let i = 1; i <= n; i++) {
    html += "<span>★</span>";
  }
  for (let i = 3 - n; i > 0; i--) {
    html += "<span>☆</span>";
  }
  return html;
}
