// 1. Der skal, med brug af javascript, indsættes 3 skills mere. Altså følgende html:
/*
    <div>
        <span>CSS:</span>
        <span>60%</span>
        <meter min="0" max="100" value="60"></meter>
    </div>
*/

// 1.1 Fang .mySkills med en egnet metode
// 1.2 Anvend document.createElement() til at skabe en div, to span og et meter tag
// 1.3 Anvend document.textContent til at indsætte data i 2*span(se ovenfor for indhold)
// 1.4 Anvend .setAttribute() til at sætte de tre attributter i meter
// 1.5 Anvend .append() til at indsætte <div> i .mySkills
// 1.6 Anvend .append() til at indsætte 2*span og 1*meter i div

// 2. Anvend .cloneNode() til at klone den <li> med "Mit portfolio" og indsætte den to gange nedenfor (Ja, så kommer der til at stå "Mit portfolio" tre gange - pyt med det:) )

// 3. I footeren er der en div med class="oval". Anvend .style-objektet til at give den følgende:
// width: 40px, height: 40px, background: pink, border-radius: 50%

// 4. Se i dit .css dokument nederst at der er en class kaldet .niceStyling. Anvend .classList.add() til at sætte denne klasse på .oval2
