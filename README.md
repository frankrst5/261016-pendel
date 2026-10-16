# Pendel Knivsta ⇄ Stockholm

Kleine Web-App fürs iPhone. Sie prüft den Standort und zeigt nur die nächsten Direktzüge an:

- **Raum Knivsta** (inkl. Vassunda/Alsike, Radius 18 km): Knivsta → Stockholm C / Stockholm City
- **sonst**: Stockholm C / Stockholm City → Knivsta

Pro Zug: Abfahrt geplant/prognostiziert, Ankunft, Dauer, Gleis (Abfahrt und Ankunft), Zugnummer, Produkt, Betreiber, Ziel,
Abweichungen (Ausfall, Gleiswechsel …), letzte gemeldete Position und die Zwischenhalte mit Zeiten und Gleisen.
Die Daten kommen von der Trafikverket Open API (dieselbe Quelle wie Tågstationen) und werden alle 30 s aktualisiert.

## Einrichtung

1. Kostenlosen API-Schlüssel holen: https://data.trafikverket.se/ → Konto anlegen → API-Schlüssel erzeugen.
2. App öffnen, unter ⚙︎ den Schlüssel eintragen (bleibt nur im Browser des Geräts).
3. In Safari: Teilen → „Zum Home-Bildschirm“.

## Hosting

Statische Dateien (`index.html`, `sw.js`, `manifest.webmanifest`, Icons) und kein Build-Schritt. Zum Beispiel GitHub Pages
(Settings → Pages → Deploy from branch). Für den Standort braucht die Seite HTTPS.
