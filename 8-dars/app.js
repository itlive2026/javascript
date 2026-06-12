class Avtomobil{
    constructor(model,rangi,narxi)
    {
        this.model=model;
        this.rangi=rangi;
        this.narxi=narxi;
        this.probeg=0;
    }
    getinfo(){
        let text=`Modeli:${this.model} , rangi: ${this.rangi}`
        return text;
    }
    setprobeg(km=0){
        this.probeg+=km;
    }
    harakatlan(){
        return `${this.model} vooooon harakatlanmoqda`
    }
    yangi_ism(ism)
    {
        this.model=ism;
    }
}

const mashina1=new Avtomobil("Neksiya","Oq","10000$");
const mashina2=new Avtomobil("Bugatti","Qizil","550000$");

// alert(mashina1.getinfo())
mashina1.setprobeg(5000);
mashina1.setprobeg(2000);
console.log(mashina1.probeg);
console.log(mashina2.probeg);
console.log(mashina2.harakatlan());

mashina1.yangi_ism("Cobalt")
console.log(mashina1)f                         