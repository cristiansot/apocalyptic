import '../assets/css/whatsapp.css'

const Whatsapp = () => {
  return (
    <div className="phone-call cbh-phone cbh-green cbh-show cbh-static" id="clbh_phone_div" 
      style={{ position: 'fixed', bottom: '0px', right: '5px', zIndex: '2147483647' }}>
      <a id="WhatsApp-button" href="whatsapp://send?text= Hola&amp;phone=+56962386663" className="phoneJs" title="Enviar mensaje!">
        <div className="cbh-ph-circle"></div>
        <div className="cbh-ph-circle-fill"></div>
        <div className="cbh-ph-img-circle1"></div>
      </a>
    </div>
  );
};

export default Whatsapp;