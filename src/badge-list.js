import { LitElement, html, css } from 'lit';
import "./search-bar";
import "./badge-element";

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
    this.updateBadges();
    });
  }

  async updateBadges() {
    const address = '../api/badgeRoster.js';
    fetch(address).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return [];
    })
    .then((data) => {
        this.badges = data;
    });
    console.log(data);
  }

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

/* <div>${this.badgeTitle}</div>
<search-bar @value-changed=${this.handleSearchEvent}></search-bar> */

  render() {
    return html`
    <div class="wrapper">
      ${this.badges.map(badge => html`
        <div class="item">
          <badge-element badgeTitle="${badge.badgeTitle}" badgeIcon="${badge.badgeIcon}" badgeIconColor="${badge.badgeIconColor}" badgeDescription="${badge.badgeDescription}"></badge-element>
        </div>
      `)}
    </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);