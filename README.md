# Pendel Knivsta ⇄ Stockholm

Kleine Web-App fürs iPhone. Sie prüft den Standort und zeigt nur die nächsten Direktzüge an:

- **Raum Knivsta** (inkl. Vassunda/Alsike, Radius 18 km): Knivsta → Stockholm C / Stockholm City
- **sonst**: Stockholm C / Stockholm City → Knivsta

Pendeltåg erscheinen kleiner, blasser und nur in Weiß/Grau, alle anderen Züge normal. Beim Scrollen werden weitere Verbindungen bis 36 h im Voraus nachgeladen.

Pro Zug: Abfahrt und Ankunft (bei Verspätung geplante Zeit durchgestrichen, tatsächliche daneben), Dauer, Gleis in Stockholm,
Produkt und Zugnummer, Abweichungen (Ausfall, Gleiswechsel …) und die letzte gemeldete Position. Tippen auf einen Zug blendet die Halte ein.
Hinweise erscheinen nur als Icon (⚠️ Störung auf der eigenen Teilstrecke, ℹ️ Bahnhofsmeldung Knivsta bzw. Stockholm mit Streckenbezug,
🚧 geplante Fahrplanänderung, ≈ vorläufige Prognose) und werden beim Antippen ausgeschrieben. Oben steht das Wetter am Startbahnhof.
Die Karte zeigt die Live-GPS-Positionen der Züge (Trafikverket TrainPosition, Karte: OpenStreetMap/Leaflet).
Die Daten kommen von der Trafikverket Open API (dieselbe Quelle wie Tågstationen) und werden alle 30 s aktualisiert.

## Einrichtung

1. Kostenlosen API-Schlüssel holen: https://data.trafikverket.se/ → Konto anlegen → API-Schlüssel erzeugen.
2. App öffnen, unter ⚙︎ den Schlüssel eintragen (bleibt nur im Browser des Geräts).
3. In Safari: Teilen → „Zum Home-Bildschirm“.

## Hosting

Statische Dateien (`index.html`, `sw.js`, `manifest.webmanifest`, Icons) und kein Build-Schritt. Zum Beispiel GitHub Pages
(Settings → Pages → Deploy from branch). Für den Standort braucht die Seite HTTPS.

Audio-Knöpfe: P1–P4 (Sveriges Radio live; P4 Uppland im Raum Knivsta, sonst P4 Stockholm), Flux (FluxFM live) und HB (neueste Folge des
Handelsblatt Morning Briefing, Hörposition wird gemerkt). Nochmal tippen stoppt.

Karte: Mit CARTO-Schlüssel (⚙︎) CARTO-Kacheln, sonst OpenStreetMap-Standardkarte.
