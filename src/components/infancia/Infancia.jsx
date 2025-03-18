import '../infancia/Infancia.css';

function Infancia() {
  return (
    <section className="align-inf" id="align-inf">
      <article className="text-inf">
        <h2>Infância e <br />Educação</h2>
        <h1>Wagner Maniçoba de <br />Moura. ݁₊ ⊹ . ݁˖ . ݁</h1>

        <div className="align-jov">
          <div className="juventude">
            <img src="images/wag-jov.png" alt="Wagner Moura jovem" />
            <h1>Juventude✰⋆˙</h1>
            <p>
              Foi na adolescência e juventude que Wagner começou a desenvolver sua paixão por música e teatro.
              Ele sempre foi um grande fã de rock e chegou a tocar em bandas locais, demonstrando um talento nato para a performance.
            </p>
          </div>
          <div className="comp">
            <img src="images/wag-comp.png" alt="Wagner Moura posando sentado em uma cadeira" />
          </div>
        </div>
      </article>

      <article className="text-cria">
        <img src="images/wag-cria.png" alt="Wagner Moura criança" />
        <h1>
          Nasceu em 27 de junho de 1976, <br />
          em Rodelas, uma pequena cidade <br />
          no interior da Bahia.
        </h1>
        <p>
          A infância de Wagner Moura foi marcada por simplicidade e pelo cenário rural típico de Rodelas. Seu pai, José
          Moura, era funcionário público, e sua mãe, Alderiva Moura, dona de casa. O ambiente de sua cidade, com fortes
          tradições sertanejas, influenciou sua personalidade e deu a ele um senso de resiliência e criatividade desde cedo.
        </p>
        <img src="images/wag-oculos.png" alt="Wagner Moura de óculos" />
      </article>
    </section>
  );
}

export default Infancia;
