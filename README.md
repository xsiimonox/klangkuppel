# KlangKuppel

Eine kostenlose, iPad-taugliche Web-App für den MINT-Unterricht. Musik wird lokal im Browser analysiert und in eine druckbare, 80 mm breite Relief-Halbkugel übersetzt.

## Live verwenden

Nach der Veröffentlichung über GitHub Pages läuft KlangKuppel direkt in Safari, Chrome oder Edge. Es ist keine Installation und kein Benutzerkonto nötig. Audiodateien werden ausschließlich lokal im Browser verarbeitet und nicht hochgeladen.

## Start

`index.html` über einen kleinen Webserver oder statisches Hosting (z. B. GitHub Pages) öffnen. Für die 3D-Anzeige wird Three.js kostenlos über ein CDN geladen; danach verbleiben Audiodateien vollständig auf dem Gerät und werden nicht hochgeladen.

## Empfohlener Unterrichtsablauf

1. Musik kostenlos in [Strudel](https://strudel.cc/) programmieren und als Audio aufnehmen/exportieren, alternativ GarageBand auf schulischen iPads verwenden.
2. Audiodatei in KlangKuppel laden und die Zuordnung von Zeit, Frequenz und Amplitude untersuchen.
3. Relief, Spitzigkeit, Glättung und Detaildichte vergleichen.
4. STL exportieren, im Slicer prüfen und mit der flachen Seite auf dem Druckbett drucken.

## Druckhinweise

- Durchmesser: 80 mm
- Bodenstärke: einstellbar, Standard 2,4 mm
- Empfohlen: 0,2 mm Schichthöhe, 3 Wände, 10–15 % Infill
- Das Mesh ist geschlossen; die Unterseite ist plan. Starke Reliefs können je nach Drucker dennoch kleine Stützstrukturen benötigen.

## Datenschutz und Kosten

Die Anwendung ist kostenlos, enthält keine Werbung und überträgt keine Audiodateien an einen Server. Die verwendete 3D-Bibliothek Three.js wird beim Öffnen über ein öffentliches CDN geladen.

## Lizenz

MIT – freie Nutzung und Anpassung für Unterricht und eigene Projekte.
