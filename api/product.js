import fetch from 'isomorphic-unfetch';

//const rootUrl = "http://127.0.0.1:5000/api/v1/";
const rootUrl = "https://mike-eb-api.herokuapp.com/api/v1";
const productUrl = rootUrl + "product"
const orderUrl = rootUrl + "order"
const data1 = [
    {
        id: 1,
        name: "萌貓投資偵探所 隣の人の投資生活",
        price: '100',
        publisher: '商周出版',
        publishDate: '2019-03-07',
        language: '繁體中文',
        pages: '264',
        isbn: '9789864776283',
        isbn13: '9789864776283',
        category: ['投資', '理財'],
        imgUrl: 'https://cf-assets2.tenlong.com.tw/products/images/000/130/414/original/9789864776283.jpg?1551941737',
    },
    {
        id: 2,
        name: "萌貓投資偵探所 隣の人の投資生活",
        price: '100',
        publisher: '商周出版',
        publishDate: '2019-03-07',
        language: '繁體中文',
        pages: '264',
        isbn: '9789864776283',
        isbn13: '9789864776283',
        category: ['投資', '理財'],
        imgUrl: 'https://cf-assets2.tenlong.com.tw/products/images/000/130/414/original/9789864776283.jpg?1551941737',
    },
    {
        id: 3,
        name: "萌貓投資偵探所 隣の人の投資生活",
        price: '100',
        publisher: '商周出版',
        publishDate: '2019-03-07',
        language: '繁體中文',
        pages: '264',
        isbn: '9789864776283',
        isbn13: '9789864776283',
        category: ['投資', '理財'],
        imgUrl: 'https://cf-assets2.tenlong.com.tw/products/images/000/130/414/original/9789864776283.jpg?1551941737',
    },
];

async function getProductById(id) {
    const res = await fetch(productUrl + `?pid=${id}` );
    const data = await res.json();

    return { 
        data
    }
}

async function getProductList() {
    const res = await fetch(productUrl);
    const data = await res.json();

    return { 
        data
    }
}

async function createOrder(data) {
    console.log(JSON.stringify(data));
    const res = await fetch(orderUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });

    const result = await res.json();
    console.log(result)
    return result;
}

export {
    getProductList,
    getProductById,
    createOrder,
};
