import React from "react";
import PropTypes from "prop-types";
// PropTypes, si piensan trabajar en equipo lo necesitaran,
// permite que en consola te muestre si se recibe un tipo incorrecto de prop o un error si es requerido y no lo recibe
//Imports ajenos a react, iconos sacados de https://react-icons.github.io/react-icons/ por la multiple variedad y opciones que ofrece
import { AiOutlineSwap } from "react-icons/ai";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";

const MyAwesomeIcons = ({ icon, size, ...props }) => {
  //Un objeto cuyas key es un nombre adecuado (a mi parecer) y la entrada es el componente en sí
  //Esto permite solo con un string seleccionar diferentes iconos dependiendo la situación
  const iconMap = {
    search: BsSearch,
    compare: AiOutlineSwap,
    user: RiUserLine,
    cart: BsCart3,
  };
  //Si no se mando icono retorna falso (Evita que el componente explote)
  if (!icon || !iconMap[icon]) return false;
  //Si el valor que hay en la key icon (la string que recibi por props) existe, creo una constante
  //cuyo valor es el componente y lo retorno con sus props. Esto es lo mismo que si por ejemplo
  //quisiera el icono AiOutlineSwap lo importara y lo pusiera asi <AiOutlineSwap {...los props que quiera}/>
  if (typeof iconMap[icon] !== undefined) {
    const Icon = iconMap[icon];
    return <Icon style={{ fontSize: size }} {...props} />;
    //{...props} pasa al componente cualquier otro prop que venga desde el componente padre, sin tener que declararlo
    //siempre uno a uno, algo más abierto si se quiere mandar algun efecto especial a un icono especifico (En este caso)
  }
};

MyAwesomeIcons.propTypes = {
  icon: PropTypes.string.isRequired, //el prop icon es un string y es requerido
  size: PropTypes.number, //el prop size es un number y es opcional
};
//Más info de PropTypes https://es.reactjs.org/docs/typechecking-with-proptypes.html

export default MyAwesomeIcons;
