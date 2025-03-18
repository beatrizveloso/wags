import '../teatro/Teatro.css';

function Teatro() {
  return (
    <section className="align-pt2">
      <img src="images/wag-urs.png" alt="Imagem de Wagner em uma pose teatral" />
      <img src="images/wag-arm.png" alt="Imagem de Wagner representando uma cena de teatro" />
      <div className="text-pt2">
        <div className="facul">
          <h1>Faculdade✰⋆˙</h1>
          <p>Wagner decidiu cursar Jornalismo na Universidade Federal da Bahia (UFBA), em um momento em que ainda buscava seu caminho profissional. Durante a faculdade, ele participou de movimentos culturais e conheceu pessoas ligadas ao teatro, o que mudou completamente sua trajetória. Foi nesse período que ele se apaixonou pela atuação, passando a se dedicar a peças teatrais.</p>
        </div>
        <div className="teatro">
          <h1>Teatro✰⋆˙</h1>
          <p>No teatro, Wagner encontrou uma forma de canalizar sua energia criativa. Ele participou de montagens que chamaram atenção pela intensidade e qualidade de sua atuação. A experiência no teatro universitário e, posteriormente, em produções profissionais, foi essencial para sua formação como ator. Foi também nesse período que Wagner começou a construir conexões com outros artistas baianos que seriam importantes para sua carreira.</p>
        </div>
      </div>
    </section>
  );
}

export default Teatro;
