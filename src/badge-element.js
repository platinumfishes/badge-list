import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";

class BadgeElement extends LitElement {
  static properties = {
    badgeImage: { type: String },
    badgeTitle: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 48px;
      color: black;
      font-weight: 400;
    }
    .badge-container {
      border-width: 3px 3px 3px 48px;
      border-style: solid;
      border-color: #3e98d3;
      border-radius: 12px;
      padding: 0 10px;
      margin: 24px;
      min-height: 41px;
      color: #fff;
      background-color: #cfe5f3;
    }
    .badge-icon {
      display: table-cell;
      padding: 24px;
    }
    .badge-title {
      display: table-cell;
    }
    a {
      background-color: transparent;
      color: black;
      text-decoration: none;
      text-shadow: none;
    }

    a:active,
    a:hover {
      outline: 0;
    }

    a:hover {
      color: #23527c;
      text-decoration: underline;
    }

    a:hover,
    a:active {
      outline: 0;
    }

    a:hover {
      cursor: pointer;
    }

    img {
      border: 0;
      vertical-align: middle;
    }

    simple-icon {
      --simple-icon-width: 120px;
      --simple-icon-height: 120px;
    }
    a11y-collapse {
      --a11y-collapse-border: none;
      --a11y-collapse-heading-color: black;
    }
  `;

  constructor() {
    super();
    this.badgeTitle = "Amazon Cognito";
    this.badgeIcon = "hardware:cast-connected";
  }

  render() {
    return html`
      <div class="badge-container">
        <a11y-collapse heading-button>
          <p slot="heading"> 
          <simple-icon accent-color="pink" icon="${this.badgeIcon}">
          </simple-icon>${this.badgeTitle}</p>
          <div>random crap</div>
          </a11y-collapse
        >
      </div>
    `;
  }
}

customElements.define("badge-element", BadgeElement);
