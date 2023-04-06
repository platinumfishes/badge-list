import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";

class BadgeElement extends LitElement {
  static properties = {
    badgeIcon: { type: String },
    badgeTitle: { type: String },
    badgeIconColor: { type: String },
    badgeDescription: { type: String }
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
      padding: 0px;
      border-width: 3px 3px 3px 48px;
      border-style: solid;
      border-color: #3e98d3;
      border-radius: 12px;
      margin: 24px;
      color: #fff;
      background-color: white;
    }

    simple-icon {
      --simple-icon-width: 120px;
      --simple-icon-height: 120px;
    }
    a11y-collapse {
      margin: 0px;
      border-radius: 12px;
      --a11y-collapse-border: none;
      --a11y-collapse-heading-color: black;
      --a11y-collapse-heading-background-color: #cfe5f3;
      --a11y-collapse-vertical-padding: 0px;
      --a11y-collapse-padding-top: 0px;
      --a11y-collapse-padding-bottom: 0px;
      color: black;
    }
    p {
      padding: 0px;
      margin: 0px;
    }

    div {
      padding: 0px;
      margin: 0px;
    }
  `;

  constructor() {
    super();
    this.badgeTitle = " ";
    this.badgeIcon = " ";
    this.badgeIconColor = " ";
    this.badgeDescription = "Temporary description";
  }

  render() {
    return html`
      <div class="badge-container">
        <a11y-collapse>
          <p slot="heading">
            <simple-icon
              accent-color="${this.badgeIconColor}"
              icon="${this.badgeIcon}"
            ></simple-icon>
            ${this.badgeTitle}
          </p>
          <div>${this.badgeDescription}</div>
        </a11y-collapse>
      </div>
    `;
  }
}

customElements.define("badge-element", BadgeElement);