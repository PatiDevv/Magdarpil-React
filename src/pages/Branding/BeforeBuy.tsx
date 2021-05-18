import PawOutlineIconPlusText from "../../components/atoms/PawOutlineIconPlusText";
import TimeOutlineIconPlusText from "../../components/atoms/TimeOutlineIconPlusText";
import QuestionIconAnswer from "../../components/atoms/QuestionIconAnswer";
import HeartOutlineIconPlusText from "../../components/atoms/HeartOutlineIconPlusText";
import "./BeforeBuy.css";

export const BeforeBuy = () => {
  return (
    <section className="section-before-buy" id="before-buy">
      <div>
        <h2>Zanim kupisz szczeniaczka</h2>
        <p className="long-copy">
          Posidanie psa to wspaniała przygoda. Nie bez powodu mówi się, że pies to najlepszy przyjaciel człowieka. W tym całym szaleństwie i euforii związanej z nowym członikem
          rodziny należy jednak pamiętać o kilku bardzo ważnych rzeczach.
        </p>
      </div>

      <div>
        <h4>Dlaczego ZKwP FCI?</h4>
        <div>
          <PawOutlineIconPlusText text="Związek krynologiczny w Polsce jako jedyny należy do Międzynarodowej Federacji Kynologicznej (FCI)." />
          <PawOutlineIconPlusText text="Rodowody FCI uznawane są na cały świecie." />
          <PawOutlineIconPlusText text="Jest to organizacja posiadająca w Polsce długoletnią tradycję." />
          <PawOutlineIconPlusText
            text={
              <div>
                <>
                  Pies z rodowodem ZKwP FCI to&nbsp; <strong>pewność dobrych genów i zdrowego psa</strong>.
                </>
              </div>
            }
          />
        </div>

        <h4>Czas</h4>
        <p className="text-center-normal">
          Nowy przyjaciel w domu to wielka radość, ale również obowiązek. To czas który zabieramy sobie, a ofiarowujemy naszemu nowemu członkowi rodziny.
        </p>
        <p className="p-question">
          <strong>Ile godzin w tygoniu potrzebuje poświęcić psu? </strong>
        </p>
        <div>
          <TimeOutlineIconPlusText
            text={
              <>
                <strong> Codzienne spacery</strong> - minimum 4 razy dziennie (15 minut)
              </>
            }
          />
          <TimeOutlineIconPlusText
            text={
              <>
                <strong>Codzienna pielęgnacja</strong> - czyszczenie oczu (5 min)
              </>
            }
          />
          <TimeOutlineIconPlusText
            text={
              <>
                <strong>Codzienne czesanie</strong> - Maltańczyk jest to pies długowłosy jeżeli nie jest odpowiednio często czasany jego włos jest naprawdę w kiepskim stanie. (5-20
                minut)
              </>
            }
          />
          <TimeOutlineIconPlusText
            text={
              <>
                <strong>Cotygodniowa kąpiel</strong> z suszeniem. (1-2h)
              </>
            }
          />
          <TimeOutlineIconPlusText
            text={
              <>
                <strong>Zabawa</strong> - Czas poświęcony na zabawę jest dla szczeniaczka bardzo ważny, w rodzinnym domu miał baraci i siostry z którymi mógł się wyszaleć w nowym
                domku ma tylko Ciebie. (min 1h)
              </>
            }
          />
          <TimeOutlineIconPlusText
            text={
              <>
                <strong>Szkolenie</strong> - Najważniejsza sprawa - jeżeli chcemy, aby nasz pies był super psem, nie możemy zapomnieć o szkoleniu. Posłuszeństwo jest naprawdę
                bardzo ważną kwestią. (20 minut)
              </>
            }
          />
          <TimeOutlineIconPlusText
            text={
              <>
                <strong>Socjalizacja</strong> - Pisek wychodząc z domu rodzinnego jest szocjalizowany odpowiednio do swojego wieku. Twoim zadaniem jest pokazać mu świat zewnętrzny
                tak, by w życiu dorosłym był psem odważnym i posłusznym.
              </>
            }
          />
        </div>
        <p className="text-center-small">
          Jak widzisz, każdy z wymienionych wyżej punktów to jednocześnie przyjemność i obowiązek. Jeżeli wiesz, że na tym etapie życia nie jesteś w stanie poświęcić psu
          odpowiedniej ilości czasu rozważ zakup psa w innym lepszym dla Ciebie i maleństwa terminie.
        </p>

        <h4>Malutkie dzieci, a szczeniaczek</h4>
        <p className="text-justifi-normal">
          <strong>Nie sprzedajemy szczeniaczków do rodzin z małymi dziećmi.&nbsp;</strong>
          Nie gniewaj się na nas, nie robimy tego bez powodu. Mamy ku temu nawet bardzo dobry powod. Nauczeni doświadczeniem, wiemy jak trudno jest wygospodarować czas dla pieska,
          gdy po domu śmigają Twoje małe dzieciaczki, nierzadko jeszcze na czworaka. Nie jest też zagadką to, że
          <strong>&nbsp;Twoje maleństwa zawsze będzie dla Ciebie na pierwszym planie, a piesek na drugim</strong>. Istnieje bardzo duże prawdopodobieństwo, że nie będziesz w stanie
          poświecić mu odpowiedniej ilości czasu.
          <strong>&nbsp;Dobro naszych szczeniaczków jest dla nas najważniejsze</strong>, dlatego zgłoś się do nas jak Twoje dzieciaczki będą w wieku szkolnym. Jest to okres czasu
          kiedy będą mogły aktywnie uczesniczyć w wychowywaniu pieska, a Ty będziesz miał więcej czasu bo Twoje pociechy będą względnie samodzielne.
        </p>

        <h4>Maltańczyk psem dla mnie?</h4>
        <p className="text-center-normal">
          Bardzo często dobieramy rasę psa, pod naszą osobowość i szczerze powiedziawszy jest to naprawdę mądra decyzja. Czy maltańczyk jest psem dla każdego? Skłamałabym jeżeli
          odpowiedziałabym, że tak.
        </p>
        <div>
          <QuestionIconAnswer
            question={
              <>
                <strong> Dla kogo nie jest? </strong>
              </>
            }
            answer="Dla osób, które nie tolerują szczekania. Maltańczyk jest psem dość głośnym. Kiedy szczeka najczęściej? Podczas przywitania, czasem na spacerze. Czy da się to
                opanować? Z doświadczenia powiem, że tak ale jest to ciężka praca."
          />
          <QuestionIconAnswer
            question={
              <>
                <strong> Dla kogo jeszcze nie jest maltańczyk? </strong>
              </>
            }
            answer="Dla osoby nie lubiącej poświęcać czasu na pielęgnacje zwierzątka. Maltańczyk to pies biały, w dodatku długowłosy. Ilość czasu jaką musimy poświęcić, aby pies
            wyglądał naprawdę dobrze jest stosunkowo duża."
          />
          <QuestionIconAnswer
            question={
              <>
                <strong> Więcej Cię nie ma w domu, niż jesteś? </strong>
              </>
            }
            answer="Pracujesz 8h dziennie, plus dwie na dojazd i przyjazd. Co kilka tygodni masz weekend szkoleniowy. Właściwie więcej żyjesz poza domem, niż w domu. W takiej sytuacji
            maltańczyk nie jest psem dla Ciebie."
          />
          <p className="p-question">
            <strong>To dla kogo ten pies? </strong>
          </p>
          <HeartOutlineIconPlusText
            text={
              <>
                Dla osób, które <strong>&nbsp;mają czas&nbsp;</strong> i chcą go poświęcić swojemu nowemu przyjacielowi.
              </>
            }
          />
          <HeartOutlineIconPlusText
            text={
              <>
                Dla osób, które <strong>&nbsp;czują się samotne</strong>, maltańczyk to świetny towarzysz życia.
              </>
            }
          />

          <HeartOutlineIconPlusText
            text={
              <>
                Dla osób o <strong>&nbsp;niskiej aktywności fizycznej</strong>, maltańczyk zmotywuje Cię do większej dawki ruchu.
              </>
            }
          />

          <HeartOutlineIconPlusText
            text={
              <>
                Dla osób, <strong> które potrzebują pieszczocha </strong> do głaskania i przytulania.
              </>
            }
          />

          <HeartOutlineIconPlusText
            text={
              <>
                <strong>Dla rodzin z dziećmi w wieku szkolnym.</strong>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};
