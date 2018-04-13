## Zadanie 10

Firma X posiada trzy aktualnie biura zlokalizowane w Gdansku, Gliwicach i Koszalinie a w niedalekiej przyszlosci planuje otworzyc nowe biuro w Poznaniu.
Wymagania aplikacji: Na podstawie dostarczonych danych, prosze stworzyc obiekt Firma.

#### Firma powinna posiadac:
- liste Biur (tablice)

Natomiast Kazde biuro powinno posiadac liste Pracownikow, id, name, oraz informacje czy jest glowna siedziba.
    Kazdy pracownik ma propercje office, ktora pozwala nam rozpoznac, do ktorego biura nalezy (id w offices).

Do stworzenia struktury firmy uzyj przykladowych danych z zmiennych offices i workers.

#### Uzywajac obiektu Firma wykonaj nastepujace operacje (w kolejnosci):

1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracownikow, srednia pensja),
2) Dodaj nowe biuro (w Poznaniu),
3) Dodaj nowego pracownika do biura w Poznaniu: { id: 16, name: "Olek", type: "M", office: "PO", salary: 500 }
4) Wyswietl, informacje o biurze w Poznaniu
5) Wyswietl srednia pensje w calej firmie,
6) Wyswietl najlepiej oplacanego pracownika w poszczegolnych biurach,
7) Wyswietl najlepiej oplacanego pracownika w calej firmie oraz nazwe jego biura.


Uzyj konsoli do wyswietlenia danych. (wolaj w console.log funkcje, ktore zwracaja zadane wartosci, np. najlepiej oplacanego pracowinika)
Uzywaj skladni z ES6 lub ES5 (badz konsekwentny)