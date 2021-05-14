import React from "react";
import "./App.css";
import "./styles/grid.css";
import "./styles/normalize.css";
import "./styles/queries.css";
import "./styles/style.css";

import { LogoFacebook, ChatbubbleEllipsesOutline, CallOutline, MapOutline, PawOutline, TimeOutline, HandLeftOutline, HeartOutline } from "react-ionicons";
import { Header } from "./components/molecules/Header";
import { Footer } from "./components/molecules/Footer";
import { Ajra } from "./components/molecules/Ajra";

function App() {
  return (
    <div>
      <Header />
      <Ajra />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

const Section4 = () => {
  return (
    <section className="section-photos" id="photos">
      <h2>Nasze szczeniaczki</h2>
      <div className="row">
        <ul className="puppy-showcase">
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/l_1.jpg" alt="Miot L" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/l_2.jpg" alt="Miot L" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/l_3.jpg" alt="Miot L" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/l_4.jpg" alt="Miot L" />
            </figure>
          </li>
        </ul>

        <ul className="puppy-showcase">
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/b_1.jpg" alt="Miot B" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/b_2.jpg" alt="Miot B" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/b_3.jpg" alt="Miot B" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/b_4.jpg" alt="Miot B" />
            </figure>
          </li>
        </ul>

        <ul className="puppy-showcase">
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/m_1.jpg" alt="Miot M" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/m_2.jpg" alt="Miot M" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/m_3.jpg" alt="Miot M" />
            </figure>
          </li>
          <li>
            <figure className="puppy-photo">
              <img src="resources/css/img/m_4.jpg" alt="Miot M" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

const Section5 = () => {
  return (
    <section className="section-kontakt" id="kontakt">
      <div className="row">
        <h2>Kontakt</h2>
      </div>

      <div className="row row_m">
        <div className="col span-1-of-2 kontakt-box">
          <img src="resources/css/img/iza_square.jpg" alt="Izabela - breeder" className="photo-iza" />

          <div className="kontakt-steps">
            <div>
              <ChatbubbleEllipsesOutline cssClasses="map-icon" />
            </div>
            <p>
              Cześć, Nazywam się Iza. W naszej hodowli odpowiadam za kontakt z Tobą. Odpowiem na każde Twoje pytanie. Szczerze, z form kontaktu najbardziej lubię rozmowę. Dzwoń,
              śmiało!
            </p>
          </div>
          <div className="kontakt-steps">
            <div>
              <CallOutline cssClasses="map-icon" />
            </div>
            <p>
              Numer telefonu:{" "}
              <a className="link" href="tel:+511327345">
                {" "}
                <strong>511-327-345</strong>{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="col span-1-of-2 kontakt-box">
          <div className="kontakt-steps">
            <div>
              <a href="https://www.facebook.com/Hodowla-Malta%C5%84czyk%C3%B3w-ZKWP-FCI-Izabela-Kubi%C5%84ska-Magdarpil-192004064917870/?ref=page_internal" target="_blank">
                <LogoFacebook cssClasses="map-icon_third" />
              </a>
            </div>
            <p>
              <a className="link" href="https://www.facebook.com/Hodowla-Malta%C5%84czyk%C3%B3w-ZKWP-FCI-Izabela-Kubi%C5%84ska-Magdarpil-192004064917870/?ref=page_internal">
                Nasz funpage na fb
              </a>
            </p>
          </div>

          <div className="kontakt-steps">
            <div>
              <a href="https://www.google.pl/maps/place/Mazowiecka,+84-230+Rumia/@54.5625225,18.4181231,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda456b7b434ef:0x9813ee41a457684a!8m2!3d54.5625225!4d18.4203118">
                <MapOutline cssClasses="map-icon" />
              </a>
            </div>
            <p>Jesteśmy z nad morza, a dokładnie z Rumi :)</p>
          </div>

          <a
            className="mapa"
            href="https://www.google.pl/maps/place/Mazowiecka,+84-230+Rumia/@54.5625225,18.4181231,17z/data=!3m1!4b1!4m5!3m4!1s0x46fda456b7b434ef:0x9813ee41a457684a!8m2!3d54.5625225!4d18.4203118"
          >
            <img className="mapa" src="resources/css/img/mapa.png" alt="Mapa" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Section3 = () => {
  return (
    <section className="section-zanim_kupisz" id="zanim_kupisz">
      <div className="row">
        <h2>Zanim kupisz szczeniaczka</h2>
        <p className="long-copy">
          Posidanie psa to wspaniała przygoda. Nie bez powodu mówi się, że pies to najlepszy przyjaciel człowieka. W tym całym szaleństwie i euforii związanej z nowym członikem
          rodziny należy jednak pamiętać o kilku bardzo ważnych rzeczach.
        </p>
      </div>

      <div className="row">
        <h4>Dlaczego ZKwP FCI?</h4>

        <div className="zanim_kupisz">
          <ul>
            <li>
              <span>
                <PawOutline cssClasses="zanim_kupisz-icon padding_bottom_s" />
              </span>
              Związek krynologiczny w Polsce jako jedyny należy do Międzynarodowej Federacji Kynologicznej (FCI).
            </li>
            <li>
              <span>
                <PawOutline cssClasses="zanim_kupisz-icon" />
              </span>
              Rodowody FCI uznawane są na cały świecie.
            </li>
            <li>
              <span>
                <PawOutline cssClasses="zanim_kupisz-icon" />
              </span>
              Jest to organizacja posiadająca w Polsce długoletnią tradycję.
            </li>
            <li>
              <span>
                <PawOutline cssClasses="zanim_kupisz-icon" />
              </span>
              Pies z rodowodem ZKwP FCI to
              <strong>pewność dobrych genów i zdrowego psa</strong>.
            </li>
          </ul>
        </div>

        <h4>Czas</h4>
        <div className="zanim_kupisz">
          <p className="text_center_normal">
            Nowy przyjaciel w domu to wielka radość, ale również obowiązek. To czas który zabieramy sobie, a ofiarowujemy naszemu nowemu członkowi rodziny.
          </p>
          <p className="p_question">
            <strong>Ile godzin w tygoniu potrzebuje poświęcić psu? </strong>
          </p>

          <li>
            <ul>
              <li>
                <span>
                  <TimeOutline cssClasses="zanim_kupisz-icon" />
                </span>
                <strong> Codzenne spacery</strong> - minimum 4 razy dziennie (15 minut)
              </li>
              <li>
                <span>
                  <TimeOutline cssClasses="zanim_kupisz-icon" />
                </span>
                <strong>Codzienna pielęgnacja</strong> - czyszczenie oczu (5 min)
              </li>
              <li>
                <span>
                  <TimeOutline cssClasses="zanim_kupisz-icon padding_bottom" />
                </span>
                <strong>Codzienne czesanie</strong> - Maltańczyk jest to pies długowłosy jeżeli nie jest odpowiednio często czasany jego włos jest naprawdę w kiepskim stanie. (5-20
                minut)
              </li>
              <li>
                <span>
                  <TimeOutline cssClasses="zanim_kupisz-icon" />
                </span>
                <strong>Cotygodniowa kąpiel</strong> z suszeniem. (1-2h)
              </li>
              <li>
                <span>
                  <TimeOutline cssClasses="zanim_kupisz-icon padding_bottom" />
                </span>
                <strong>Zabawa</strong> - Czas poświęcony na zabawę jest dla szczeniaczka bardzo ważny, w rodzinnym domu miał baraci i siostry z którymi mógł się wyszaleć w nowym
                domku ma tylko Ciebie. (min 1h)
              </li>
              <li>
                <span>
                  <TimeOutline cssClasses="zanim_kupisz-icon padding_bottom" />
                </span>
                <strong>Szkolenie</strong> - Najważniejsza sprawa - jeżeli chcemy, aby nasz pies był super psem, nie możemy zapomnieć o szkoleniu. Posłuszeństwo jest naprawdę
                bardzo ważną kwestią. (20 minut)
              </li>
              <li>
                <span>
                  <TimeOutline cssClasses="zanim_kupisz-icon padding_bottom" />
                </span>
                <strong>Socjalizacja</strong> - Pisek wychodząc z domu rodzinnego jest szocjalizowany odpowiednio do swojego wieku. Twoim zadaniem jest pokazać mu świat zewnętrzny
                tak, by w życiu dorosłym był psem odważnym i posłusznym.
              </li>
            </ul>
          </li>

          <p className="text_center_small">
            Jak widzisz, każdy z wymienionych wyżej punktów to jednocześnie przyjemność i obowiązek. Jeżeli wiesz, że na tym etapie życia nie jesteś w stanie poświęcić psu
            odpowiedniej ilości czasu rozważ zakup psa w innym lepszym dla Ciebie i maleństwa terminie.
          </p>
        </div>

        <h4>Malutkie dzieci, a szczeniaczek</h4>
        <p className="zanim_kupisz_3">
          <strong>Nie sprzedajemy szczeniaczków do rodzin z małymi dziećmi.</strong>
          Nie gniewaj się na nas, nie robimy tego bez powodu. Mamy ku temu nawet bardzo dobry powod. Nauczeni doświadczeniem, wiemy jak trudno jest wygospodarować czas dla pieska,
          gdy po domu śmigają Twoje małe dzieciaczki, nierzadko jeszcze na czworaka. Nie jest też zagadką to, że
          <strong>Twoje maleństwa zawsze będzie dla Ciebie na pierwszym planie, a piesek na drugim</strong>. Istnieje bardzo duże prawdopodobieństwo, że nie będziesz w stanie
          poświecić mu odpowiedniej ilości czasu.
          <strong>Dobro naszych szczeniaczków jest dla nas najważniejsze</strong>, dlatego zgłoś się do nas jak Twoje dzieciaczki będą w wieku szkolnym. Jest to okres czasu kiedy
          będą mogły aktywnie uczesniczyć w wychowywaniu pieska, a Ty będziesz miał więcej czasu bo Twoje pociechy będą względnie samodzielne.
        </p>

        <h4>Maltańczyk psem dla mnie?</h4>

        <div className="zanim_kupisz">
          <p className="text_center_normal">
            Bardzo często dobieramy rasę psa, pod naszą osobowość i szczerze powiedziawszy jest to naprawdę mądra decyzja. Czy maltańczyk jest psem dla każdego? Skłamałabym jeżeli
            odpowiedziałabym, że tak.
          </p>

          <li>
            <ul>
              <li>
                <p className="p_question">
                  <strong> Dla kogo nie jest? </strong>
                </p>
                <span>
                  <HandLeftOutline cssClasses="zanim_kupisz-icon padding_bottom" />
                </span>
                Dla osób, które nie tolerują szczekania. Maltańczyk jest psem dość głośnym. Kiedy szczeka najczęściej? Podczas przywitania, czasem na spacerze. Czy da się to
                opanować? Z doświadczenia powiem, że tak ale jest to ciężka praca.
              </li>
              <li>
                <p className="p_question">
                  <strong> Dla kogo jeszcze nie jest maltańczyk? </strong>
                </p>
                <span>
                  <HandLeftOutline cssClasses="zanim_kupisz-icon padding_bottom" />
                </span>
                Dla osoby nie lubiącej poświęcać czasu na pielęgnacje zwierzątka. Maltańczyk to pies biały, w dodatku długowłosy. Ilość czasu jaką musimy poświęcić, aby pies
                wyglądał naprawdę dobrze jest stosunkowo duża.
              </li>
              <li>
                <p className="p_question">
                  <strong> Więcej Cię nie ma w domu, niż jesteś? </strong>
                </p>
                <span>
                  <HandLeftOutline cssClasses="zanim_kupisz-icon padding_bottom" />
                </span>
                Pracujesz 8h dziennie, plus dwie na dojazd i przyjazd. Co kilka tygodni masz weekend szkoleniowy. Właściwie więcej żyjesz poza domem, niż w domu. W takiej sytuacji
                maltańczyk nie jest psem dla Ciebie.
              </li>

              <li>
                <p className="p_question">
                  <strong> To dla kogo ten pies? </strong>
                </p>

                <li>
                  <span>
                    <HeartOutline cssClasses="zanim_kupisz-icon" />
                  </span>
                  Dla osób, które<strong> mają czas</strong> i chcą go poświęcić swojemu nowemu przyjacielowi.
                </li>
                <li>
                  <span>
                    <HeartOutline cssClasses="zanim_kupisz-icon" />
                  </span>
                  Dla osób, które <strong>czują się samotne</strong>, maltańczyk to świetny towarzysz życia.
                </li>
                <li>
                  <span>
                    <HeartOutline cssClasses="zanim_kupisz-icon" />
                  </span>
                  Dla osób o <strong>niskiej aktywności fizycznej</strong>, maltańczyk zmotywuje Cię do większej dawki ruchu w ciągu dnia.
                </li>
                <li>
                  <span>
                    <HeartOutline cssClasses="zanim_kupisz-icon" />
                  </span>
                  <strong>Dla rodzin z dziećmi w wieku szkolnym.</strong>
                </li>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section className="section-o_nas" id="o_nas">
      <div className="row">
        <h2>O nas</h2>
        <p className="long-copy">
          Nasz zespół to rodzina, której fundamentem jest miłość. Miłość do bliźniego i do psa jego. Początek hodowli to rok 2018, miłość do maltańczyków to zdecydowanie rok 2016.
        </p>
      </div>
      <div className="row o_nas">
        <div className="col span-1-of-3">
          <img className="owner" src="resources/css/img/o_nas_1.jpg" alt="Właściciel" />
          <h3>Dariusz</h3>
          <p>Szkolenie i posłuszeństwo psów to jego broszka. Wycenia wartość psa i to z nim podpisujesz umowę, jeżeli zdecydujesz się na zakup szczeniaczka.</p>
        </div>
        <div className="col span-1-of-3">
          <img className="owner" src="resources/css/img/o_nas_2.jpg" alt="Właściciel" />
          <h3>Magdalena</h3>
          <p>
            Ekspert w sprawie pielęgnacji i żywienia. <br />
            Co robić aby futerko było lśniące i naprawdę przyjemne w dotyku? Ona to wie i chętnie dzieli się swoją wiedzą.
          </p>
        </div>
        <div className="col span-1-of-3">
          <a href="https://www.facebook.com/izabela.kubinska.1" target="_blank">
            <img className="owner" src="resources/css/img/o_nas_3.jpg" alt="Właściciel" />
          </a>

          <h3>Izabela</h3>
          <p>Spec od wystaw, oceny psów, social mediów. Człowiek psia encyklopedia. To właśnie ona odbierze telefon, gdy do nas zadzwonisz.</p>
        </div>
      </div>
    </section>
  );
};

export default App;
