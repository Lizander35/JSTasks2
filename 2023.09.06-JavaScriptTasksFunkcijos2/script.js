// function convertDaysToFormat(days, format) {
//     let result;
//     switch (format) {
//       case "minutes":
//         result = `${days} days - ${days * 24 * 60} minutes`;
//         break;
//       case "hours":
//         result = `${days} days - ${days * 24} hours`;
//         break;
//       case "weeks":
//         result = `${days} days - ${days / 7} weeks`;
//         break;
//       case "months":
//         result = `${days} days - ${days / 30} months`;
//         break;
//       case "years":
//         result = `${days} days - ${days / 365} years`;
//         break;
//       default:
//         result = "Unsupported format";
//     }
//     return result;
//   }
  
//   // Pavyzdys naudojant funkciją:
//   const converted = convertDaysToFormat(5, "minutes");
//   console.log(converted); // Rezultatas: "5 days - 7200 minutes"





// function tikrintiDalyba(dalinys, daliklis) {
//     if (dalinys % daliklis === 0) {
//       return `${dalinys} dalinasi iš ${daliklis}.`;
//     } else {
//       const liekana = dalinys % daliklis;
//       return `Skaičius ${dalinys} nesidalina iš ${daliklis}. Liekana yra ${liekana}.`;
//     }
//   }
  
//   // Pavyzdžiai naudojant funkciją:
//   console.log(tikrintiDalyba(10, 5)); // Output: "10 dalinasi iš 5."
//   console.log(tikrintiDalyba(11, 5)); // Output: "Skaičius 11 nesidalina iš 5. Liekana yra 1."
  




// function patikrintiPorinesRaidziuSkaciu(tekstas) {
//     const raidziuSkaicius = tekstas.replace(/[^a-zA-Z]/g, '').length; // Ištraukiame tik raides ir skaičiuojame jų kiekį
//     if (raidziuSkaicius % 2 === 0) {
//       return `Įvestas tekstas turi porinių raidžių skaičių (${raidziuSkaicius}).`;
//     } else {
//       return `Įvestas tekstas turi neporinių raidžių skaičių (${raidziuSkaicius}).`;
//     }
//   }
  
//   // Pavyzdžiai naudojant funkciją:
//   console.log(patikrintiPorinesRaidziuSkaciu("Lorem ipsum dolor sit amet.")); // Output: "Įvestas tekstas turi porinių raidžių skaičių (21)."
//   console.log(patikrintiPorinesRaidziuSkaciu("Hello, World!")); // Output: "Įvestas tekstas turi neporinių raidžių skaičių (9)."





function gautiSimboli(tekstas, pozicija) {
    // Patikriname, ar nurodytas skaičius yra neigiamas
    if (pozicija < 0) {
      pozicija = tekstas.length + pozicija; // Konvertuojame neigiamą poziciją į teigiamą
    }
    
    // Patikriname, ar pozicija yra tinkama
    if (pozicija >= 0 && pozicija < tekstas.length) {
      const simbolis = tekstas.charAt(pozicija);
      return `Teksto "${tekstas}" ${pozicija + 1} simbolis yra "${simbolis}"`;
    } else {
      return `Tekstas "${tekstas}" turi ${tekstas.length} simbolius, o jūs nurodėte grąžinti ${pozicija + 1}.`;
    }
  }
  
  // Pavyzdžiai:
  console.log(gautiSimboli("Labas", 3)); // Teksto "Labas" 3 simbolis yra "a"
  console.log(gautiSimboli("Labas", -1)); // Teksto "Labas" 4 simbolis yra "s" (nuo galo)
  console.log(gautiSimboli("Labas", 8)); // Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.
  