class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header><a href="index.html">
        <div class="header-container">
            <h1 class="fheader">ACEUs - Departamento de Computação</h1>

            <div class = "logo-dco">
                <svg width="280" height="113" viewBox="0 0 280 113" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="280" height="113" rx="47" fill="url(#pattern0_228_27)"/>
                <defs>
                <pattern id="pattern0_228_27" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_228_27" transform="matrix(0.00115194 0 0 0.00287019 -0.135396 -0.537002)"/>
                </pattern>
                <image id="image0_228_27" width="1024" height="768" preserveAspectRatio="none" href="images/dco_logo.png"/>
                </defs>
                </svg>
            </div>     
        </div>
        </a>
    </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
