
### ESERCIZIO: Biglietto Treno

---
### **CONSEGNA:**

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

---
### **Raccolta dei dati**
- Prelevare il numero di km da percorrere
- Prelevare l'eta' del utente

---
### Logica del programma
- Inserire due input uno per i km da percorrere e uno con l'eta' del utente
-Inserire un bottone
- Calcolare il prezzo del biglietto in base ai km (0.21 € * {km inseriti dal utente})
- Applicare il 20% disconto sul prezzo del biglietto se l'utente ha eta' < di 18 anni
- Applicare il 40% disconto sul prezzo del biglietto se l'utente ha eta' > di 65 anni
- Preparo messaggio del prezzo finale
---
### Output 
Stampo prezzo biglietto
