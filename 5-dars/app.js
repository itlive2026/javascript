function salomBer()
{
    alert("Assalomu aleykum")
    console.log("Assalom aleykum")
}

// salomBer();
// salomBer();
// salomBer();

function welcome(ism="Benom")
{
    alert("WELCOME "+ism)
}

// welcome("Ali")
// welcome("Kumushoy")
// welcome()
function yoshniAniqla(yil,joriy_yil=2026)
{
    let hisobla=joriy_yil-Number(yil)
    alert("Sening yoshing " +   hisobla )
}
// yoshniAniqla(2000);


function kvadrat(son)
{
    return son*son;
}

// alert(kvadrat(5))
// alert(kvadrat(10))

function kupaytma(a,b)
{
    return a*b;
}
// alert(kupaytma(3,4))


function karakara(son=1)
{
    let qaytar="";
    for (let i =1; i<=10; i++)
    {
        qaytar+=`${son}*${i}=${son*i}\n`
    }
    return qaytar;
}
// alert(karakara(6))

function daraja(a=1,b=0)
{
    let savatcha=1;
    for (let i=1;i<=b;i++)
    {
        savatcha*=a;
    }
    return savatcha;
}

alert(daraja(9,32))

