export default function dest(obj) {
  if (!obj) {
    throw Error('Введите данные');
  }
  const { special } = obj;
  const array = [];
  special.forEach((element) => {
    const { description = 'обратите внимание, описание "засекречено"' } = element;
    if (!element.description) {
      // eslint-disable-next-line no-param-reassign
      element.description = description;
    }
    return array.push(element);
  });
  return array;
}
