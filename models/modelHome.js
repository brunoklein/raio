var itens = [
    {
        image:'/img/img-item-1.png',
        name:'BatleField 3',
        price:'9,99'
    },
    {
        image:'/img/img-item-1.png',
        name:'MOHAA',
        price:'9,99'
    },
    {
        image:'/img/img-item-1.png',
        name:'Dota 2',
        price:'9,99'
    },
    {
        image:'/img/img-item-1.png',
        name:'Counter Strike GO',
        price:'9,99'
    },
    {
        image:'/img/img-item-1.png',
        name:'Heros of New Storm',
        price:'9,99'
    },
    {
        image:'/img/img-item-1.png',
        name:'Leage of Legends',
        price:'9,99'
    },
    {
        image:'/img/img-item-1.png',
        name:'Super Star Soccer',
        price:'8,99'
    },
    {
        image:'/img/img-item-1.png',
        name:'Tomb Raider I',
        price:'9,95'
    },
    {
        image:'/img/img-item-1.png',
        name:'Tomb Raider II',
        price:'9,80'
    }
];

exports.deleteIten = function(id){
    if (id > itens.length){
        return;
    }
    itens.remove(id);
}

exports.insertIten = function(item){
    console.log('MODEL '+item);
    if (item == null){
        return;
    }
    itens.push(['/img/img-item-1.png', item.name, item.price]);
}

module.exports = {
    itens: itens
};