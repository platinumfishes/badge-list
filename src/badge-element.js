import { LitElement, html, css } from "lit";

class BadgeElement extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    /* :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--badge-list-background-color);
    } */

@media all{ 
  * { 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
  } 

  .category-14 { 
    border-color: #3e98d3; 
    background-color: #cfe6f4;
  } 

  .portlet { 
    margin-top: 0px; 
    margin-bottom: 25px; 
    padding: 0px; 
    -webkit-border-radius: 4px; 
    -moz-border-radius: 4px; 
    -ms-border-radius: 4px; 
    -o-border-radius: 4px; 
    border-radius: 4px;
  } 

  .portlet.box { 
    padding: 0px !important;
  } 

  .badge-strip.category-14.badge-strip { 
    border: 1px solid #3e98d3;
  } 

  .portlet.box.badge-strip { 
    margin-bottom: 7px;
  } 

  .portlet .portlet-body { 
    clear: both; 
    -webkit-border-radius: 0 0 4px 4px; 
    -moz-border-radius: 0 0 4px 4px; 
    -ms-border-radius: 0 0 4px 4px; 
    -o-border-radius: 0 0 4px 4px; 
    border-radius: 0 0 4px 4px;
  } 

  .portlet.box .portlet-body { 
    background-color: #fff; 
    padding: 10px;
  } 

  .mission-full.portlet.box .portlet-body { 
    padding: 1em 2em;
  } 

  .col-lg-12 { 
    position: relative; 
    min-height: 1px; 
    padding-left: 15px; 
    padding-right: 15px;
  } 
}     

@media (min-width: 1200px){ 
  .col-lg-12 { 
    float:  left;
    width: 100%;
  } 
}     

@media all{ 
  .row { 
    margin-left: -15px; 
    margin-right: -15px;
  } 

  .page-content { 
    margin-top: 0px; 
    padding: 0px;
  } 
}     

@media (min-width: 992px){ 
  .page-content-wrapper .page-content { 
    margin-left: 100px; 
    margin-top: 0px; 
    min-height: 600px; 
    padding: 10px 0 0 20px;
  } 

  .page-sidebar-closed .page-content-wrapper .page-content { 
    margin-left: 54px !important;
  } 

  .page-content-wrapper { 
    float: left; 
    width: 100%;
  } 
}     

@media all{ 
  main { 
    display: block;
  } 

  .page-container { 
    margin: 0px; 
    padding: 20px 20px 0 20px; 
    position: relative;
  } 

  main.page-container { 
    max-width: 1310px; 
    margin: 0 auto;
  } 

  .page-header-fixed .page-container { 
    margin-top: 75px;
  } 

  body { 
    margin:    0px !important; 
    font-family:    "effra", sans-serif; 
    font-size:    14px; 
    line-height:    1.428571429; 
    color:    #333333; 
    background-color:    #fff;
    padding:   0px !important; 
    direction:   ltr;
    -webkit-font-smoothing:  antialiased;
    background: #e9ecf3;
  } 

  html { 
    font-family:  sans-serif; 
    -ms-text-size-adjust:  100%; 
    -webkit-text-size-adjust:  100%;
    font-size: 10px; 
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  } 

  .portlet-title  { 
    border-bottom:    0; 
    padding:    0 10px; 
    margin-bottom:    0; 
    min-height:    41px; 
    -webkit-border-radius:    4px 4px 0 0; 
    -moz-border-radius:    4px 4px 0 0; 
    -ms-border-radius:    4px 4px 0 0; 
    -o-border-radius:    4px 4px 0 0; 
    border-radius:    4px 4px 0 0;
    color:   #fff;
    background-color:  #cfe6f4;
    border-left: 15px solid #3e98d3;
  } 

  .portlet.box.badge-strip > .portlet-title  { 
    color: #333333;
  } 

  :before,:after { 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
  } 

  .portlet-title:before ,.portlet-title:after  { 
    content: " "; 
    display: table;
  } 

  .portlet-title:after  { 
    clear: both;
  } 

  .portlet.box .portlet-title > .caption  { 
    padding: 11px 0 9px 0;
  } 

  .portlet.box.badge-strip > .portlet-title > .caption  { 
    padding: 0; 
    min-width: 70%;
  } 

  .portlet .portlet-title > .tools  { 
    float: right; 
    display: inline-block; 
    padding: 12px 0 8px 0;
  } 

  .portlet.box.badge-strip > .portlet-title > .tools  { 
    padding: 0.8em 0 0 0;
  } 

  .portlet.box.badge-strip > .portlet-title > .caption > .badge-image  { 
    margin-right: 0.5em; 
    float: left; 
    padding: 0.25em 0; 
    height: 46px;
  } 

  .portlet.box.badge-strip > .portlet-title > .caption > .badge-caption  { 
    display: block; 
    padding-top: 0.6em; 
    float: left; 
    font-size: 1.2em;
  } 

  a { 
    background-color:   transparent;
    color:  #337ab7;
    text-decoration:  none;
    text-shadow: none; 
  } 

  .portlet .portlet-title > .tools > a  { 
    display: inline-block; 
    height: 16px; 
    margin-left: 5px; 
    opacity: 1; 
    filter: alpha(opacity=100);
  } 

  .portlet .portlet-title > .tools > a.expand  { 
    background-image: url(https://badgesapp.psu.edu/assets/portlet-collapse-icon-a8cf9af3bb841ed07f5e509c1e4ff9f2cb34606732a80c773e78668736fcff29.png); 
    width: 14px; 
    visibility: visible;
  } 

  .portlet.box .portlet-title > .tools > a.expand  { 
    background-image: url(https://badgesapp.psu.edu/assets/portlet-collapse-icon-white-9534b8898775f173a5d8f02982ebcafa84f93c126dd1aab271c514332597bbba.png);
  } 

  .portlet.box.badge-strip > .portlet-title > .tools > a.expand  { 
    background-image: url(https://badgesapp.psu.edu/assets/portlet-collapse-icon-a8cf9af3bb841ed07f5e509c1e4ff9f2cb34606732a80c773e78668736fcff29.png);
  } 

  a:active,a:hover { 
    outline: 0;
  } 

  a:hover { 
    color:  #23527c;
    text-decoration:  underline;
  } 

  a:hover,a:active { 
    outline: 0;
  } 

  a:hover { 
    cursor: pointer;
  } 

  .portlet .portlet-title > .tools > a:hover  { 
    text-decoration: none; 
    -webkit-transition: all 0.1s ease-in-out; 
    -moz-transition: all 0.1s ease-in-out; 
    -o-transition: all 0.1s ease-in-out; 
    -ms-transition: all 0.1s ease-in-out; 
    transition: all 0.1s ease-in-out; 
    opacity: 0.8; 
    filter: alpha(opacity=80);
  } 

  img { 
    border:  0;
    vertical-align: middle;
  } 

  .portlet.box.badge-strip > .portlet-title > .caption > .badge-image img  { 
    height: 40px;
  } 

  .portlet.box.badge-strip > .portlet-title > .caption a  { 
    color: #333333;
  } 
}     

  
  `;

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    return html`
    <div class="badge-container"></div>
<div class="portlet-title snipcss-tPOpQ">
  <div class="caption">
    <span class="badge-image">
      <img alt="" aria-hidden="true" src="https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png">
    </span>
    <span class="badge-caption">
      <span class="badge-title">
        <a href="#">
          Amazon Cognito
        </a>
      </span>
    </span>
  </div>
  <div class="tools">
    <a href="javascript:;" class="expand" data-original-title="" title="">
    </a>
  </div>
</div>

    `;
  }
}

customElements.define('badge-element', BadgeElement);
