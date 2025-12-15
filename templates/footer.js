class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="logo-unesp">
            <svg width="230" height="74" viewBox="0 0 230 74" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="230" height="74" fill="url(#pattern0_248_2)"/>
            <defs>
            <pattern id="pattern0_248_2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_248_2" transform="matrix(0.00169336 0 0 0.00526316 -0.00256293 0)"/>
            </pattern>
            <image id="image0_248_2" width="591" height="190" preserveAspectRatio="none" xlink:href="images/unesp_logo.png"/>
            </defs>
            </svg>
        </div>

        <div class="logo-fc">
            <svg width="134" height="103" viewBox="0 0 134 103" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="134" height="103" rx="23" fill="white"/>
            <rect x="10" y="10" width="112" height="84" fill="url(#pattern0_231_43)"/>
            <defs>
            <pattern id="pattern0_231_43" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_231_43" transform="matrix(0.00182039 0 0 0.00242718 -0.00242718 0)"/>
            </pattern>
            <image id="image0_231_43" width="552" height="412" preserveAspectRatio="none" href="images/fc_logo.png"/>
            </defs>
            </svg>
        </div>

        <div class="logo-dco-footer">
            <svg width="255" height="103" viewBox="0 0 255 103" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="255" height="103" rx="47" fill="url(#pattern0_228_36)"/>
            <defs>
            <pattern id="pattern0_228_36" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_228_36" transform="matrix(0.00115194 0 0 0.00287019 -0.135396 -0.537002)"/>
            </pattern>
            <image id="image0_228_36" width="1024" height="768" preserveAspectRatio="none" href="images/dco_logo.png"/>
            </defs>
            </svg>
        </div>
    </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
