/**
  *
  */
const getObjectByPropertyName = () => {

};

const getObjectByPropertyValue = () => {

};

const $pr = (target) => (
  new Proxy(target, {
    getObjectByPropertyName,
    getObjectByPropertyValue,
  })
);

export default $pr;
