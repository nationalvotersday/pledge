const {PDFDocument} = PDFLib;
const input = document.getElementById("name");
//const notice = document.getElementById("notice");
async function load() {
        //notice.innerHTML = " ";
        
        if(input.value == '' || input.value == " ") {
                //notice.innerHTML = "Your name is empty...<br>Enter name to continue";
                return;
        }
        const value = input.value;
        input.value = "";
        const url = "https://arjunbchennithala.github.io/test/certificate.pdf";
        const obj = await fetch(url).then(res=>res.arrayBuffer());
        const pdfdoc = await PDFDocument.load(obj);
        const pages = pdfdoc.getPages();
        pages[0].moveTo(360, 260);
        pages[0].drawText(value, {size:30});
        const saver = await pdfdoc.save();
        download(saver, "certificate.pdf", "application/pdf");
}