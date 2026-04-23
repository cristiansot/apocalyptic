import Nav from '../components/Nav';
import '../assets/css/releases.css';

const tracksBandcamp = [
  { id: "2544624555", buy: "https://apocalypticprods.com/store/product/ejecutor/" },
  { id: "1184413177", buy: "https://apocalypticprods.com/store/product/lex-talionis/" },
  { id: "3896186317", buy: "https://apocalypticprods.com/store/product/sulphuric-death-triumphant-darkness/" },
  { id: "1674591320", buy: "https://apocalypticprods.com/store/product/devoured-god-megalithic-prophetic-scriptures/" },
  { id: "3400396676", buy: "" },
  { id: "4090689596", buy: "https://apocalypticprods.com/store/product/malignant-beyond-the-grave-tape/" },
  { id: "71354888", buy: "" },
  { id: "1730663829", buy: "" },
  { id: "1852725793", buy: "" },
  { id: "2908697663", buy: "" },
  { id: "3197642165", buy: "" },
  { id: "2433724059", buy: "" },
  { id: "3725037500", buy: "" },
  { id: "3907322557", buy: "" },
  { id: "2607013922", buy: "" },
  { id: "446909161", buy: "" },
  { id: "3512396342", buy: "" },
  { id: "2782409824", buy: "" },
  { id: "1338992546", buy: "" },
  { id: "4025260142", buy: "" },
  { id: "4117924667", buy: "" },
  { id: "3961142673", buy: "" },
  { id: "3301606792", buy: "" },
  { id: "1156996036", buy: "" },
  { id: "1169274164", buy: "" },
  { id: "931535832", buy: "" },
  { id: "284168913", buy: "" },
  { id: "2349646907", buy: "" },
  { id: "1364007853", buy: "" },
  { id: "1364007853", buy: "" },
  { id: "15267059", buy: "" },
  { id: "3173831858", buy: "" },
  { id: "2068412031", buy: "" },
  { id: "315591286", buy: "" },
  { id: "1538902465", buy: "" }
];

const tracksSoundcloud = [
  { track: "https://soundcloud.com/apocalypticprods/unaussprechlichen-kulten-nephren-ka-nyarlathotep?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/capilla-ardiente-waltz-the-night?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/concilivm-dark-zenith?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/13-bells-of-doom-chile-tales-from-the-crypt?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/morbid-holocaust-i-keep-the-bane-to-existence?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/anuuruk-unspeakable-uncreation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/13th-temple-sanctuary-of-the-gloom?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/uttertomb-the-necrocentrist?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/rotten-tomb-mortuary-desires?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/violent-scum-pernicious-messiah?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/coffin-curse-swallowed-by-dying-hopes?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/henosis-promethean-salvation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/worship-death-no-salvation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/myst-immersed-into-the-mist?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/funeralis-chile-tu-fui-ego-eris?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/gravered-hail-to-the-legions-that-rise-from-flesh-and-darkness?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/totten-korps-supreme-commanders-of-darkness?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/coffin-curse-hear-the-dead?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/horrifying-euphoric-existence?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/excoriate-ghostly-stench-of-mortal-remains?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/feretro-primordial-ceremony?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/metastasis-the-essence-that-precedes-death?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/butamacho-horrendo-y-malefico?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/uggae-command-black-winds-of-pestilence?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/istengoat-ascension?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/satanic-ripper-insane-satanic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/exterminio-masacre?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/coffin-curse-timeless?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/black-beast-sign-the-contract?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/diabolical-messiah-chaos-in?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/swarm-of-terror-transformation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/putrid-evocation-into-the?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/praise-the-flame-mayhemic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/necranastasis-necroritualistic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/grimorio-gloriam-sathanas?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/uttertomb-necrological?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" },
  { track: "https://soundcloud.com/apocalypticprods/insorcist-the-downfallen?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", buy: "" }
];

function Releases() {
  return (
    <>
      <Nav />

      <div className="nav-content">

        <div className="bandcamp">
          {tracksBandcamp.map((item, i) => (
            <div key={i} className="track-card">

              <iframe
                loading="lazy"
                style={{ border: 0, width: '100%', height: '120px' }}
                src={`https://bandcamp.com/EmbeddedPlayer/track=${item.id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`}
                allow="autoplay"
              />

              <a
                href={item.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-button"
              >
                Comprar
              </a>

            </div>
          ))}
        </div>

        <div className="soundcloud">
          {tracksSoundcloud.map((item, i) => (
            <div key={i} className="track-card">

              <iframe
                loading="lazy"
                style={{ border: 0, width: '100%', height: '120px' }}
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(item.track)}`}
              />

              <a
                href={item.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-button"
              >
                Comprar
              </a>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Releases;