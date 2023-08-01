import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="post-sort"
export default class extends Controller {
  static targets = [ 'select' ];

  sort() {
    const sortBy = this.selectTarget.value;
    const url = `/posts?sort_by=${sortBy}`;
    this.sendRequest(url);
  }

  sendRequest(url) {
    fetch(url, {
      headers: { Accept: "text/vnd.turbo-stream.html" },
    })
        .then((response) => response.text())
        .then((html) => { Turbo.renderStreamMessage(html) });
  }
}
