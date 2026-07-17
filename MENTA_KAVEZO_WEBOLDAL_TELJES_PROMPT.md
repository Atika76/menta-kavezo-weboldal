# Menta Kávézó – teljes, működő weboldal prompt

Készíts nekem egy teljes, valóban működő, többoldalas weboldalt a kitalált „Menta Kávézó” számára.

## Fontos
Ne csak képet vagy látványtervet készíts, hanem valódi HTML-, CSS- és JavaScript-fájlokat. A végén csomagold össze az egész weboldalt egy letölthető ZIP-fájlba.

A weboldal GitHub és tárhely nélkül is működjön:
- a ZIP-fájl kicsomagolása után az index.html fájlra duplán kattintva nyíljon meg a böngészőben;
- minden menüpont és funkció helyi megnyitáskor is működjön;
- kizárólag relatív fájlhivatkozásokat használj;
- ne használj olyan külső képeket, betűtípusokat, keretrendszereket vagy internetes hivatkozásokat, amelyek miatt internet nélkül szétesne az oldal;
- a szükséges képek, ikonok és illusztrációk kerüljenek bele az assets mappába;
- a weboldal legyen GitHub Pagesre is feltölthető változtatás nélkül.

## A weboldal neve
Menta Kávézó

## Szlogen
„Egy csésze öröm, minden nap.”

## Arculat
- menta zöld, barna és krémszín;
- modern, elegáns, barátságos és látványos;
- kávéscsésze, latte art, kávébab és mentalevél motívumok;
- kellemes, meghitt kávézói hangulat;
- mobiltelefonon, tableten és számítógépen is jól használható reszponzív kialakítás.

## Külön oldalak
1. index.html – Főoldal
2. rolunk.html – Rólunk
3. kinalat.html – Kínálat
4. galeria.html – Galéria
5. kapcsolat.html – Kapcsolat
6. foglalas.html – Asztalfoglalás

Minden oldalon legyen azonos fejléc, logó, menü és lábléc.

## Felső menü
- Főoldal
- Rólunk
- Kínálat
- Galéria
- Kapcsolat
- Foglalás

## Főoldal
- látványos kezdőkép;
- „Egy csésze öröm, minden nap.” főcím;
- rövid bemutatkozás;
- „Asztalfoglalás” gomb;
- „Kínálat megtekintése” gomb;
- Friss ízek, Finom kávé és Kellemes hangulat bemutatása;
- néhány kiemelt kínálati elem;
- rövid galériarész;
- elérhetőségek.

## Rólunk oldal
Írj barátságos bemutatkozást a Menta Kávézóról, a minőségi kávéról, a friss ízekről és a nyugodt hangulatról. Legyen rajta legalább két látványos tartalmi rész és egy kép vagy helyi SVG-illusztráció.

## Kínálat oldal
Készíts legalább három kategóriát:
- Kávékülönlegességek
- Frissítők
- Házi sütemények

Minden kategóriához adj meg több terméket, rövid leírást és kitalált árat forintban. Legyenek szép termékkártyák és helyi képek vagy SVG-illusztrációk.

## Galéria oldal
- legalább 8 galériakép vagy helyi illusztráció;
- kategóriaszűrők: Összes, Kávé, Sütemények, Hangulat;
- a képekre kattintva nyíljon meg nagyobb képnézegető;
- a képnézegető bezárható legyen.

## Kapcsolat oldal
Használd ezeket a kitalált adatokat:
- Cím: 1111 Budapest, Menta utca 5.
- Telefon: +36 30 123 4567
- E-mail: hello@mentakavezo.hu
- Weboldal: www.mentakavezo.hu
- Nyitvatartás: hétfőtől vasárnapig 8:00–20:00

Legyen rajta:
- kattintható telefonszám;
- kattintható e-mail-cím;
- látványos térképhelyettesítő;
- egyszerű üzenetküldő űrlap.

Az üzenetküldő űrlap ne állítsa, hogy valódi e-mailt küldött. Beküldés után csak egyértelmű bemutató üzenetet jelenítsen meg.

## Foglalás oldal
Készíts működő asztalfoglalási űrlapot ezekkel a mezőkkel:
- Név
- E-mail
- Telefonszám
- Dátum
- Időpont
- Személyek száma
- Megjegyzés

A foglalások a böngésző localStorage tárhelyére kerüljenek, ezért szerver nélkül is működjön.

Lehessen:
- új foglalást létrehozni;
- a mentett foglalásokat megtekinteni;
- egy foglalást törölni;
- az összes foglalást törölni;
- szöveges visszaigazolást letölteni.

Jól láthatóan írd ki, hogy ez egy bemutató rendszer, és a foglalás nem kerül automatikusan elküldésre valódi kávézónak.

## További követelmények
- mobilon legyen működő hamburger menü;
- az aktuális menüpont legyen kiemelve;
- minden gomb és hivatkozás működjön;
- legyenek finom animációk;
- legyen megfelelő kontraszt és jól olvasható magyar szöveg;
- ne maradjon Lorem ipsum vagy üres helykitöltő szöveg;
- ne legyen hibás karakter vagy elírás;
- ne használj szerveroldali technológiát;
- ne kelljen telepíteni semmit;
- a böngésző konzoljában ne legyen JavaScript-hiba.

## Javasolt mappaszerkezet

menta-kavezo-weboldal/
- index.html
- rolunk.html
- kinalat.html
- galeria.html
- kapcsolat.html
- foglalas.html
- css/style.css
- js/script.js
- assets/images/
- assets/icons/
- OLVASS_EL.txt

## Az OLVASS_EL.txt tartalma

A weboldal használata:
1. Csomagold ki a ZIP-fájlt.
2. Nyisd meg az index.html fájlt.
3. A menüpontokkal az összes oldal megnyitható.
4. A weboldal GitHub Pagesre is feltölthető.
5. Az asztalfoglalás bemutató funkció, az adatokat csak az adott böngésző helyi tárhelyén tárolja.

## Végső ellenőrzés
Mielőtt elkészíted a ZIP-fájlt:
- ellenőrizd a fájlneveket;
- ellenőrizd az összes menüpontot;
- ellenőrizd a képek útvonalát;
- ellenőrizd mobilnézetben;
- ellenőrizd az asztalfoglalás mentését és törlését;
- ellenőrizd, hogy az index.html közvetlen megnyitásakor minden működik.

A végén adj egyetlen letölthető ZIP-fájlt, amely a teljes kész weboldalt tartalmazza.
