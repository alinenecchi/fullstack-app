const transformData = (data) => {
    return data.map(item => ({
      id: item.id,
      image: item.image,
      name: item.name,
      categories: item.categories.split(' '),
      price: parseFloat(item.price.replace(',', '.')),
      brand: item.brand
    }));
  };
  
  module.exports = transformData;
  