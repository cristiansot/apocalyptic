import Nav from '../components/Nav';
import '../assets/css/releases.css';

const tracks = [
  "https://soundcloud.com/apocalypticprods/unaussprechlichen-kulten-nephren-ka-nyarlathotep?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/capilla-ardiente-waltz-the-night?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/concilivm-dark-zenith?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/13-bells-of-doom-chile-tales-from-the-crypt?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/morbid-holocaust-i-keep-the-bane-to-existence?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/anuuruk-unspeakable-uncreation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/13th-temple-sanctuary-of-the-gloom?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/uttertomb-the-necrocentrist?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/rotten-tomb-mortuary-desires?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/violent-scum-pernicious-messiah?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/coffin-curse-swallowed-by-dying-hopes?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/henosis-promethean-salvation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/worship-death-no-salvation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/myst-immersed-into-the-mist?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/funeralis-chile-tu-fui-ego-eris?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/gravered-hail-to-the-legions-that-rise-from-flesh-and-darkness?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/totten-korps-supreme-commanders-of-darkness?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/coffin-curse-hear-the-dead?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/horrifying-euphoric-existence?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/excoriate-ghostly-stench-of-mortal-remains?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/feretro-primordial-ceremony?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/metastasis-the-essence-that-precedes-death?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/butamacho-horrendo-y-malefico?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/uggae-command-black-winds-of-pestilence?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/istengoat-ascension?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/satanic-ripper-insane-satanic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/exterminio-masacre?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/coffin-curse-timeless?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/black-beast-sign-the-contract?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/diabolical-messiah-chaos-in?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/swarm-of-terror-transformation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/putrid-evocation-into-the?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/praise-the-flame-mayhemic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/necranastasis-necroritualistic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/grimorio-gloriam-sathanas?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/uttertomb-necrological?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/apocalypticprods/insorcist-the-downfallen?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
];

function Releases() {
  return (
    <>
      <Nav />

      <div className="soundcloud">
        {tracks.map((track, i) => (
          <iframe
            key={i}
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track)}`}
          />
        ))}
      </div>
    </>
  );
}

export default Releases;