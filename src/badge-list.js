import { LitElement, html, css } from 'lit';
import "./search-bar";

class BadgeList extends LitElement {
  static properties = {
    badges: { type: Array },
    badgeName: { type: String },
  }

  static styles = css`
    :host {
    }
  `;

  constructor() {
    super();
    this.badges = [];
    this.badgeTitle = "Badge title poggers";
    this.getSearchResults().then((results) => {
      this.players = results;
    });
  }

  // updateBadges() {
  //   const address = '../api/badgeRoster'; //this doesnt exist yet but will house the roster of all badges
  //   fetch(address).then((response) => {
  //     if (response.ok) {
  //         return response.json
  //     }
  //     return [];
  //   })
  //   .then((data) => {
  //     this.badges = data;
  //   })
  // }

  async getSearchResults(value = '') {
    const address = '/api/badgeRoster?search=${value}';
    const results = await fetch(address).then((response) => { 
      if (response.ok) {
        return response.json()
      }
      return [];
     })
      .then((data) => {
        return data;
      });

      return results;
  }

//STOPPED 20:40 in video on building search widget

  async handleSearchEvent(e) {
    const term = e.detail.value; //this is the search term
    this.badges = await this.getSearchResults(term);
  }

  render() {
    return html`
    <div>${this.badgeTitle}</div>
    <search-bar @value-changed=${this.handleSearchEvent}></search-bar>

    `;
  }
}

customElements.define('badge-list', BadgeList);