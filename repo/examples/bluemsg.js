// ==UserScript==
// @name         BlueMsg
// @version      -
// @description  Changes color of message area
// @author       @EtherCD
// @match        https://*.evades.io/*
// @icon         https://raw.githubusercontent.com/EtherCD/EvadesSP/main/repo/icons/bluemsg.svg
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  if (!window.scripts) return;

  const script = window.scripts.create({
    name: 'BlueMsg',
    description: 'Changes color of message area',
    icon: 'https://raw.githubusercontent.com/EtherCD/EvadesSP/main/repo/icons/bluemsg.svg',
  });

  script.addReplace(/=['"]#006b2c['"]/g, `="#006b66"`);
  script.addReplace(/=['"]#00ff6b['"]/g, `="#00fff4"`);
})();
