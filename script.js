const {PDFDocument} = PDFLib;
const input = document.getElementById("name");
async function load() {
        
        if(input.value == '' || input.value == " ") {
                return;
        }
        const value = input.value;
        input.value = "";
        const url = "https://arjunbchennithala.github.io/test/certificate.pdf";
        const obj = await fetch(url).then(res=>res.arrayBuffer());
        const pdfdoc = await PDFDocument.load(obj);
        const pages = pdfdoc.getPages();
        pages[0].moveTo(400-(value.length * 6), 268);
        pages[0].drawText(value, {size:30});
        const saver = await pdfdoc.save();
        download(saver, "certificate.pdf", "application/pdf");
}
