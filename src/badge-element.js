import { LitElement, html, css } from "lit";

class BadgeElement extends LitElement {
  static properties = {
    badgeImage: { type: String },
    badgeTitle: {type: String},
  };

  static styles = css`
    .badge-container {
      border-bottom: 0;
      padding: 0 10px;
      margin-bottom: 0;
      min-height: 41px;
      color: #fff;
      background-color: #cfe6f4;
      border-left: 15px solid #3e98d3;
    }
    a {
      background-color: transparent;
      color: #337ab7;
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
  `;

  constructor() {
    super();
    this.badgeTitle = 'Amazon Cognito';
    this.badgeImage = 'https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png';
  }

  render() {
    return html`
      <div class="badge-container">
          <span class="badge-image">
            <img
              alt=""
              src="${this.badgeImage}"
            />
          </span>
            <span class="badge-title">
              <a href="#"> ${this.badgeTitle} </a>
            </span>
        </div>
      </div>
    `;
  }
}

customElements.define("badge-element", BadgeElement);
