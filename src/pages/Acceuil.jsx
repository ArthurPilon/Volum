import Header from "../components/Header"; // ou ajuste selon la structure
import Footer from "../components/Footer";
import Module from "../components/Module";

import cover from "/assets/images/cover.jpg";
import intro from "/assets/images/intro.png";
import VolumIcon from "../components/VolumIcon";

export default function Accueil() {
  return (
    <>
      <Header />

      <main>
        <div id="photobaneer">
          <img
            src={cover}
            alt="photo d'un building"
          />

          <div id="baneerlogo-back">
            <div id="baneer-logo">
              <h1><VolumIcon/></h1>
              <h2>Solution Construction...</h2>
            </div>
          </div>
        </div>
        <div id="main-content">
          <div id="intro">
            <div>
              <img
                src={intro}
                alt=""
              />
            </div>
            <div id="intro-texte">
              <h3>Titre introduction</h3>
              <h4>Sous titre</h4>

              <p>
              Un usage du béton dans la construction pleinement engagé dans <span>l’économie circulaire</span> ? <br></br><br></br>
Un bâtiment neuf avec une structure béton à 100% de réemploi ? <br></br> <br></br>
Construire un bâtiment neuf de logements jusqu’en 2030 en RE 2020 au prix de la RT 2012 ? <br></br><br></br>
Substituer au <span>gâchis</span> des démolitions d’immeubles de logements par un procédé vertueux ? <br></br><br></br>

Découvrir le projet <span>voluM</span> c’est découvrir comment cela est possible.

              </p>
            </div>
          </div>
          <div id="module-container">
            <div id="module-text1" className="module">
              <Module
                moduleId={"mod1"}
                srcMod={
                  "https://www.youtube.com/embed/iTnqgAvBIIA?si=ulKVl-A2kkynGMNH?rel=0"
                }
              />
              <div className="mod-texte">
                <h3>Le Process <VolumIcon /></h3>
                <p>
                Cette première présentation se concentre sur <span>l'origine</span> du projet <VolumIcon />, le procédé technique : le process voluM. 
Ce procédé est breveté : n° 18 01154 "LA DÉCONSTRUCTION / RECONSTRUCTION MODULAIRE ». <br></br> <br></br>
Ce procédé consiste à découper dans une structure en béton d’un immeuble voué à la démolition des « modules » et de <span>reconstruire </span>sur un nouveau site (ou sur place) la structure d’un immeuble neuf en construction modulaire à partir des « Modules » préalablement « sourcés ». <br></br><br></br>
C’est un procédé de construction pour le gros œuvre des immeubles, l’exécution des superstructures, <span>100% réemploi</span>, qui s’inscrit pleinement dans l’économie circulaire la plus vertueuse. 

                </p>
              </div>
            </div>
            <div id="module-text2" className="module">
              <Module
                moduleId={"mod2"}
                srcMod={
                  "https://www.youtube.com/embed/nPIDeN-lsP4?si=rw5KACgjfm2iUsfJ?rel=0"
                }
              />
              <div className="mod-texte">
                <h3>Des valeurs éthiqueS</h3>
                <p>
                Cette seconde présentation aborde les <span>avantages</span> du process voluM.<br></br><br></br>
Le premier avantage est de substituer aux démolitions d'immeubles un procédé :
à 100% de réemploi 
et <span>100% vertueux</span> <br></br><br></br>

La démolition classique, c’est la destruction d’un ensemble ouvragé d’une grande richesse, capable d’accueillir des logements, pour n’aboutir après de multiples investissements qu’à de simples granulats routier : cela ne peut pas être considéré comme une valorisation performante. <br></br><br></br>     

À l’inverse, le process voluM, s’inscrit pleinement dans <span>l’économie circulaire</span>.
                </p>
              </div>
            </div>
            <div id="module-text3" className="module">
              <Module
                moduleId={"mod3"}
                srcMod={
                  "https://www.youtube.com/embed/EAiTgkqxm3g?rel=0"
                }
              />
              <div className="mod-texte">
                <h3>Le gain financieR</h3>
                <p>
                Cette troisième présentation s’attache à mettre en évidence :<br></br>
                &nbsp;- <span>le gain financier</span> que procure l'usage du process voluM <br></br>
                &nbsp;- l'augmentation mécanique de ce gain avec la limitation réglementaire des émissions de carbone dans la construction. <br></br><br></br>

Effectivement la RE 2020 limite l’impact carbone de la construction de logements.<br></br><br></br>

Cette limite réglementaire baissera par paliers successifs de plus en plus difficiles à respecter, nécessitant pour cela l’abandon progressif de la filière béton pour des matériaux bio-sourcés comme la filière bois.<br></br><br></br>
Le process voluM avec son <span>impact carbone</span> très faible respectera l’indice carbone construction de la RE 2020 jusqu’en 2030 pour un coût équivalent à la RT 2012.

                </p>
              </div>
            </div>
            <div id="module-text4" className="module">
              <Module
                moduleId={"mod4"}
                srcMod={
                  "https://www.youtube.com/embed/oSBoOe8zUSE?si=W46tbA-X4RwKqPXs?rel=0"
                }
              />
              <div className="mod-texte">
                <h3>Une double transactioN</h3>
                <p>
                Deux transactions pour deux opérations : <br></br>
- un achat <br></br>
- une vente<br></br><br></br>

Le projet voluM se propose de constituer un groupement, riche de <span>compétences</span> multiples, qui s’assure de la bonne réalisation du process du début jusqu’à la fin.<br></br><br></br>

Le début, c’est l’achat de la structure béton d’un immeuble voué à la démolition.<br></br>
La fin, c’est la livraison des logements neufs. <br></br><br></br>

Cette contractualisation permet de :<br></br>
- <span>simplifier</span> les passations de marché dans le respect de la commande publique<br></br>
- <span>clarifier</span> la chaîne de commandement et de responsabilités du procédé constructif.

Un prestataire unique pour offrir une prestation unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
