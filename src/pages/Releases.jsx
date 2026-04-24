import Nav from '../components/Nav';
import '../assets/css/releases.css';
import ejecutorImg from '../assets/img/coverart/ejecutor-medium-daga.webp';
import lextalionisimg from '../assets/img/coverart/lex-talionis-revelations.webp';
import sulphuricimg from '../assets/img/coverart/sulphuric.webp';
import devouredimg from '../assets/img/coverart/devoured.webp';
import devsimg from '../assets/img/coverart/devs.webp';
import malignantimg from '../assets/img/coverart/malignant.webp';
import gorjeoimg from '../assets/img/coverart/gorjeo.webp'
import strigoiimg from '../assets/img/coverart/strigoi.webp'


const tracksBandcamp = [
  { 
    id: "2544624555", 
    art: ejecutorImg, 
    title: "EJECUTOR", 
    cdName: "Médium... La Daga de la Iniciación", 
    format: "CD", 
    buy: "https://apocalypticprods.com/store/product/ejecutor/" 
  },
  { 
    id: "1184413177", 
    art: lextalionisimg, 
    title: "LEX TALIONIS", 
    cdName: "Revelations", 
    format: "MCD", 
    buy: "https://apocalypticprods.com/store/product/lex-talionis/"
  },
  { 
    id: "3896186317", 
    art: sulphuricimg, 
    title: "SULPHURIC DEATH", 
    cdName: "Beyond the Void of Doom",
    format: "CD LIVE", 
    buy: "https://apocalypticprods.com/store/product/sulphuric-death-triumphant-darkness/"
  },
  { 
    id: "1674591320", 
    art: devouredimg, 
    title: "DEVOURED GOD", 
    cdName: "Megalithic Prophetic Scriptures", 
    format: "CD", 
    buy: "https://apocalypticprods.com/store/product/devoured-god-megalithic-prophetic-scriptures/"
  },
  { id: "3400396676", 
    art: devsimg, 
    title: "DEVS MORTVORVM", 
    cdName: "Love for the Dead", 
    format: "CD", 
    buy: ""
  },
  { 
    id: "4090689596",
    art: malignantimg, 
    title: "MALIGNANT", 
    cdName: "Under the Clock", 
    format: "Tape", 
    buy: "https://apocalypticprods.com/store/product/malignant-beyond-the-grave-tape/"
  },
  { id: "71354888", 
    art: gorjeoimg, 
    title: "GORJEO SEGLAR", 
    cdName: "El Vaivén & La Muerte", 
    format: "CD", 
    buy: "https://apocalypticprods.com/store/product/gorjeo-seglar-chile-acronvs-cd/" 
  },
  { 
    id: "1730663829", 
    art: strigoiimg, 
    title: "STRIGOI", 
    cdName: "Ultratomb", 
    format: "", 
    buy: "" 
  },
  { id: "1852725793", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "2908697663", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "3197642165", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "2433724059", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "3725037500", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "3907322557", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "2607013922", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "446909161", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "3512396342", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "2782409824", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "1338992546", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "4025260142", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "4117924667", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "3961142673", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "3301606792", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "1156996036", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "1169274164", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "931535832", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "284168913", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "2349646907", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "1364007853", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "15267059", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "3173831858", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "2068412031", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "315591286", art: "", title: "", cdName: "", format: "", buy: "" },
  { id: "1538902465", art: "", title: "", cdName: "", format: "", buy: "" }
];

const tracksSoundcloud = [
  { track: "https://soundcloud.com/apocalypticprods/unaussprechlichen-kulten-nephren-ka-nyarlathotep", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/capilla-ardiente-waltz-the-night", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/concilivm-dark-zenith", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/13-bells-of-doom-chile-tales-from-the-crypt", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/morbid-holocaust-i-keep-the-bane-to-existence", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/anuuruk-unspeakable-uncreation", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/13th-temple-sanctuary-of-the-gloom", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/uttertomb-the-necrocentrist", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/rotten-tomb-mortuary-desires", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/violent-scum-pernicious-messiah", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/coffin-curse-swallowed-by-dying-hopes", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/henosis-promethean-salvation", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/worship-death-no-salvation", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/myst-immersed-into-the-mist", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/funeralis-chile-tu-fui-ego-eris", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/gravered-hail-to-the-legions-that-rise-from-flesh-and-darkness", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/totten-korps-supreme-commanders-of-darkness", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/coffin-curse-hear-the-dead", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/horrifying-euphoric-existence", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/excoriate-ghostly-stench-of-mortal-remains", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/feretro-primordial-ceremony", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/metastasis-the-essence-that-precedes-death", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/butamacho-horrendo-y-malefico", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/uggae-command-black-winds-of-pestilence", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/istengoat-ascension", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/satanic-ripper-insane-satanic", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/exterminio-masacre", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/coffin-curse-timeless", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/black-beast-sign-the-contract", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/diabolical-messiah-chaos-in", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/swarm-of-terror-transformation", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/putrid-evocation-into-the", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/praise-the-flame-mayhemic", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/necranastasis-necroritualistic", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/grimorio-gloriam-sathanas", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/uttertomb-necrological", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/insorcist-the-downfallen", buy: "" }
];

function Releases() {
  return (
    <>
      <Nav />

      <div className="nav-content">

        {/* SECCIÓN DE BANDCAMP CON CARDS DE DOS COLUMNAS */}
        <div className="bandcamp container">
          <div className="row">
            {tracksBandcamp.map((item, i) => (
              <div key={i} className="col-12 col-md-6 mb-4">
                <div className="track-card">
                  
                  {/* Card con estructura de dos columnas */}
                  <div className="card-two-columns">
                    
                    {/* Columna izquierda: imagen */}
                    {item.art && (
                      <div className="card-image-col">
                        <img 
                          src={item.art} 
                          alt={item.title || "Cover art"} 
                          className="card-artwork" 
                        />
                      </div>
                    )}
                    
                    {/* Columna derecha: información */}
                    <div className="card-info-col">
                      <h4 className="card-title">{item.title || "Untitled"}</h4>
                      
                      {item.cdName && (
                        <p className="card-cdname">"{item.cdName}"</p>
                      )}
                      
                      {item.format && (
                        <p className="card-format">{item.format}</p>
                      )}
                      
                      {item.buy && (
                        <a
                          href={item.buy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buy-button"
                        >
                          Comprar
                        </a>
                      )}
                    </div>
                    
                  </div>
                  
                  {/* Reproductor debajo de las dos columnas */}
                  {item.id && (
                    <div className="card-player">
                      <iframe
                        loading="lazy"
                        style={{ border: 0, width: '100%', height: '120px' }}
                        src={`https://bandcamp.com/EmbeddedPlayer/track=${item.id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`}
                        allow="autoplay"
                        title={item.title || "Bandcamp player"}
                      />
                    </div>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN DE SOUNDCLOUD */}
        <div className="soundcloud container">
          <div className="row">
            {tracksSoundcloud.map((item, i) => (
              <div key={i} className="col-12 col-md-6 mb-4">
                <div className="track-card">
                  <iframe
                    loading="lazy"
                    style={{ border: 0, width: '100%', height: '120px' }}
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(item.track)}&color=%230687f5&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                    title="Soundcloud player"
                  />
                  {item.buy && (
                    <div className="buy-button-container mt-2">
                      <a
                        href={item.buy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-button"
                      >
                        Comprar
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Releases;