let mashina={
    model:"Neksiya 2",
    rang:"Oq",
    probeg:12000,
    narx:"10 000$",
    mator:["1.6 DONC","SONC"]
}

// console.log(mashina);
// console.log(mashina.mator[1])

let person={
    fullname:"Aliyev Vali",
    pasport:"AB1234567",
    jins:["erkak","ayol"],
    birthday:"12.02.2002",
    adress:{
        country:["Uzbeksitan","Qozog'iston","Turkmaniston"],
        city:["Tashkent","Samarqand"]
    }
}
// console.log(person.adress.city[1])

// console.log(Object.keys(person))
// console.log(Object.values(person))

person.pasport="AD001001";
console.log(person)

const universitet = {
    nomi: "TATU",
    manzil: {
        davlat: "O'zbekiston",
        viloyat: "Toshkent",
        kocha: "Amir Temur ko'chasi",
        geo: {
            latitude: 41.3385,
            longitude: 69.3342
        }
    },

    fakultetlar: {
        dasturiy_injiniring: {
            talabalar_soni: 1200,
            oqituvchilar: [
                {
                    ism: "Ali Valiyev",
                    fanlar: ["JavaScript", "Node.js", "React"],
                    tajriba_yili: 8
                },
                {
                    ism: "Sardor Karimov",
                    fanlar: ["Python", "Django"],
                    tajriba_yili: 5
                }
            ]
        },

        kiberxavfsizlik: {
            talabalar_soni: 800,
            laboratoriyalar: {
                linux_lab: true,
                network_lab: true,
                ai_security_lab: false
            }
        }
    },

    talabalar: [
        {
            id: 1,
            ism: "Jasur",
            kurs: 2,

            kontakt: {
                telefon: "+998901112233",
                email: "jasur@gmail.com"
            },

            baholar: {
                javascript: 5,
                python: 4,
                cpp: 5
            },

            qurilmalar: [
                {
                    turi: "Laptop",
                    model: "Lenovo Legion"
                },
                {
                    turi: "Telefon",
                    model: "iPhone 13"
                }
            ]
        },

        {
            id: 2,
            ism: "Aziza",
            kurs: 3,

            kontakt: {
                telefon: "+998998887766",
                email: "aziza@gmail.com"
            },

            baholar: {
                javascript: 4,
                python: 5,
                cpp: 4
            },

            qurilmalar: [
                {
                    turi: "Laptop",
                    model: "MacBook Air"
                }
            ]
        }
    ]
};

console.log(universitet)


qurilmalar=universitet.talabalar[0].qurilmalar

qurilmalar.forEach(qurilma => {
    console.log(qurilma.turi)
});