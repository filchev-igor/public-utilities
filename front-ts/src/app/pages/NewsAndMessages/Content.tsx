import React from 'react';

const Content = () => {
  const hasDayMode = true;
  const isLithuanian = true;

  return (
    <div className={`container-fluid ${!hasDayMode && 'bg-night-mode'} min-vh-100`}>
      <div className="row gy-3 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-3">
        <div className="col mx-auto">
          <div className={`card ${hasDayMode ? 'border-dark' : 'border-secondary text-secondary'}  border-3 text-center`}>
            <div className="card-body">
              <h3 className="card-title">{isLithuanian ? 'Naujienos' : 'News'}</h3>

              <p className="card-text fs-5 text-start">
                {isLithuanian ? 'Didžiausia šalyje vandentvarkos bendrovė „Public-utilities“ pradeda naują iniciatyvą sostinės darželiuose ir mokyklose – bendrovė ketina užsiimti jaunosios kartos švietimu aplinkosaugos, tvarumo ir vandentvarkos klausimais. Startavus iniciatyvai, kurią globoja Aplinkos ministerija ir palaiko Nacionalinė švietimo agentūra, didžiausias dėmesys bus skiriamas ikimokyklinio ir pradinių klasių mokiniams, vėliau į iniciatyvos veiklas planuojama įtraukti ir vyresnio amžiaus moksleivius. „Public-utilities“ artimiausiu metu Vilniuje veikiantiems darželiams ir mokykloms žada išsiųsti kvietimus dalyvauti  iniciatyvoje. Taip pat mokymo įstaigos apie norą prisijungti gali bendrovę informuoti ir bendruoju įmonės paštu info@public-utilities.lt.' : '„Public-utilities“, the largest water management company in the country, is launching a new initiative in kindergartens and schools in the capital - the company intends to educate the younger generation on environmental issues, sustainability and water management. Following the launch of the initiative, which is sponsored by the Ministry of the Environment and supported by the National Education Agency, the focus will be on pre-school and primary school pupils, and later it is planned to involve older pupils in the initiative. „Public-utilities“ promises to send invitations to participate in the initiative to kindergartens and schools operating in Vilnius in the near future. Educational institutions can also inform the company about the wish to join by general company mail info@public-utilities.lt'}
              </p>

              <button className="btn btn-outline-dark" type="button">Read more</button>
            </div>
          </div>
        </div>

        <div className="col mx-auto">
          <div className={`card ${hasDayMode ? 'border-dark' : 'border-secondary text-secondary'}  border-3 text-center`}>
            <div className="card-body">
              <h3 className="card-title">{isLithuanian ? 'Naujienos' : 'News'}</h3>

              <p className="card-text fs-5 text-start">
                {isLithuanian ? 'Brangstant kietajam kurui, gamtinėms dujoms bei kitoms žaliavoms, o kartu kylant ir daugelio paslaugų kainoms, vandens ir nuotekų tvarkymo kaina Vilniaus mieste išlieka viena žemiausių ne tik šalyje, bet ir visoje Europoje. Per pastaruosius penkerius metus vandens kaina Vilniaus gyventojams sumažėjo 15 proc. ir dabar vidutinė geriamojo vandens tiekimo ir nuotekų tvarkymo kaina fiziniams asmenims Vilniuje šiuo metu siekia 1,32 Eur/m³ (1,09 Eur/m³ be PVM). Nuo sostinės nedaug atsilieka ir Kaunas su 1,44 Eur/m³ kaina. Panevėžio gyventojai už vandenį moka 1,59 Eur/m³, klaipėdiečiai – 1,73 Eur/m³. Brangiausias vanduo Molėtuose – čia vieno kubinio metro vandens kaina siekia net 4,26 Eur/m³.' : 'With the rise in the price of solid fuel, natural gas and other raw materials, as well as the rise in the prices of many services, the price of water and wastewater treatment in Vilnius remains one of the lowest not only in the country, but also in the whole of Europe. Over the last five years, the price of water for Vilnius residents has decreased by 15 percent. and now the average price of drinking water supply and wastewater treatment for natural persons in Vilnius is currently 1.32 Eur / m³ (1.09 Eur / m³ without VAT). Kaunas is not far behind the capital with a price of 1.44 Eur / m³. Panevėžys residents pay 1.59 Eur / m³ for water, Klaipėda residents pay 1.73 Eur / m³. The most expensive water in Molėtai - here the price of one cubic meter of water reaches as much as 4.26 Eur / m³. '}
              </p>

              <button className="btn btn-outline-dark" type="button">Read more</button>
            </div>
          </div>
        </div>

        <div className="col mx-auto">
          <div className={`card ${hasDayMode ? 'border-dark' : 'border-secondary text-secondary'}  border-3 text-center`}>
            <div className="card-body">
              <h3 className="card-title">{isLithuanian ? 'Pranešimai' : 'Messages'}</h3>

              <p className="card-text fs-5 text-start">
                {isLithuanian ? 'SVARBU!!! Informuojame, kad sausio 30d. nuo 23.00 val. iki 7.00 val. (nakties metu iš sekmadienio į pirmadienį), dėl planinių vandentekio tinklo atnaujinimo darbų, Karoliniškių ir dalies Lazdynų gyventojams bus laikinai sustabdytas vandens tiekimas. Anksčiau bendrovė planavo šiuos darbus vykdyti 2021-ųjų gruodį, tačiau nuspręsta juos perkelti į 2022-ųjų metų sausį. ' : 'IMPORTANT!!! Please be informed that on January 30th.from 11 p.m.until 7 p.m. (during the night from Sunday to Monday), due to the planned renovation of the water supply network, the water supply to the residents of Karoliniškės and part of Lazdynai will be temporarily suspended.The company previously planned to carry out these works in December 2021, but it was decided to move them to January 2022.'}
              </p>

              <button className="btn btn-outline-dark" type="button">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
