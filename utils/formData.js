export const getDistricts = (provinceNo) => {
  const province1 = [
    "Bhojpur",
    "Dhankuta",
    "Ilam",
    "Jhapa",
    "Khotang",
    "Morang",
    "Okhaldhunga",
    "Panchthar",
    "Sankhuwasabha",
    "Solukhumbu",
    "Sunsari",
    "Taplejung",
    "Terhathum",
    "Udayapur",
  ];

  const province2 = [
    "Bara",
    "Dhanusa",
    "Mahottari",
    "Parsa",
    "Rauthat",
    "Saptari",
    "Sarlahi",
    "Siraha",
  ];

  const province3 = [
    "Bhaktapur",
    "Chitwan",
    "Dhading",
    "Dolakha",
    "Kathmandu",
    "Kavrepalanchok",
    "Lalitpur",
    "Makwanpur",
    "Nuwakot",
    "Ramechhap",
    "Rasuwa",
    "Sindhuli",
    "Sindhupalchok",
  ];

  const province4 = [
    "Baglung",
    "Gorkha",
    "Kaski",
    "Lamjung",
    "Manang",
    "Mustang",
    "Myagdi",
    "Nawalpur",
    "Parbat",
    "Syangja",
    "Tanahun",
  ];

  const province5 = [
    "Arghakhanchi",
    "Banke",
    "Bardiya",
    "Dang",
    "Eastern Rukum",
    "Gulmi",
    "Kapilvastu",
    "Palpa",
    "Parasi",
    "Pyuthan",
    "Rolpa",
    "Rupandehi",
  ];

  const province6 = [
    "Dailekh",
    "Dolpa",
    "Humla",
    "Jajarkot",
    "Jumla",
    "Kalikot",
    "Mugu",
    "Salyan",
    "Surkhet",
    "Western Rukum",
  ];

  const province7 = [
    "Achham",
    "Baitadi",
    "Bajhang",
    "Dadeldhura",
    "Darchula",
    "Doti",
    "Kailali",
    "Kanchanpur",
  ];

  const noData = ["Invalid province set"];

  if (provinceNo === "1") {
    return province1;
  } else if (provinceNo === "2") {
    return province2;
  } else if (provinceNo === "3") {
    return province3;
  } else if (provinceNo === "4") {
    return province4;
  } else if (provinceNo === "5") {
    return province5;
  } else if (provinceNo === "6") {
    return province6;
  } else if (provinceNo === "7") {
    return province7;
  } else {
    return noData;
  }
};
