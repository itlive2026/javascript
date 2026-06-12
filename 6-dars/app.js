
// function salomBer(){
//     alert("salom")
// }

// const xayrlash = function()
// {
//     alert("Salomat boling")
// }

// const kvadrat = x => x*x;

// alert(kvadrat(5))
//            0       1       2
let mevalar=["Olma","Behi","Ananas"]
// alert(mevalar[5])

let aralash=[23,true,4.12,"salom"]

// alert(aralash.length)

mevalar[1]="Banan"
// alert(mevalar)

mevalar.push("Gilos")
mevalar.push("Olcha")
// alert(mevalar)

meva=mevalar.pop()
// alert(mevalar)

meva= mevalar.shift(1)
// alert(mevalar)

// let ismlar=[];

// for(let i=1;i<=5;i++)
// {
//     let ism=prompt(i+"-telefonni kirit")

//     ismlar.push(ism.toUpperCase())
// }
// alert(ismlar.sort())


// let davlatlar=["Paris","Buxara","Chelsi","Nyuyork","Kualumpur","Gavayi"]

// for (let i=0;i<davlatlar.length;i++)
// {
//     console.log("Men "+davlatlar[i]+" ga borishni hohlayman")
// }

// davlatlar.forEach(davlat=>
// {
//     console.log("Menning sevimli davlatim:"+davlat)
// }
// )

function tasodifiyOraliq(min, max) {
  // Max va Min ham oraliqqa kiradi
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secret = tasodifiyOraliq(1, 200);
let min=1, max=200;
let sanoq=0;
while (true)
{
    let son=Number(prompt(sanoq+" - sonni kirit:"))
    sanoq++;
    if(son>secret)
        {
            max=son;
            alert("kichik son kirit  ["+min+" : "+max+"]")

        }
    
        else if(son<secret) 
            {
                min=son;
                alert("katta son kirit  ["+min+" : "+max+"]")
            }

    else 
        {
            alert(sanoq + " DARRA");
            break;
        }
}
