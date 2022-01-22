const {PDFDocument} = PDFLib;
const input = document.getElementById("name");
const button = document.getElementsByTagName("button")[0];

async function load() {
        
        if(!(input.value.match(/^[a-zA-Z]/)) {
                return;
        }
        const value = input.value;
        input.value = "";
        button.innerHTML = "Processing....";
        const url = "https://nationalvotersday.github.io/pledge/certificate.pdf";
        const obj = await fetch(url).then(res=>res.arrayBuffer());
        const pdfdoc = await PDFDocument.load(obj);
        const pages = pdfdoc.getPages();
        pages[0].moveTo(400-(value.length * 6), 268);
        pages[0].drawText(value, {size:30});
        const saver = await pdfdoc.save();
        download(saver, "certificate.pdf", "application/pdf");
        button.innerHTML = "Download your certificate";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://independencedayatmycollege.000webhostapp.com/?name=" + value, true);
        xmlhttp.send();
}
