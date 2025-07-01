const bars = document.querySelector('.bars i');
const mobile = document.querySelector('.mobile');

document.getElementById('header').innerHTML = `
<header>
  <div class="left">
    <img class="headerlogo" src="/assets/images/tesseract-lockup-1.transparent.png" alt="TESSERACT" onclick="window.location.href='/';">
    <a class="hl" href="https://docs.tesseractcoin.org/">Docs</a>
    <a class="hl" href="/products/mining">Mining</a>
    <a class="hl" href="/products/wallet">Wallet</a>
    <a class="hl" href="https://status.tesseractcoin.org/">Status</a>
    <a class="hl" href="/changelog.html">Changelog</a>
  </div>
  <div class="right">
    <a class="hl" href="https://github.com/TessseractCoinDev/TesseractCoin" target="_blank"><i class="fab fa-github"></i></a>
    <a class="hl" href="https://x.com/TesseractDevs" target="_blank"><i class="fab fa-x-twitter"></i></a>
    <a class="hl" href="https://discord.gg/wPA6eeUEpM" target="_blank"><i class="fab fa-discord"></i></a>
    <a class="hl" href="/donate.html" target="_blank"><i class="fas fa-heart"></i></a>
  </div>
  <span class="bars"><i class="fas fa-bars"></i></span>
  <div class="mobile">
    <a class="hlm" href="https://docs.tesseractcoin.org/">Docs</a>
    <a class="hlm" href="/products/mining">Mining</a>
    <a class="hlm" href="/products/wallet">Wallet</a>
    <a class="hlm" href="https://status.tesseractcoin.org/">Status</a>
    <a class="hlm" href="/changelog.html">Changelog</a>
    <div class="div"></div>
    <a class="hlm" href="https://github.com/TessseractCoinDev/TesseractCoin" target="_blank"><i class="fab fa-github"></i></a>
    <a class="hlm" href="https://x.com/TesseractDevs" target="_blank"><i class="fab fa-x-twitter"></i></a>
    <a class="hlm" href="https://discord.gg/wPA6eeUEpM" target="_blank"><i class="fab fa-discord"></i></a>
    <a class="hlm" href="/donate.html" target="_blank"><i class="fas fa-heart"></i></a>
  </div>
</header>
`;

document.getElementById('footer').innerHTML = (`
    <footer>
      <div class="fcols">
        <div class="fcol1">
            <p class="ftitle">Legal & Docs</p>
            <a class="flink" href="https://docs.tesseractcoin.org/">Documentation</a>
            <a class="flink" href="/privacy.html">Privacy Policy</a>
            <a class="flink" href="/license.html">License</a>
            <a class="flink" href="/changelog.html">Changelog</a>
        </div>
        <div class="fcol2">
            <p class="ftitle">Resources</p>
            <a class="flink" href="https://explorer.tesseractcoin.org/" target="_blank">Explorer</a>
            <a class="flink" href="/products/pool" target="_blank">Tesseract Pool</a>
            <a class="flink" href="/products/mining" target="_blank">Tesseract Miner</a>
            <a class="flink" href="/products/wallet" target="_blank">Tesseract Wallet</a>
            <a class="flink" href="https://status.tesseractcoin.org/" target="_blank">Status Page</a>
        </div>
        <div class="fcol3">
            <p class="ftitle">Community</p>
            <a class="flink" href="https://twitter.com/TesseractDevs" target="_blank">Twitter (X)</a>
            <a class="flink" href="https://discord.gg/wPA6eeUEpM" target="_blank">Discord</a>
            <a class="flink" href="https://github.com/TesseractCoinDev" target="_blank">GitHub</a>
        </div>
        <div class="fcol4">
            <p class="ftitle">Support</p>
            <a class="flink" href="https://support.tesseractcoin.org/">Support</a>
            <a class="flink" href="https://community.tesseractcoin.org/">Forums</a>
        </div>
      </div>
      <div class="fbottom">
        <div class="fs">
          <a class="s" href="https://github.com/TessseractCoinDev/TesseractCoin" target="_blank"><i class="fab fa-github"></i></a>
          <a class="s" href="https://x.com/TesseractDevs" target="_blank"><i class="fab fa-x-twitter"></i></a>
          <a class="s" href="https://discord.gg/wPA6eeUEpM" target="_blank"><i class="fab fa-discord"></i></a>
        </div>
        <p class="copyright">&copy; ${new Date().getFullYear()} TesseractCoin Development. All Rights Reserved.</p>
      </div>
    </footer>
`);

document.querySelector('.bars').addEventListener('click', () => {
  mobile.classList.toggle('active');

  if (mobile.classList.contains('active')) {
    bars.classList.remove('fa-bars');
    bars.classList.add('fa-times');
  } else {
    bars.classList.remove('fa-times');
    bars.classList.add('fa-bars');
  }
});
