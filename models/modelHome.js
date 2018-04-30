exports.itens = [
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
    console.log(id);
    if (id > this.itens.length){
        console.log('Invalid id');
        return;
    }
    this.itens.splice(id, 1);
};

exports.insertIten = function(iten){
    if (iten == null){
        console.log('Iten = null');
        return;
    }
    this.itens.push(iten);
};

