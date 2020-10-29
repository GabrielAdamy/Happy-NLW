const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
  //iserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2227449",
    lng: "-49.5598328",
    name: "Lar dos Meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulberabilidade social.",
    whatsapp: "51984417299",
    images: [
      "https://1.bp.blogspot.com/-sA7X83UtGQ4/XZOnHG02AyI/AAAAAAAAUsY/U6HG9xsblj4m7_KanMPBgq51659sw6T-ACLcBGAsYHQ/s1600/List%25C3%25A3o%2Banimes%2Becchi%2B2019-20.jpg",

      "https://pm1.narvii.com/6192/535ba69903027850e54e76a8232d324c380dc8f3_hq.jpg",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horários de visita Das 16h até 8h ",
    open_on_weekends: "0",
  });

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente um orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2" ');
  console.log(orphanage);

  //deletar algum dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id='4' "))
});
